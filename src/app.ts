import express from 'express';
import bodyParser from 'body-parser';
import tagRouter from './routes/TagRouter';
import activeIngredientRouter from './routes/ActiveIngredientRouter';
import RefDataErrorMiddleware from './middleware/RefDataErrorMiddleware';

const SageService = express();

SageService.use(bodyParser.json());
SageService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

SageService.use(tagRouter);
SageService.use(activeIngredientRouter);

//error handling middleware
SageService.use(RefDataErrorMiddleware);

SageService.get('/sage/v1/serviceInfo', (request, response) => {
  response.json({ serviceName: 'Sage Data Service', version: '1.0.0' });
});

export default SageService;
