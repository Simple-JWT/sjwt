import sjwt from './sjwt.js';

/**
 * TODO flesh this out
 *
 * @param {object} [args] - options
 * @param {boolean} [args.forceServer] - Require authentication against the server
 * @param {string} [args.projectId] - The project id to register with, optional if provided via `sjwt.configure()`
 * @returns {any}
 */
const getAuthenticatedUser = async ({
    forceServer = false,
    projectId,
} = {}) => {
    try {
        if (sjwt.user && !forceServer) {
            // TODO this needs to take token expiration into account
            return sjwt.user;
        }

        if (!sjwt.token) {
            return null;
        }

        const pid = projectId ?? sjwt.projectId;
        const url = `${sjwt.authUrl}/${pid}/whoami`;

        const response = await fetch(url, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${sjwt.token}`,
            },
        });

        const data = await response.json();
        if (data.id) {
            // TODO check to make sure this is a 200 a better way
            sjwt.user = data;
        }

        return data;
    } catch (error) {
        console.error(error);
    }

    return null;
};

export default getAuthenticatedUser;

