import * as next from 'next';
import * as express from 'express';
import {Request, Response} from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';

require('dotenv').config();
const port   = parseInt(process.env.PORT, 10) || 3000;
const dev    = process.env.NODE_ENV !== 'production';
const app    = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.disable('x-powered-by');
  server.use(helmet());
  server.use(compression());

  server.get('/:category/:slug-:id(\\d+)', (req: Request, res: Response) => {
    const actualPage  = '/post';
    const queryParams = {
      slug: req.params.slug,
      category: req.params.category,
      id: req.params.id,
    };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch(err => {
  console.error(err.stack);
  process.exit(1);
});
