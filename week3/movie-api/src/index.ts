import express from 'express';
import bodyParser from 'body-parser';
import { movieRouter } from './routers/movie-router';


const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);


// log the request being made
app.use((req, res, next) => {
  console.log(`request made with path: ${req.path} \nand type: ${req.method}`);
  next();
});

// use the body parser to convert request json
app.use(bodyParser.json());

/*******************************************************************************
 * ROUTERS
 *******************************************************************************/
app.use('/movies', movieRouter);



// start up the app
app.listen(port, () => {
  console.log(`App is running at http://localhost:${app.get('port')}`);
});