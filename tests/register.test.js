import {
    describe,
    expect,
    test,
    vi,
} from 'vitest';

import register from '../src/register.js';

global.fetch = vi.fn();

describe('Register', () => {
    test('accepts strings as arguments', async () => {
        const result = await register({});

        expect(result).toBe('error');
    });
});
