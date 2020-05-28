import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
