import sjwt from './sjwt.js';
import getErrorFromCodes from './getErrorFromCodes.js';
import {codes} from './codesMessages.js';

const login = async ({
    email,
    password,
    projectId,
} = {}) => {
    try {
        const pid = projectId ?? sjwt.projectId;
        const url = `${sjwt.authUrl}/${pid}/login`;

        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        return result.json();
    } catch (error) {
        return getErrorFromCodes([codes.UNKNOWN_ERROR]);
    }
};

export default login;
