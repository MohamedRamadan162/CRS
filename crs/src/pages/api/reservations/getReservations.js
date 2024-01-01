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
    const {rsrvID, userID, plateID, reserveTime, pickupTime, returnTime } = req.query;

    // Constructing the SQL query
    let query = "SELECT * FROM reservations";
    let conditions = [];
    let parameters = [];

    if (rsrvID) {
        conditions.push("rsrv_id = ?");
        parameters.push(rsrvID);
      }
      if (userID) {
        conditions.push("user_id = ?");
        parameters.push(userID);
      }
    if (plateID) {
      conditions.push("plate_id = ?");
      parameters.push(plateID);
    }
    if (reserveTime) {
      conditions.push("reserve_time = ?");
      parameters.push(reserveTime);
    }
    if (pickupTime) {
      conditions.push("pickup_time = ?");
      parameters.push(pickupTime);
    }
    if (returnTime) {
      conditions.push("return_time = ?");
      parameters.push(returnTime);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    // Execute the query
    const [reservations] = await db.promise().execute(query, parameters);
    return res.status(200).json(reservations);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
