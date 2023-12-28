const CREDENTIALS_ERROR = 'CREDENTIALS_ERROR';
const EMAIL_IN_USE = 'EMAIL_IN_USE';
const INVALID_EMAIL = 'INVALID_EMAIL';
const INVALID_JSON = 'INVALID_JSON';
const INVALID_PARAMS = 'INVALID_PARAMS';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const INVALID_PROJECT = 'INVALID_PROJECT';
const INVALIDATE_TOKEN_ERROR = 'INVALIDATE_TOKEN_ERROR';
const LOGOUT_ERROR = 'LOGOUT_ERROR';
const NEEDS_VALIDATION = 'NEEDS_VALIDATION';
const PROJECT_REGISTRATION_DISABLED = 'PROJECT_REGISTRATION_DISABLED';
const REGISTER_ERROR = 'REGISTER_ERROR';
const SUSPENDED = 'SUSPENDED';
const TODO = 'TODO';
const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
const VALIDATION_ERROR = 'VALIDATION_ERROR';

const codes = {
    CREDENTIALS_ERROR,
    EMAIL_IN_USE,
    INVALID_EMAIL,
    INVALID_JSON,
    INVALID_PARAMS,
    INVALID_PASSWORD,
    INVALID_PROJECT,
    INVALIDATE_TOKEN_ERROR,
    LOGOUT_ERROR,
    NEEDS_VALIDATION,
    PROJECT_REGISTRATION_DISABLED,
    REGISTER_ERROR,
    SUSPENDED,
    TODO,
    UNKNOWN_ERROR,
    VALIDATION_ERROR,
};

const messages = {
    [CREDENTIALS_ERROR]: 'Invalid email or password',
    [EMAIL_IN_USE]: 'Email already in use',
    [INVALID_EMAIL]: 'Please use a valid email address',
    [INVALID_JSON]: 'Invalid JSON data',
    [INVALID_PARAMS]: 'Parameters are invalid, please try again',
    [INVALID_PASSWORD]: 'Password must be at least 8 characters long',
    [INVALID_PROJECT]: 'Project does not exist, please try again',
    [INVALIDATE_TOKEN_ERROR]: 'Could not invalidate tokens',
    [LOGOUT_ERROR]: 'Could not logout',
    [NEEDS_VALIDATION]: 'Account requires verification',
    [PROJECT_REGISTRATION_DISABLED]: 'Project is not currently accepting new registrations, please try again later',
    [REGISTER_ERROR]: 'Unexpected error, please try again',
    [SUSPENDED]: 'Account is suspended, please contact support',
    [TODO]: 'Unexpected error, please try again',
    [UNKNOWN_ERROR]: 'Unexpected error, please try again',
    [VALIDATION_ERROR]: 'Account could not be verified, please try again',
};

export {
    codes,
    messages,
};
