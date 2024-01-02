import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const body = req.body;
        await db.promise().execute('INSERT INTO reservations (user_id, plate_id, reserve_time, pickup_time, return_time, payment) VALUES (?, ?, ?, ?, ?, ?);', [body.userID, body.plateID, body.reserveTime, body.pickupTime, body.returnTime, body.payment]);
        await db.promise().execute(`UPDATE cars SET car_status = 'rented' WHERE plate_id = ?;`, [body.plateID]);

        return res.status(200).json({ message: 'reservation made successfully.' });

    } catch (error) {
        console.error('Error making reservation description:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
