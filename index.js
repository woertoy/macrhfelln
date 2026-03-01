const express = require("express")
const path = require("path")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/login", (req, res) => {
  const username = req.body.username
  res.send(`Welcome, ${username}!`)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})
