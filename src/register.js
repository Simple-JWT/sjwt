import sjwt from './sjwt.js';
import getErrorFromCodes from './getErrorFromCodes.js';
import {codes} from './codesMessages.js';

/**
 * @typedef {import('./getErrorFromCodes.js').SjwtError} SjwtError
 */

/**
 * TODO document the user object
 *
 * @typedef SjwtRegisterSuccess
 * @property {string} token - The JWT used to authenticate this user in future requests
 * @property {object} user - the end-user object
 */

/**
 * Register a new end-user
 *
 * @param {object} args - args
 * @param {string} args.email - End-user's email address
 * @param {string} args.password - End-user's plain text password
 * @param {string} [args.projectId] - The project id to register with, optional if provided via `sjwt.configure()`
 * @returns {SjwtError|SjwtRegisterSuccess}
 */
const register = async ({
    email,
    password,
    projectId,
} = {}) => {
    try {
        const pid = projectId ?? sjwt.projectId;
        const url = `${sjwt.authUrl}/${pid}/register`;

        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await result.json();
        if (data.token && data.user) {
            sjwt.token = data.token;
            sjwt.user = data.user;
        }

        return data;
    } catch (error) {
        return getErrorFromCodes([codes.UNKNOWN_ERROR]);
    }
};

export default register;
