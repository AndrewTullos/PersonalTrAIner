const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/submit-form", (req, res) => {
	const formData = req.body;
	console.log(formData);
	res.json({ message: "Form data received successfully!" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
