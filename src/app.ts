import express from 'express';
import bodyParser from 'body-parser';
import tagRouter from './routes/TagRouter';
import activeIngredientRouter from './routes/ActiveIngredientRouter';
import dosageFormTypeRouter from './routes/DosageFormTypeRouter';
import dosageFormRouter from './routes/DosageFormRouter';
import manufacturerRouter from './routes/ManufacturerRouter';
import paymentMethodRouter from './routes/PaymentMethodRouter';
import productCategoryRouter from './routes/ProductCategoryRouter';
import supplierRouter from './routes/SupplierRouter';
import unitTypeRouter from './routes/UnitTypeRouter';
import unitRouter from './routes/UnitRouter';
import RefDataErrorMiddleware from './middleware/RefDataErrorMiddleware';

const SageService = express();

SageService.use(bodyParser.json());
SageService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Routers
SageService.use(tagRouter);
SageService.use(activeIngredientRouter);
SageService.use(dosageFormTypeRouter);
SageService.use(dosageFormRouter);
SageService.use(manufacturerRouter);
SageService.use(paymentMethodRouter);
SageService.use(productCategoryRouter);
SageService.use(supplierRouter);
SageService.use(unitTypeRouter);
SageService.use(unitRouter);

//error handling middleware
SageService.use(RefDataErrorMiddleware);

SageService.get('/sage/v1/serviceInfo', (request, response) => {
  response.json({ serviceName: 'Sage Data Service', version: '1.0.0' });
});

export default SageService;
