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
    const {plateID, carModel, carYear, carStatus, officeID, carPrice } = req.body;

    // Constructing the SQL query
    let query = "SELECT * FROM cars";
    let conditions = [];
    let parameters = [];

    if (plateID) {
      conditions.push("plate_id = ?");
      parameters.push(plateID);
    }
    if (carModel) {
      conditions.push("car_model = ?");
      parameters.push(carModel);
    }
    if (carYear) {
      conditions.push("car_year = ?");
      parameters.push(carYear);
    }
    if (carStatus) {
      conditions.push("car_status = ?");
      parameters.push(carStatus);
    }
    if (officeID) {
      conditions.push("office_id = ?");
      parameters.push(officeID);
    }
    if (carPrice) {
      conditions.push("car_price = ?");
      parameters.push(carPrice);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    // Execute the query
    const [cars] = await db.promise().execute(query, parameters);
    return res.status(200).json(cars);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
