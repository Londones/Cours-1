import express, { Request, Response } from 'express';

const app = express();

app.get('/api/hello', (req: Request, res: Response) => {
    const message = 'Hello, world!';
    res.json({ message });
  });

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});