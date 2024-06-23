import express from 'express';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express !');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});