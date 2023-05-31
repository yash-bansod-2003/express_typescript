import express, { Request, Response, NextFunction } from 'express';
import { PORT } from '@/config';
import { databaseService } from '@/services';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'hello browser' });
});

app.listen(PORT, async () => {
    await databaseService();
    console.log(`server started at localhost ${PORT}`);
});


