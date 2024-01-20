import sjwt from './sjwt.js';
import getErrorFromCodes from './getErrorFromCodes.js';
import {codes} from './codesMessages.js';

/**
 * @typedef {import('./getErrorFromCodes.js').SjwtError} SjwtError
 */

/**
 * TODO document the end-user saved response
 *
 * @typedef SjwtSaveSuccess
 * @property {string} token - The JWT used to authenticate this user in future requests
 * @property {object} user - the end-user object
 */

/**
 * Save an end-user's json store
 *
 * @param {object} args - args
 * @param {object} [args.publicData] - The data you want to save in the end-user's publicData
 * @param {object} [args.privateData] - The data you want to save in the end-user's privateData
 * @param {string} [args.projectId] - The project id to save with, optional if provided via `sjwt.configure()`
 * @param {string} [args.overwrite] - if we should overwrite the data or not
 * @returns {SjwtError|SjwtSaveSuccess}
 */
const save = async ({
    publicData,
    privateData,
    overwrite = false,
    projectId,
} = {}) => {
    try {
        const data = {};
        let hasData = false;

        if (publicData !== undefined) {
            data.publicData = publicData;
            hasData = true;
        }

        if (privateData !== undefined) {
            data.privateData = privateData;
            hasData = true;
        }

        if (!hasData) {
            return getErrorFromCodes([codes.END_USER_UPDATE_ERROR]);
        }

        if (sjwt.token) {
            const pid = projectId ?? sjwt.projectId;
            const url = `${sjwt.apiUrl}/${pid}`;

            const result = await fetch(url, {
                method: overwrite ? 'PUT' : 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sjwt.token}`,
                },
                body: JSON.stringify(data),
            });

            const resultData = await result.json();

            if (resultData.id) {
                // TODO do better than just look at id
                sjwt.user = resultData;
                return sjwt.user;
            }
        }

        return getErrorFromCodes([codes.END_USER_UPDATE_ERROR]);
    } catch (error) {
        return getErrorFromCodes([codes.UNKNOWN_ERROR]);
    }
};

export default save;

