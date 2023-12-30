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
        await db.promise().execute('INSERT INTO users (user_name, user_email, user_password, user_phone, is_admin)VALUES (?, ?, ?, ?, ?);', [body.userName, body.userEmail, body.userPassword, body.userPhone, body.isAdmin]);

        return res.status(200).json({ message: 'User added successfully.' });

    } catch (error) {
        console.error('Error adding user description:', error);
        return res.status(500).json({ message: 'Internal server Error' });
    }
}
