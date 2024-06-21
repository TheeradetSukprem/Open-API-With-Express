import express from 'express';

const app = express();
const port = 4000;

const jsonData = {
  name: "john",
  age: 20
};

app.get('/profiles', (req, res) => {
  return res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
