import { log } from "console";
import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Extracting query parameters
    const {officeID, officeLocation, officePhone} = req.body;

    // Constructing the SQL query
    let query = "SELECT * FROM offices";
    let conditions = [];
    let parameters = [];

    if (officeID) {
      conditions.push("office_id = ?");
      parameters.push(officeID);
    }
    if (officeLocation) {
      conditions.push("office_location = ?");
      parameters.push(officeLocation);
    }
    if (officePhone) {
      conditions.push("office_phone = ?");
      parameters.push(officePhone);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    // Execute the query
    const [offices] = await db.promise().execute(query, parameters);
    return res.status(200).json(offices);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
