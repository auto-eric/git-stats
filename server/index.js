const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => { res.json({ message: "service is running" }) })

app.listen(PORT,
    () => { console.info(`server listens on ${PORT}`) })

