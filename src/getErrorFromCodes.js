import {codes, messages} from './codesMessages';

const getRealCode = (code) => (messages[code] ? code : codes.UNKNOWN_ERROR);

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

const getErrorFromCodes = (items = []) => {
    const errors = transformItems(items);

    return {
        code: errors[0].code,
        message: errors[0].message,
        errors,
    };
};

export default getErrorFromCodes;
