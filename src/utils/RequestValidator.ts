import Ajv from "ajv";
import * as new_tag_request_schema from "../schemas/new_tag_request_schema.json";
import * as update_tag_request_schema from "../schemas/update_tag_request_schema.json";
import { NewTagRequest, UpdateTagRequest } from "../models/TagRequests";

const ajv = new Ajv({ allErrors: true })

export const validate_new_tag_request = ajv.compile<NewTagRequest>(new_tag_request_schema);
export const validate_update_tag_request = ajv.compile<UpdateTagRequest>(update_tag_request_schema);