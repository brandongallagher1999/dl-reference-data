import express from "express";
import bodyParser from "body-parser";
import manufacturerRouter from "./src/Modules/manufacturers/manufacturer.router";
import supplierRouter from "./src/Modules/suppliers/supplier.router";
import paymentMethodRouter from "./src/Modules/payment-method/payment-method.router";
import productCategoryRouter from "./src/Modules/product-category/product-category.router";
import activeIngredientsRouter from "./src/Modules/active-ingredient/active-ingredient.router";
import unitRouter from "./src/Modules/units/unit.router";
import tagRouter from "./src/Modules/tags/tag.router";
import dosageFormRouter from "./src/Modules/dosage-form/dosage-form.router";
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
ReferenceDataService.use(errorMiddleware);

ReferenceDataService.get(
  "/xibalba/v1/refdata/serviceInfo",
  (request, response) => {
    response.json({ serviceName: "Reference Data Service", version: "1.0.0" });
  }
);

export default ReferenceDataService;
