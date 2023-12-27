import {
    afterEach,
    describe,
    expect,
    it,
    vi,
} from 'vitest';

import getFetchMock from './utils/getFetchMock.js';
import register from '../src/register.js';

describe('Register', () => {
    const getRegisterUrl = ({authUrl, projectId} = {}) => `${authUrl}/${projectId}/register`;

    const getFetchParams = ({email, password} = {}) => ({
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    });

    const setup = () => {
        const fetch = getFetchMock();
        vi.stubGlobal('fetch', fetch);

        vi.mock('../src/sjwt.js', () => ({
            default: {
                authUrl: 'AUTH_URL',
                projectId: 'PROJECT_ID',
            },
        }));

        return {
            fetch,
            sjwt: {
                authUrl: 'AUTH_URL',
                projectId: 'PROJECT_ID',
            },
        };
    };

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.clearAllMocks();
    });

    it('uses the default project id when none is provided', async () => {
        const {sjwt, fetch} = setup();
        await register();
        expect(fetch).toBeCalledWith(getRegisterUrl(sjwt), getFetchParams());
    });

    it('uses the provided project id when present', async () => {
        const {sjwt, fetch} = setup();
        const defaultUrl = getRegisterUrl(sjwt);

        const projectId = 'test-project-id';
        const url = getRegisterUrl({...sjwt, projectId});

        await register({projectId});
        expect(fetch).toBeCalledWith(url, getFetchParams());
        expect(url).not.toEqual(defaultUrl);
    });
});
