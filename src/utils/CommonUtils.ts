import { Prisma, UpdateHistoryEntry } from ".prisma/client";
import { ErrorObject } from "ajv";
import { NumberValidationResult } from "../types";

export function extractErrorMessagesFromValidationResult(validationErrors: ErrorObject[] | null | undefined) {
    let errorMessages: string[] = [];
    if (validationErrors != null || validationErrors != undefined) {
        validationErrors.forEach((error) => {
            if (error.message != undefined || error.message != null) {
                if (error.instancePath != '') {
                    errorMessages.push(`${error.instancePath.slice(1)} : ${error.message}`);
                }else {
                    errorMessages.push(error.message);
                }
            }
        });
    }
    return errorMessages;
}

export function bigIntSerializer(json: object) {
    return JSON.parse(JSON.stringify(json, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value
        ));
}

export function cleanDbJson(entry: Prisma.JsonValue) {
    
    let cleanedJson= entry?.toString().replace('\\','');
    return cleanedJson as Prisma.JsonValue;
}

export function formatUpdateHistory ( updateHistory: UpdateHistoryEntry []): UpdateHistoryEntry [] {
    let bigIntSerializedUpdateHistory: UpdateHistoryEntry [] = bigIntSerializer(updateHistory);
    
    bigIntSerializedUpdateHistory.forEach((updateHistoryEntry) => {
        updateHistoryEntry.data = cleanDbJson(updateHistoryEntry.data);
    });

    return bigIntSerializedUpdateHistory;
}

export function safeParseInt(number: string): NumberValidationResult {
    let maybeNumber = Number.parseInt(number);
    if(Number.isNaN(maybeNumber)) {
        return { isValid: false, value: Number.NaN }
    }

    return { isValid: true, value: maybeNumber };
}