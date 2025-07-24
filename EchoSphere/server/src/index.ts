import e from "express";
const app = e();

const PORT = process.env.PORT || 5000;

app.use(e.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT);
