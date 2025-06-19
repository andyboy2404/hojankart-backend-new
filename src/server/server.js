import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// ✅ Optional: Configure Email Transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your_email@gmail.com',
//     pass: 'your_gmail_app_password',
//   },
// });

// ✅ Bulk Enquiry Endpoint
app.post('/api/bulk-enquiry', (req, res) => {
  const data = req.body;

  console.log('📩 Received Enquiry:', data); // Debug log

  const sql = `
    INSERT INTO bulk_enquiries
    (org_name, contact_person, email, phone, requirement_type, meals, duration, meal_type, veg_pref, start_date, address, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.orgName,
    data.contactPerson,
    data.email,
    data.phone,
    data.requirementType,
    data.meals,
    data.duration,
    data.mealType,
    data.vegPref,
    data.startDate,
    data.address,
    data.notes || '',
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('❌ DB Insert Error:', err);
      return res.status(500).send('Database error');
    }

    console.log('✅ Data inserted into DB');

    // ✅ Optional: Send confirmation email
    // const mailOptions = {
    //   from: 'your_email@gmail.com',
    //   to: 'recipient@example.com',
    //   subject: 'New Bulk Enquiry Submitted',
    //   text: `New Enquiry:\n\n${JSON.stringify(data, null, 2)}`
    // };

    // transporter.sendMail(mailOptions, (emailErr, info) => {
    //   if (emailErr) {
    //     console.error('❌ Email Error:', emailErr);
    //     return res.status(500).send('Email failed');
    //   }

    //   console.log('📧 Email sent:', info.response);
    // });

    return res.status(200).send('Success'); // Always send a response!
  });
});

// ✅ Health Check
app.get('/api/test', (req, res) => {
  res.send('✅ API is up and responding!');
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
