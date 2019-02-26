import * as next from 'next';
import * as express from 'express';
import {Request, Response} from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';

const port   = parseInt(process.env.PORT, 10) || 3000;
const dev    = process.env.NODE_ENV !== 'production';
const app    = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.disable('x-powered-by');
  server.use(helmet());
  server.use(compression());

  server.get('/p/:id', (req: Request, res: Response) => {
    const actualPage  = '/post';
    const queryParams = {title: req.params.id};
    app.render(req, res, actualPage, queryParams);
  });

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});
