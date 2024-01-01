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
        console.log(req.body);
        await db.promise().execute('INSERT INTO cars (plate_id, car_model, car_pic, car_year, car_status, office_id, car_price) VALUES (?, ?, ?, ?, ?, ?, ?);', [body.plateID, body.carModel, body.carPic, body.carYear, body.carStatus, body.officeID, body.carPrice]);
        return res.status(200).json({ message: 'Car added successfully.' });

    } catch (error) {
        console.error('Error adding car description:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
