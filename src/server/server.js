import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import nodemailer from 'nodemailer';
import https from 'https';
import fs from 'fs';
//  const app = require('./app'); // Replace with your actual Express app

 const app = express();
app.use(cors());
app.use(express.json());

// ✅ Start Server
const PORT = 5000; const options = { key: fs.readFileSync('/etc/letsencrypt/live/srv1003983.hstgr.cloud/privkey.pem'), cert: fs.readFileSync('/etc/letsencrypt/live/srv1003983.hstgr.cloud/fullchain.pem') }; https.createServer(options, app).listen(PORT, '0.0.0.0', () => { console.log(`🚀 HTTPS server running on https://srv1003983.hstgr.cloud:${PORT}`); });



// ✅ MySQL Pool Setup
const db = mysql.createPool({
  host: 'srv1404.hstgr.io',
  port: 3306,
  user: 'u647779144_bhojankart',
  password: 'Dxcqwerty@123',
  database: 'u647779144_bhojankart',
  connectionLimit: 10,
});

// ✅ Optional: Configure Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhojankart@gmail.com',
    pass: 'Bhojankart2025NJ*', // Use app password here
  },
});

// ✅ Health Check
app.get('/api/test', (req, res) => {
  res.send('✅ API is up and responding!');
});

// ✅ Admin API: Get all signups
app.get('/api/signups', (req, res) => {
  db.query('SELECT * FROM bhojankart_signups ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('❌ Error fetching signups:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
});

// ✅ Bulk Enquiry Endpoint
app.post('/bulk-enquiry', (req, res) => {
  const data = req.body;
  console.log('📩 Received Enquiry:', data);

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

    console.log('✅ Bulk enquiry inserted into DB');
    res.status(200).send('Success');

    // Uncomment to send email notification
    /*
    const mailOptions = {
      from: 'bhojankart@gmail.com',
      to: 'recipient@example.com',
      subject: 'New Bulk Enquiry Submitted',
      text: `New Enquiry:\n\n${JSON.stringify(data, null, 2)}`
    };

    transporter.sendMail(mailOptions, (emailErr, info) => {
      if (emailErr) {
        console.error('❌ Email Error:', emailErr);
        return;
      }
      console.log('📧 Email sent:', info.response);
    });
    */
  });
});

// ✅ Update Signup Endpoint
app.put('/api/signups/:id', (req, res) => {
  const id = req.params.id;
  const {
    UserId,
    fullName,
    dob,
    age,
    gender,
    email,
    phone,
    profession,
    meals,
    duration,
    differentPlan,
    lunchPlan,
    dinnerPlan,
    combinedPlan,
    lunchAddress,
    lunchLandmark,
    dinnerAddress,
    dinnerLandmark,
    extraRoti,
    additionalInfo,
    mealStartDate,
    isConvertedLeadToBussiness
  } = req.body;

  const sql = `UPDATE bhojankart_signups SET
    UserId = ?,
    fullName = ?,
    dob = ?,
    age = ?,
    gender = ?,
    email = ?,
    phone = ?,
    profession = ?,
    meals = ?,
    duration = ?,
    differentPlan = ?,
    lunchPlan = ?,
    dinnerPlan = ?,
    combinedPlan = ?,
    lunchAddress = ?,
    lunchLandmark = ?,
    dinnerAddress = ?,
    dinnerLandmark = ?,
    extraRoti = ?,
    additionalInfo = ?,
    mealStartDate = ?,
    isConvertedLeadToBussiness = ?
    WHERE id = ?`;
  const values = [
    UserId,
    fullName,
    dob,
    age,
    gender,
    email,
    phone,
    profession,
    meals,
    duration,
    differentPlan,
    lunchPlan,
    dinnerPlan,
    combinedPlan,
    lunchAddress,
    lunchLandmark,
    dinnerAddress,
    dinnerLandmark,
    extraRoti,
    additionalInfo,
    mealStartDate,
    isConvertedLeadToBussiness ? 1 : 0,
    id
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('❌ Error updating signup:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Signup not found' });
    }

    // If isConvertedLeadToBussiness is true, insert into BhojankartUsersList
    if (isConvertedLeadToBussiness) {
      // username: first 4 letters of name + last 4 digits of phone
      const namePart = fullName.replace(/\s+/g, '').substring(0, 4);
      const phonePart = phone.slice(-4);
      const username = namePart + phonePart;
      const password = phone;
      const fksighnuid = id;
      const insertUserSql = `INSERT INTO BhojankartUsersList (username, password, fksighnuid) VALUES (?, ?, ?)`;
      db.query(insertUserSql, [username, password, fksighnuid], (userErr, userResult) => {
        if (userErr) {
          // If duplicate entry, ignore, else return error
          if (userErr.code !== 'ER_DUP_ENTRY') {
            console.error('❌ Error inserting user:', userErr);
            return res.status(500).json({ message: 'Database error (user insert)', error: userErr });
          }
        }
        // Success response
        return res.status(200).json({ message: 'Signup updated and user inserted successfully!' });
      });
    } else {
      res.status(200).json({ message: 'Signup updated successfully!' });
    }
  });
});

