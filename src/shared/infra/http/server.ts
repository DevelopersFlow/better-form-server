import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello BetterForm!' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333!');
});
