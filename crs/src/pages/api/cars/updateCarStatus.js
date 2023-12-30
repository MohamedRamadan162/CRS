import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    try {
        const body = req.body;
        await db.promise().execute('UPDATE cars SET car_status = ? WHERE plate_id = ?;', [body.carStatus, body.plateID]);

        return res.status(200).json({ message: 'Car status updated successfully.' });

    } catch (error) {
        console.error('Error updating car status:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
