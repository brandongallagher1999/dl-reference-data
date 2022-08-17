import Ajv from 'ajv';
import * as newTagRequestSchema from '../schemas/new_tag_request_schema.json';
import * as updateTagRequestSchema from '../schemas/update_tag_request_schema.json';
import * as newActiveIngredientRequestSchema from '../schemas/new_active_ingredient_request_schema.json';
import * as updateActiveIngredientRequestSchema from '../schemas/update_active_ingredient_request_schema.json';
import { NewTagRequest, UpdateTagRequest } from '../models/TagRequests';
import {
  NewActiveIngredientRequest,
  UpdateActiveIngredientRequest
} from '../models/ActiveIngredientRequest';
import {
  NewDosageFormTypeRequest,
  UpdateDosageFormTypeRequest
} from '../models/DosageFormTypeRequests';
import * as newDosageFormTypeRequestSchema from '../schemas/new_dosage_form_type_request_schema.json';
import * as updateDosageFormTypeRequestSchema from '../schemas/update_dosage_form_type_request_schema.json';
import {
  NewDosageFormRequest,
  UpdateDosageFormRequest
} from '../models/DosageFormRequests';
import * as newDosageFormRequestSchema from '../schemas/new_dosage_form_request_schema.json';
import * as updateDosageFormRequestSchema from '../schemas/update_dosage_form_request_schema.json';
import {
  NewManufacturerRequest,
  UpdateManufacturerRequest
} from '../models/ManufacturerRequests';
import * as newManufacturerRequestSchema from '../schemas/new_manufacturer_request_schema.json';
import * as updateManufacturerRequestSchema from '../schemas/update_manufacturer_request_schema.json';
import {
  NewPaymentMethodRequest,
  UpdatePaymentMethodRequest
} from '../models/PaymentMethodRequests';
import * as newPaymentMethodRequestSchema from '../schemas/new_payment_method_request_schema.json';
import * as updatePaymentMethodRequestSchema from '../schemas/update_payment_method_schema.json';
import {
  NewProductCategoryRequest,
  UpdateProductCategoryRequest
} from '../models/ProductCategoryRequests';
import * as newProductCategoryRequestSchema from '../schemas/new_product_category_request_schema.json';
import * as updateProductCategoryRequestSchema from '../schemas/update_product_category_request_schema.json';

const ajv = new Ajv({ allErrors: true });

export const validateNewTagRequest =
  ajv.compile<NewTagRequest>(newTagRequestSchema);
export const validateUpdateTagRequest = ajv.compile<UpdateTagRequest>(
  updateTagRequestSchema
);
export const validateNewActiveIngredientRequest =
  ajv.compile<NewActiveIngredientRequest>(newActiveIngredientRequestSchema);
export const validateUpdateActiveIngredientRequest =
  ajv.compile<UpdateActiveIngredientRequest>(
    updateActiveIngredientRequestSchema
  );
export const validateNewDosageFormTypeRequest =
  ajv.compile<NewDosageFormTypeRequest>(newDosageFormTypeRequestSchema);
export const validateUpdateDosageFormTypeRequest =
  ajv.compile<UpdateDosageFormTypeRequest>(updateDosageFormTypeRequestSchema);
export const validateNewDosageFormRequest = ajv.compile<NewDosageFormRequest>(
  newDosageFormRequestSchema
);
export const validateUpdateDosageFormRequest =
  ajv.compile<UpdateDosageFormRequest>(updateDosageFormRequestSchema);
export const validateNewManufacturerRequest =
  ajv.compile<NewManufacturerRequest>(newManufacturerRequestSchema);
export const validateUpdateManufacturerRequest =
  ajv.compile<UpdateManufacturerRequest>(updateManufacturerRequestSchema);
export const validateNewPaymentMethodRequest =
  ajv.compile<NewPaymentMethodRequest>(newPaymentMethodRequestSchema);
export const validateUpdatePaymentMethodRequest =
  ajv.compile<UpdatePaymentMethodRequest>(updatePaymentMethodRequestSchema);
export const validateNewProductCategoryRequest =
  ajv.compile<NewProductCategoryRequest>(newProductCategoryRequestSchema);
export const validateUpdateProductCategoryRequest =
  ajv.compile<UpdateProductCategoryRequest>(updateProductCategoryRequestSchema);
