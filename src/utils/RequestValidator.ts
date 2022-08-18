import Ajv from 'ajv';
import { NewTagRequest, UpdateTagRequest } from '../models/TagRequests';
import * as newTagRequestSchema from '../schemas/new_tag_request_schema.json';
import * as updateTagRequestSchema from '../schemas/update_tag_request_schema.json';
import {
  NewActiveIngredientRequest,
  UpdateActiveIngredientRequest
} from '../models/ActiveIngredientRequest';
import * as newActiveIngredientRequestSchema from '../schemas/new_active_ingredient_request_schema.json';
import * as updateActiveIngredientRequestSchema from '../schemas/update_active_ingredient_request_schema.json';
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
import {
  NewSupplierRequest,
  UpdateSupplierRequest
} from '../models/SupplierRequests';
import * as newSupplierRequestSchema from '../schemas/new_supplier_request_schema.json';
import * as updateSupplierRequestSchema from '../schemas/update_supplier_request_schema.json';
import {
  NewUnitTypeRequest,
  UpdateUnitTypeRequest
} from '../models/UnitTypeRequests';
import * as newUnitTypeRequestSchema from '../schemas/new_unit_type_request_schema.json';
import * as updateUnitTypeRequestSchema from '../schemas/update_unit_type_request_schema.json';
import { NewUnitRequest, UpdateUnitRequest } from '../models/UnitRequests';
import * as newUnitRequestSchema from '../schemas/new_unit_request_schema.json';
import * as updateUnitRequestSchema from '../schemas/update_unit_request_schema.json';

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
export const validateNewSupplierRequest = ajv.compile<NewSupplierRequest>(
  newSupplierRequestSchema
);
export const validateUpdateSupplierRequest = ajv.compile<UpdateSupplierRequest>(
  updateSupplierRequestSchema
);
export const validateNewUnitTypeRequest = ajv.compile<NewUnitTypeRequest>(
  newUnitTypeRequestSchema
);
export const validateUpdateUnitTypeRequest = ajv.compile<UpdateUnitTypeRequest>(
  updateUnitTypeRequestSchema
);
export const validateNewUnitRequest =
  ajv.compile<NewUnitRequest>(newUnitRequestSchema);
export const validateUpdateUnitRequest = ajv.compile<UpdateUnitRequest>(
  updateUnitRequestSchema
);
