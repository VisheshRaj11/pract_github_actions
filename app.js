import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.json({message: "Hello from the backend tasks to test pr pull_request"})
});

app.listen(3000, () => {
    console.log("Hello from localhost");
})