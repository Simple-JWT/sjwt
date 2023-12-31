import {codes, messages} from './codesMessages';

/**
 * SJWT Code - a code exported from `./codesMessages.js`
 *
 * @typedef {string} SjwtCode
 */

/**
 * SJWT Code Item - an SJWT Code with additional contextual hints
 *
 * @typedef {object} SjwtCodeItem
 * @property {SjwtCode} code - A code exported from `./codesMessages.js`
 * @property {any} [value] - the value that caused the issue
 * @property {string} [param] - the parameter that the value was a part of
 * @property {string} [location] - where the parameter resided (e.g. `body`)
 */

/**
 * SJWT Error Item - The SJWT Code, its associated message, and any additional
 * contextual hints that were provided.
 *
 * @typedef {object} SjwtErrorItem
 * @property {SjwtCode} code - A code exported from `./codesMessages.js`
 * @property {string} message - A user facing message describing the problem
 * @property {any} [value] - the value that caused the issue
 * @property {string} [param] - the parameter that the value was a part of
 * @property {string} [location] - where the parameter resided (e.g. `body`)
 */

/**
 * SJWT Error object
 *
 * @typedef {object} SjwtError
 * @property {SjwtCode} code - A code exported from `./codesMessages.js`
 * @property {string} message - A user facing message describing the problem
 * @property {object} context - Additional information that may describe the problem
 * @property {Array.<SjwtErrorItem>} errors - All errors that occurred, including the code and message already exposed above. Guaranteed to be at least length 1.
 */

/**
 * Checks to confirm the code has a corresponding message, and if not returns the
 * code `UNKNOWN_ERROR`
 *
 * @param {string} code - The error code to transform
 * @returns {SjwtCode}
 */
const getRealCode = (code) => (messages[code] ? code : codes.UNKNOWN_ERROR);

/**
 * Transforms the given array into at least 1 `SjwtErrorItem`
 *
 * @param {Array.<SjwtCode|SjwtCodeItem>} items - an array of code strings or items
 * @returns {Array.<SjwtErrorItem>}
 */
const transformItems = (items = []) => {
    const transformedItems = items.map((item) => {
        const realCode = typeof item === 'string'
            ? getRealCode(item)
            : getRealCode(item?.code);

        const transformedItem = {
            code: realCode,
            message: messages[realCode],
        };

        if (item?.value !== undefined) {
            transformedItem.value = item.value;
        }

        if (item?.param !== undefined) {
            transformedItem.param = item.param;
        }

        if (item?.location !== undefined) {
            transformedItem.location = item.location;
        }

        return transformedItem;
    });

    return transformedItems.length > 0
        ? transformedItems
        : [{
            code: codes.UNKNOWN_ERROR,
            message: messages[codes.UNKNOWN_ERROR],
        }];
};

/**
 * Get an `SjwtError` from an array of codes or items. The first code in the
 * error is guaranteed to be the same as the first item in the array of errors.
 *
 * @param {Array.<SjwtCode|SjwtCodeItem>} items - an array of code strings or items
 * @param {object} context - additional context to include with the error
 * @returns {SjwtError}
 */
const getErrorFromCodes = (items = [], context = {}) => {
    const errors = transformItems(items);

    return {
        code: errors[0].code,
        message: errors[0].message,
        errors,
        context,
    };
};

export default getErrorFromCodes;
