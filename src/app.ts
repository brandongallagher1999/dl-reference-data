import express from "express";
import bodyParser from "body-parser";
import manufacturerRouter from "./Modules/manufacturers/manufacturer.router";
import supplierRouter from "./Modules/suppliers/supplier.router";
import paymentMethodRouter from "./Modules/payment-method/payment-method.router";
import productCategoryRouter from "./Modules/product-category/product-category.router";
import activeIngredientsRouter from "./Modules/active-ingredient/active-ingredient.router";
import unitRouter from "./Modules/units/unit.router";
import tagRouter from "./Modules/tags/tag.router";
import dosageFormRouter from "./Modules/dosage-form/dosage-form.router";
import errorMiddleware from "./middleware/error.Middleware";

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(manufacturerRouter);
app.use(supplierRouter);
app.use(paymentMethodRouter);
app.use(productCategoryRouter);
app.use(activeIngredientsRouter);
app.use(unitRouter);
app.use(tagRouter);
app.use(dosageFormRouter);
app.use(errorMiddleware);

app.get("/xibalba/v1/refdata/serviceInfo", (request, response) => {
  response.json({ serviceName: "Reference Data Service", version: "1.0.0" });
});

app.listen(port, () => {
  console.info(`Reference Data Service listening on port ${port}!`);
});
