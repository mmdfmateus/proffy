import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  const users = [
    {
      name: "Mateus Mourao",
      age: "22"
    }
  ];
  return res.json(users);
});

app.listen(3333);