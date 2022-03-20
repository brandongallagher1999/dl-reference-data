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
