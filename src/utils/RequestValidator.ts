import Ajv from "ajv";
import * as newTagRequestSchema from "../schemas/new_tag_request_schema.json";
import * as updateTagRequestSchema from "../schemas/update_tag_request_schema.json";
import * as newActiveIngredientRequest from "../schemas/new_active_ingredient_request_schema.json";
import * as updateActiveIngredientRequest from "../schemas/update_active_ingredient_request_schema.json";
import { NewTagRequest, UpdateTagRequest } from "../models/TagRequests";
import {
  NewActiveIngredientRequest,
  UpdateActiveIngredientRequest,
} from "../models/ActiveIngredientRequest";

const ajv = new Ajv({ allErrors: true });

export const validateNewTagRequest =
  ajv.compile<NewTagRequest>(newTagRequestSchema);
export const validateUpdateTagRequest = ajv.compile<UpdateTagRequest>(
  updateTagRequestSchema
);
export const validateNewActiveIngredientRequest =
  ajv.compile<NewActiveIngredientRequest>(newActiveIngredientRequest);
export const validateUpdateActiveIngredientRequest =
  ajv.compile<UpdateActiveIngredientRequest>(updateActiveIngredientRequest);
