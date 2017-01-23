import * as express from 'express';
import { Response, Request } from 'express';
import * as http from 'http';
import * as path from 'path';
import { json } from 'body-parser';
import { bookingRouter } from './service/booking.service';
import  { roleRouter } from './service/role.service';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../')));
app.use(json());

// Rotas de API
app.use('/api/booking/', bookingRouter);
app.use('/api/role/', roleRouter);

app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '../index.html'));
});

const server: http.Server = http.createServer(app);

server.listen(3000);

export { app }