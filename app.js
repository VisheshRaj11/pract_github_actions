import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hello from the backend"})
});

app.listen(3000, () => {
    console.log("Hello from localhost");
})