import {vi} from 'vitest';

const getFetchMock = (returns) => vi.fn(() => ({
    json: () => returns,
}));

export default getFetchMock;