// ✅ Form Submission Endpoint
app.post("/submitForm", (req, res) => {
  const {
    fullName,
    dob,
    age,
    gender,
    email,
    phone,
    profession,
    meals,
    duration,
    differentPlan,
    lunchPlan,
    dinnerPlan,
    combinedPlan,
    lunchAddress,
    lunchLandmark,
    dinnerAddress,
    dinnerLandmark,
    extraRoti,
    additionalInfo,
  } = req.body;

  const userId = `${fullName.substring(0, 4)}${phone.slice(-4)}`;
  const mealsStr = Array.isArray(meals) ? meals.join(", ") : "";

  // Check for existing email or phone
  const checkSql = `SELECT id FROM bhojankart_signups WHERE email = ? OR phone = ? LIMIT 1`;
  db.query(checkSql, [email, phone], (checkErr, checkResults) => {
    if (checkErr) {
      console.error("❌ Error checking for existing signup:", checkErr);
      return res.status(500).json({ message: "Database error", error: checkErr });
    }
    if (checkResults.length > 0) {
      return res.status(409).json({ message: "We already have your data. Thank you for signing up!" });
    }

    const sql = `
      INSERT INTO bhojankart_signups 
      (UserId, fullName, dob, age, gender, email, phone, profession, meals, duration, differentPlan, lunchPlan, dinnerPlan, combinedPlan, lunchAddress, lunchLandmark, dinnerAddress, dinnerLandmark, extraRoti, additionalInfo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      userId,
      fullName,
      dob,
      age,
      gender,
      email,
      phone,
      profession,
      mealsStr,
      duration,
      differentPlan,
      lunchPlan,
      dinnerPlan,
      combinedPlan,
      lunchAddress,
      lunchLandmark,
      dinnerAddress,
      dinnerLandmark,
      extraRoti,
      additionalInfo,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("❌ Error inserting form data:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }

      res.status(200).json({
        message: "Form submitted successfully!",
        id: result.insertId,
      });

      // Uncomment to enable email notification
      // const mailOptions = {
      //   from: 'anandchourasiya24@gmail.com',
      //   to: 'anandchourasiya24@gmail.com',
      //   subject: 'New Signup Form Submitted',
      //   html: `
      //     <h2>New Signup Form Submission</h2>
      //     <table border="1" cellpadding="5" cellspacing="0">
      //       <tbody>
      //         ${Object.entries(req.body).map(([key, value]) => `
      //           <tr>
      //             <td><strong>${key}</strong></td>
      //             <td>${Array.isArray(value) ? value.join(', ') : value}</td>
      //           </tr>
      //         `).join('')}
      //       </tbody>
      //     </table>
      //   `
      // };

      // transporter.sendMail(mailOptions, (emailErr, info) => {
      //   if (emailErr) {
      //     console.error('❌ Email Error:', emailErr);
      //     return;
      //   }
      //   console.log('📧 Signup Email sent:', info.response);
      // });
    });
  });
});

