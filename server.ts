import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('This is a placeholder for the other/server.ts file.');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
