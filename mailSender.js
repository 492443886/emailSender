const nodemailer = require("nodemailer")

hostEmail = "cma074@zohomail.com"

// Create a transporter using the SMTP settings for Zoho Mail
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: hostEmail, // your Yahoo email address
    pass: "v9cT9pNirExZGVZ", // your Yahoo email password or app-specific password
  },
})

// const to = "cma074@zohomail.com"

// const mailOptions = {
//   from: "cma074@zohomail.com",
//   to: to,
//   subject: subject,
//   text: text,
//   html: "<p>HTML version of the message</p><h2>Work</h2>",
// }

const sendEmail = (mailOptions) => {
  mailOptions.from = hostEmail
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error)
    } else {
      console.log("Email sent:", to)
    }
  })
}

// sendEmail("Hello World!")

module.exports = sendEmail
