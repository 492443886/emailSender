const nodemailer = require("nodemailer")

// Create a transporter using the SMTP settings for Zoho Mail
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: "cma074@zohomail.com", // your Yahoo email address
    pass: "v9cT9pNirExZGVZ", // your Yahoo email password or app-specific password
  },
})

// const to = "cma074@zohomail.com"

const sendEmail = (to, subject, text) => {
  // Define the email message
  const mailOptions = {
    from: "cma074@zohomail.com",
    to: to,
    subject: subject,
    text: text,
  }

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error)
      throw error
    } else {
      console.log("Email sent:", to)
    }
  })
}

// sendEmail("Hello World!")

module.exports = sendEmail
