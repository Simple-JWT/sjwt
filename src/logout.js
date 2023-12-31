import sjwt from './sjwt.js';
import getErrorFromCodes from './getErrorFromCodes.js';
import {codes} from './codesMessages.js';

/**
 * Logout
 *
 * @param {object} [args] - options
 * @param {string} [args.projectId] - The project id to register with, optional if provided via `sjwt.configure()`
 * @returns {any}
 */
const logout = async ({
    projectId,
} = {}) => {
    let returns = {
        success: true,
    };

    try {
        if (sjwt.token) {
            const pid = projectId ?? sjwt.projectId;
            const url = `${sjwt.authUrl}/${pid}/logout`;

            const result = await fetch(url, {
                method: 'get',
                headers: {
                    Authorization: `Bearer ${sjwt.token}`,
                },
            });

            returns = await result.json();
        }
    } catch (error) {
        return getErrorFromCodes([codes.UNKNOWN_ERROR]);
    }

    sjwt.logout();
    return returns;
};

export default logout;

