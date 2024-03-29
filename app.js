const mailSender = require("./mailSender.js")
const sendEmailSmash = require("./mailSenderSmash.js")
const express = require("express")
const app = express()
const port = 3080
const cors = require("cors")
const baseURI = "/emailSender"

app.use(cors())
app.use(express.json())

app.post(baseURI + "/send", async (req, res) => {
  try {
    // console.log(req)
    const mailOptions = req.body
    console.log(mailOptions)
    mailSender(mailOptions)
    res.status(200).send("Email sent")
  } catch (e) {
    console.log(e)
    res.status(500).send("Email not sent")
  }
})

app.post(baseURI + "/sendSmash", async (req, res) => {
  try {
    const mailOptions = req.body
    console.log(mailOptions)
    sendEmailSmash(mailOptions)
    res.status(200).send("Email sent")
  } catch (e) {
    console.log(e)
    res.status(500).send("Email not sent")
  }
})

app.get(baseURI + "/t", (req, res) => {
  res.send("Hello World from emailSender!")
})
app.get(baseURI + "/help", (req, res) => {
  res.send(`
    This is the help page for the emailSender API.
    To send an email, send a POST request to /emailSender/send with the following JSON data:
    example request:
    {"to": "cma074@zohomail.com", "subject": "good", "text": "hi"}`)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
