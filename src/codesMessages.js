const BETA_CODE_ERROR = 'BETA_CODE_ERROR';
const CONTACT_SUPPORT = 'CONTACT_SUPPORT';
const CREDENTIALS_ERROR = 'CREDENTIALS_ERROR';
const EMAIL_IN_USE = 'EMAIL_IN_USE';
const HEADER_MISSING_JSON = 'HEADER_MISSING_JSON';
const INVALID_BETA_CODE = 'INVALID_BETA_CODE';
const INVALID_EMAIL = 'INVALID_EMAIL';
const INVALID_END_USER = 'INVALID_END_USER';
const INVALID_JSON = 'INVALID_JSON';
const INVALID_PARAMS = 'INVALID_PARAMS';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const INVALID_PROJECT = 'INVALID_PROJECT';
const INVALID_SETTINGS_JSON = 'INVALID_SETTINGS_JSON';
const INVALIDATE_TOKEN_ERROR = 'INVALIDATE_TOKEN_ERROR';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT_ERROR = 'LOGOUT_ERROR';
const NEEDS_VERIFICATION = 'NEEDS_VERIFICATION';
const NO_PROJECTS = 'NO_PROJECTS';
const PASSWORD_ERROR = 'PASSWORD_ERROR';
const PROJECT_REGISTRATION_DISABLED = 'PROJECT_REGISTRATION_DISABLED';
const REGISTER_ERROR = 'REGISTER_ERROR';
const REQUIRES_ADMIN = 'REQUIRES_ADMIN';
const SUSPENDED = 'SUSPENDED';
const TODO = 'TODO';
const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
const VERIFICATION_ERROR = 'VERIFICATION_ERROR';

const codes = {
    BETA_CODE_ERROR,
    CONTACT_SUPPORT,
    CREDENTIALS_ERROR,
    EMAIL_IN_USE,
    HEADER_MISSING_JSON,
    INVALID_BETA_CODE,
    INVALID_EMAIL,
    INVALID_END_USER,
    INVALID_JSON,
    INVALID_PARAMS,
    INVALID_PASSWORD,
    INVALID_PROJECT,
    INVALID_SETTINGS_JSON,
    INVALIDATE_TOKEN_ERROR,
    LOGIN_ERROR,
    LOGOUT_ERROR,
    NEEDS_VERIFICATION,
    NO_PROJECTS,
    PASSWORD_ERROR,
    PROJECT_REGISTRATION_DISABLED,
    REGISTER_ERROR,
    REQUIRES_ADMIN,
    SUSPENDED,
    TODO,
    UNKNOWN_ERROR,
    VERIFICATION_ERROR,
};

const messages = {
    [BETA_CODE_ERROR]: 'Could not generate a beta code, please try again',
    [CONTACT_SUPPORT]: 'Please contact support',
    [CREDENTIALS_ERROR]: 'Invalid email or password',
    [EMAIL_IN_USE]: 'Email already in use',
    [HEADER_MISSING_JSON]: 'Request headers must include `Content-Type: application/json`',
    [INVALID_BETA_CODE]: 'Beta code not valid, please try again',
    [INVALID_EMAIL]: 'Please use a valid email address',
    [INVALID_END_USER]: 'End-user does not exist, please try again',
    [INVALID_JSON]: 'Invalid JSON data',
    [INVALID_PARAMS]: 'Parameters are invalid, please try again',
    [INVALID_PASSWORD]: 'Password must be at least 8 characters long',
    [INVALID_PROJECT]: 'Project does not exist, please try again',
    [INVALID_SETTINGS_JSON]: 'Invalid settings JSON data',
    [INVALIDATE_TOKEN_ERROR]: 'Could not invalidate tokens',
    [LOGIN_ERROR]: 'Invalid email or password, please try again',
    [LOGOUT_ERROR]: 'Could not logout',
    [NEEDS_VERIFICATION]: 'Account requires verification',
    [NO_PROJECTS]: 'No projects found',
    [PASSWORD_ERROR]: 'Incorrect password, please try again',
    [PROJECT_REGISTRATION_DISABLED]: 'Project is not currently accepting new registrations, please try again later',
    [REGISTER_ERROR]: 'Unexpected error, please try again',
    [REQUIRES_ADMIN]: 'Only an administrator can do that, please login',
    [SUSPENDED]: 'Account is suspended, please contact support',
    [TODO]: 'Not implemented',
    [UNKNOWN_ERROR]: 'Unexpected error, please try again',
    [VERIFICATION_ERROR]: 'Account could not be verified, please try again',
};

export {
    codes,
    messages,
};
