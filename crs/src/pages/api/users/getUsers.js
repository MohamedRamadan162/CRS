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
    const {userID, userName, userEmail, userPhone} = req.query;
    console.log('in get users',req.query);

    // Constructing the SQL query
    let query = "SELECT * FROM users";
    let conditions = [];
    let parameters = [];

    if (userID) {
      conditions.push("user_id = ?");
      parameters.push(userID);
    }
    if (userName) {
      conditions.push("user_name = ?");
      parameters.push(userName);
    }
    if (userEmail) {
      conditions.push("user_email = ?");
      parameters.push(userEmail);
    }
    if (userPhone) {
      conditions.push("user_phone = ?");
      parameters.push(userPhone);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    // Execute the query
    const [users] = await db.promise().execute(query, parameters);
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
