import express from 'express';
import AuthRouter from '@routes/auth.routes';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express !');
});

//API router
app.use('/auth',AuthRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});