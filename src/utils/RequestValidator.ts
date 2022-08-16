import Ajv from "ajv";
import * as newTagRequestSchema from "../schemas/new_tag_request_schema.json";
import * as updateTagRequestSchema from "../schemas/update_tag_request_schema.json";
import { NewTagRequest, UpdateTagRequest } from "../models/TagRequests";

const ajv = new Ajv({ allErrors: true });

export const validateNewTagRequest =
  ajv.compile<NewTagRequest>(newTagRequestSchema);
export const validateUpdateTagRequest = ajv.compile<UpdateTagRequest>(
  updateTagRequestSchema
);
