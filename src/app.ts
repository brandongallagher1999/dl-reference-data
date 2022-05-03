import express from "express";
import bodyParser from "body-parser";
import manufacturerRouter from "./modules/manufacturer/manufacturer.router";
import supplierRouter from "./modules/supplier/supplier.router";
import paymentMethodRouter from "./modules/payment-method/payment-method.router";
import productCategoryRouter from "./modules/product-category/product-category.router";
import activeIngredientsRouter from "./modules/active-ingredient/active-ingredient.router";
import unitRouter from "./modules/unit/unit.router";
import tagRouter from "./modules/tag/tag.router";
import dosageFormRouter from "./modules/dosage-form/dosage-form.router";
import dosageFormTypeRouter from "./modules/dosage-form-type/dosage-form-type.router";
import errorMiddleware from "./middleware/error.Middleware";
import unitTypeRouter from "./modules/unity-type/unit-type.router";
import refDataUpdateHistoryRouter from "./modules/update-history/update-history-router";

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
ReferenceDataService.use(unitTypeRouter);
ReferenceDataService.use(refDataUpdateHistoryRouter);
ReferenceDataService.use(errorMiddleware);

ReferenceDataService.get(
  "/xibalba/v1/refdata/serviceInfo",
  (request, response) => {
    response.json({ serviceName: "Reference Data Service", version: "1.0.0" });
  }
);

export default ReferenceDataService;
