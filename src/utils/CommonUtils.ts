import { Prisma, UpdateHistoryEntry } from ".prisma/client";
import { ErrorObject } from "ajv";
import { NumberValidationResult } from "../types";
/**
 *
 * @param { ErrorObject [] } validationErrors
 * @return { String [] }
 */
export function extractErrorMessagesFromValidationResult(
  validationErrors: ErrorObject[] | null | undefined
) {
  const errorMessages: string[] = [];
  if (validationErrors != null || validationErrors != undefined) {
    validationErrors.forEach((error) => {
      if (error.message != undefined || error.message != null) {
        if (error.instancePath != "") {
          errorMessages.push(
            `${error.instancePath.slice(1)} : ${error.message}`
          );
        } else {
          errorMessages.push(error.message);
        }
      }
    });
  }
  return errorMessages;
}

/**
 *
 * @param { Object } json
 * @return { any }
 */
export function bigIntSerializer(json: object) {
  return JSON.parse(
    JSON.stringify(json, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}
/**
 *
 * @param { Prisma.JsonValue } entry
 * @return { Prisma.JsonValue }
 */
export function cleanDbJson(entry: Prisma.JsonValue) {
  const cleanedJson = entry?.toString().replace("\\", "");
  return cleanedJson as Prisma.JsonValue;
}

/**
 *
 * @param { UpdateHistoryEntry [] } updateHistory
 * @return { UpdateHistoryEntry [] }
 */
export function formatUpdateHistory(
  updateHistory: UpdateHistoryEntry[]
): UpdateHistoryEntry[] {
  const bigIntSerializedUpdateHistory: UpdateHistoryEntry[] =
    bigIntSerializer(updateHistory);

  bigIntSerializedUpdateHistory.forEach((updateHistoryEntry) => {
    updateHistoryEntry.data = cleanDbJson(updateHistoryEntry.data);
  });

  return bigIntSerializedUpdateHistory;
}
/**
 *
 * @param { string } number
 * @return { NumberValidationResult }
 */
export function safeParseInt(number: string): NumberValidationResult {
  const maybeNumber = Number.parseInt(number);
  if (Number.isNaN(maybeNumber)) {
    return { isValid: false, value: Number.NaN };
  }

  return { isValid: true, value: maybeNumber };
}
