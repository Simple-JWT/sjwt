import {vi} from 'vitest';

/**
 * @param {any} returns - what the fetch mock should resolve with
 * @returns {any}
 */
const getFetchMock = (returns) => vi.fn(() => ({
    json: () => returns,
}));

export default getFetchMock;

