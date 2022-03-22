import express from "express";
import bodyParser from "body-parser";
import manufacturerRouter from "./src/Modules/manufacturer/manufacturer.router";
import supplierRouter from "./src/Modules/supplier/supplier.router";
import paymentMethodRouter from "./src/Modules/payment-method/payment-method.router";
import productCategoryRouter from "./src/Modules/product-category/product-category.router";
import activeIngredientsRouter from "./src/Modules/active-ingredient/active-ingredient.router";
import unitRouter from "./src/Modules/unit/unit.router";
import tagRouter from "./src/Modules/tag/tag.router";
import dosageFormRouter from "./src/Modules/dosage-form/dosage-form.router";
import dosageFormTypeRouter from "./src/Modules/dosage-form-type/dosage-form-type.router";
import errorMiddleware from "./src/middleware/error.Middleware";

const ReferenceDataService = express();

ReferenceDataService.use(bodyParser.json());
ReferenceDataService.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
ReferenceDataService.use(manufacturerRouter);
ReferenceDataService.use(supplierRouter);
ReferenceDataService.use(paymentMethodRouter);
ReferenceDataService.use(productCategoryRouter);
ReferenceDataService.use(activeIngredientsRouter);
ReferenceDataService.use(unitRouter);
ReferenceDataService.use(tagRouter);
ReferenceDataService.use(dosageFormRouter);
ReferenceDataService.use(dosageFormTypeRouter);
ReferenceDataService.use(errorMiddleware);

ReferenceDataService.get(
  "/xibalba/v1/refdata/serviceInfo",
  (request, response) => {
    response.json({ serviceName: "Reference Data Service", version: "1.0.0" });
  }
);

export default ReferenceDataService;
