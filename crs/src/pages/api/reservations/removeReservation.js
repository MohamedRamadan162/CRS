import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).end();
    }

    try {
        const body = req.body;
        await db.promise().execute('DELETE FROM reservations WHERE rsrv_id = ?;', [body.rsrvID]);
        await db.promise().execute(`UPDATE cars SET car_status = 'active' WHERE plate_id = ?;`, [body.plateID]);

        return res.status(200).json({ message: 'reservation removed successfully.' });

    } catch (error) {
        console.error('Error removing reservation:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
