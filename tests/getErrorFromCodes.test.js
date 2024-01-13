import {
    describe,
    expect,
    it,
} from 'vitest';

import {codes, messages} from '../src/codesMessages.js';
import getErrorFromCodes from '../src/getErrorFromCodes.js';

const getBasicError = (code) => ({
    code,
    message: messages[code],
    errors: [{
        code,
        message: messages[code],
    }],
    context: {},
});

describe('base error cases', () => {
    it('returns an unknown error when called with no arguments', () => {
        expect(getErrorFromCodes())
            .toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('returns an unknown error when called with an empty array', () => {
        expect(getErrorFromCodes([]))
            .toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('returns an unknown error when called with null in the array', () => {
        expect(getErrorFromCodes([null]))
            .toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('returns an unknown error when called with undefined in the array', () => {
        expect(getErrorFromCodes([undefined]))
            .toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('handles every code available', () => {
        Object.keys(codes)
            .map((code) => ({
                code,
                result: getErrorFromCodes([code]),
                expected: getBasicError(code),
            }))
            .forEach(({code, result, expected}) => {
                expect(messages[code]).not.toBe(undefined); // every code has a message
                expect(result).toEqual(expected); // created the correct format
                expect(result.code).toEqual(code); // no transforming to UNKNOWN_CODE
            });
    });
});

describe('string handling', () => {
    it('returns an unknown error when called with an invalid code', () => {
        const fakeError = 'fake error';
        expect(messages[fakeError]).toBe(undefined);
        expect(getErrorFromCodes([fakeError]))
            .toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('returns all errors when called with multiple codes', () => {
        const result = getErrorFromCodes([codes.EMAIL_IN_USE, codes.PROJECT_NOT_FOUND]);
        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors.push({
            code: codes.PROJECT_NOT_FOUND,
            message: messages[codes.PROJECT_NOT_FOUND],
        });

        expect(result).toEqual(expected);
    });

    it('returns an unknown error for all unknown errors', () => {
        const fakeError1 = 'fake error 1';
        const fakeError2 = 'fake error 2';
        const result = getErrorFromCodes([
            codes.EMAIL_IN_USE,
            fakeError1,
            codes.PROJECT_NOT_FOUND,
            fakeError2,
        ]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors.push({
            code: codes.UNKNOWN_ERROR,
            message: messages[codes.UNKNOWN_ERROR],
        });
        expected.errors.push({
            code: codes.PROJECT_NOT_FOUND,
            message: messages[codes.PROJECT_NOT_FOUND],
        });
        expected.errors.push({
            code: codes.UNKNOWN_ERROR,
            message: messages[codes.UNKNOWN_ERROR],
        });

        expect(messages[fakeError1]).toBe(undefined);
        expect(messages[fakeError2]).toBe(undefined);
        expect(result).toEqual(expected);
    });
});

describe('object handling', () => {
    it('returns an unknown error when called with an invalid code', () => {
        const fakeError = 'fake error';
        expect(messages[fakeError]).toBe(undefined);
        expect(getErrorFromCodes([{
            code: fakeError,
        }])).toEqual(getBasicError(codes.UNKNOWN_ERROR));
    });

    it('returns all errors when called with multiple codes', () => {
        const result = getErrorFromCodes([{code: codes.EMAIL_IN_USE}, {code: codes.PROJECT_NOT_FOUND}]);
        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors.push({
            code: codes.PROJECT_NOT_FOUND,
            message: messages[codes.PROJECT_NOT_FOUND],
        });

        expect(result).toEqual(expected);
    });

    it('returns an unknown error for all unknown errors', () => {
        const fakeError1 = 'fake error 1';
        const fakeError2 = 'fake error 2';
        const result = getErrorFromCodes([
            {code: codes.EMAIL_IN_USE},
            {code: fakeError1},
            {code: codes.PROJECT_NOT_FOUND},
            {code: fakeError2},
        ]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors.push({
            code: codes.UNKNOWN_ERROR,
            message: messages[codes.UNKNOWN_ERROR],
        });
        expected.errors.push({
            code: codes.PROJECT_NOT_FOUND,
            message: messages[codes.PROJECT_NOT_FOUND],
        });
        expected.errors.push({
            code: codes.UNKNOWN_ERROR,
            message: messages[codes.UNKNOWN_ERROR],
        });

        expect(messages[fakeError1]).toBe(undefined);
        expect(messages[fakeError2]).toBe(undefined);
        expect(result).toEqual(expected);
    });

    it('adds `value` when present', () => {
        const value = 'value';
        const result = getErrorFromCodes([{
            code: codes.EMAIL_IN_USE,
            value,
        }]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors[0].value = value;

        expect(result).toEqual(expected);
    });

    it('adds `param` when present', () => {
        const param = 'param';
        const result = getErrorFromCodes([{
            code: codes.EMAIL_IN_USE,
            param,
        }]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors[0].param = param;

        expect(result).toEqual(expected);
    });

    it('adds `location` when present', () => {
        const location = 'location';
        const result = getErrorFromCodes([{
            code: codes.EMAIL_IN_USE,
            location,
        }]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors[0].location = location;

        expect(result).toEqual(expected);
    });

    it('ignores params other than `code`, `value`, `param`, and `location`', () => {
        const value = 'value';
        const param = 'param';
        const location = 'location';
        const result = getErrorFromCodes([{
            code: codes.EMAIL_IN_USE,
            value,
            param,
            location,
            additionalParam: 'additionalParam',
            cheese: 'cheese',
        }]);

        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors[0].value = value;
        expected.errors[0].param = param;
        expected.errors[0].location = location;

        expect(result).toEqual(expected);
    });
});

describe('handling mixed objects and strings', () => {
    it('can handle both with string first', () => {
        const value = 'value';
        const param = 'param';
        const location = 'location';
        const expected = getBasicError(codes.EMAIL_IN_USE);
        expected.errors.push({
            code: codes.PROJECT_NOT_FOUND,
            message: messages[codes.PROJECT_NOT_FOUND],
            value,
            param,
            location,
        });

        expect(getErrorFromCodes([
            codes.EMAIL_IN_USE,
            {
                code: codes.PROJECT_NOT_FOUND,
                value,
                param,
                location,
            },
        ])).toEqual(expected);
    });

    it('can handle both with object first', () => {
        const value = 'value';
        const param = 'param';
        const location = 'location';
        const expected = getBasicError(codes.PROJECT_NOT_FOUND);
        expected.errors[0].value = value;
        expected.errors[0].param = param;
        expected.errors[0].location = location;
        expected.errors.push({
            code: codes.EMAIL_IN_USE,
            message: messages[codes.EMAIL_IN_USE],
        });

        expect(getErrorFromCodes([
            {
                code: codes.PROJECT_NOT_FOUND,
                value,
                param,
                location,
            },
            codes.EMAIL_IN_USE,
        ])).toEqual(expected);
    });
});
