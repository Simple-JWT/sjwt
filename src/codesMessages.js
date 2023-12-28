const EMAIL_IN_USE = 'EMAIL_IN_USE';
const INVALID_EMAIL = 'INVALID_EMAIL';
const INVALID_PARAMS = 'INVALID_PARAMS';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const INVALID_PROJECT = 'INVALID_PROJECT';
const NEEDS_VALIDATION = 'NEEDS_VALIDATION';
const PROJECT_REGISTRATION_DISABLED = 'PROJECT_REGISTRATION_DISABLED';
const REGISTER_ERROR = 'REGISTER_ERROR';
const SUSPENDED = 'SUSPENDED';
const TODO = 'TODO';
const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

const codes = {
    EMAIL_IN_USE,
    INVALID_EMAIL,
    INVALID_PARAMS,
    INVALID_PASSWORD,
    INVALID_PROJECT,
    NEEDS_VALIDATION,
    PROJECT_REGISTRATION_DISABLED,
    REGISTER_ERROR,
    SUSPENDED,
    TODO,
    UNKNOWN_ERROR,
};

const messages = {
    [EMAIL_IN_USE]: 'Email already in use',
    [INVALID_EMAIL]: 'Please use a valid email address',
    [INVALID_PARAMS]: 'Parameters are invalid, please try again',
    [INVALID_PASSWORD]: 'Password must be at least 8 characters long',
    [INVALID_PROJECT]: 'Project does not exist, please try again',
    [NEEDS_VALIDATION]: 'Account requires verification',
    [PROJECT_REGISTRATION_DISABLED]: 'Project is not currently accepting new registrations, please try again later',
    [REGISTER_ERROR]: 'Unexpected error, please try again',
    [SUSPENDED]: 'Account is suspended, please contact support',
    [TODO]: 'Unexpected error, please try again',
    [UNKNOWN_ERROR]: 'Unexpected error, please try again',
};

export {
    codes,
    messages,
};
