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
import * as newDosageFormTypeRequestScheme from '../schemas/new_dosage_form_type_request_scheme.json';
import * as updateDosageFormTypeRequestScheme from '../schemas/update_dosage_form_type_request_scheme.json';

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
  ajv.compile<NewDosageFormTypeRequest>(newDosageFormTypeRequestScheme);
export const validateUpdateDosageFormTypeRequest =
  ajv.compile<UpdateDosageFormTypeRequest>(updateDosageFormTypeRequestScheme);
