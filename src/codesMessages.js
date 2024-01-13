const BETA_CODE_ERROR = 'BETA_CODE_ERROR';
const CONTACT_SUPPORT = 'CONTACT_SUPPORT';
const CREDENTIALS_ERROR = 'CREDENTIALS_ERROR';
const EMAIL_IN_USE = 'EMAIL_IN_USE';

const END_USER_CREATE_ERROR = 'END_USER_CREATE_ERROR';
const END_USER_DELETE_ERROR = 'END_USER_DELETE_ERROR';
const END_USER_JSON_ERROR = 'END_USER_JSON_ERROR';
const END_USER_NOT_FOUND = 'END_USER_NOT_FOUND';
const END_USERS_NOT_FOUND = 'END_USERS_NOT_FOUND';
const END_USER_PERMISSION_ERROR = 'END_USER_PERMISSION_ERROR';
const END_USER_SUSPENDED = 'END_USER_SUSPENDED';
const END_USER_UPDATE_ERROR = 'END_USER_UPDATE_ERROR';

const HEADER_MISSING_JSON = 'HEADER_MISSING_JSON';
const INVALID_BETA_CODE = 'INVALID_BETA_CODE';
const INVALID_EMAIL = 'INVALID_EMAIL';
const INVALID_JSON = 'INVALID_JSON';
const INVALID_PARAMS = 'INVALID_PARAMS';
const INVALID_PASSWORD = 'INVALID_PASSWORD';
const INVALIDATE_TOKEN_ERROR = 'INVALIDATE_TOKEN_ERROR';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT_ERROR = 'LOGOUT_ERROR';
const NEEDS_VERIFICATION = 'NEEDS_VERIFICATION';
const NO_PROJECTS = 'NO_PROJECTS';
const PASSWORD_ERROR = 'PASSWORD_ERROR';

const PROJECT_DELETE_ERROR = 'PROJECT_DELETE_ERROR';
const PROJECT_CREATE_ERROR = 'PROJECT_CREATE_ERROR';
const PROJECT_NOT_FOUND = 'PROJECT_NOT_FOUND';
const PROJECTS_NOT_FOUND = 'PROJECTS_NOT_FOUND';
const PROJECT_PERMISSION_ERROR = 'PROJECT_PERMISSION_ERROR';
const PROJECT_REGISTRATION_DISABLED = 'PROJECT_REGISTRATION_DISABLED';
const PROJECT_UPDATE_ERROR = 'PROJECT_UPDATE_ERROR';

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

    END_USER_CREATE_ERROR,
    END_USER_DELETE_ERROR,
    END_USER_NOT_FOUND,
    END_USERS_NOT_FOUND,
    END_USER_PERMISSION_ERROR,
    END_USER_SUSPENDED,
    END_USER_UPDATE_ERROR,

    HEADER_MISSING_JSON,
    INVALID_BETA_CODE,
    INVALID_EMAIL,
    INVALID_JSON,
    INVALID_PARAMS,
    INVALID_PASSWORD,
    INVALIDATE_TOKEN_ERROR,
    LOGIN_ERROR,
    LOGOUT_ERROR,
    NEEDS_VERIFICATION,
    NO_PROJECTS,
    PASSWORD_ERROR,

    PROJECT_DELETE_ERROR,
    PROJECT_CREATE_ERROR,
    PROJECT_NOT_FOUND,
    PROJECTS_NOT_FOUND,
    PROJECT_PERMISSION_ERROR,
    PROJECT_REGISTRATION_DISABLED,
    PROJECT_UPDATE_ERROR,

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

    [END_USER_CREATE_ERROR]: 'End-user could not be created, please try again',
    [END_USER_DELETE_ERROR]: 'End-user could not be deleted, please try again',
    [END_USER_JSON_ERROR]: 'Invalid end-user JSON data',
    [END_USER_NOT_FOUND]: 'End-user not found',
    [END_USERS_NOT_FOUND]: 'No end-users found',
    [END_USER_PERMISSION_ERROR]: 'Not authorized to modify this end-user',
    [END_USER_SUSPENDED]: 'End-user has been suspended, please contact support',
    [END_USER_UPDATE_ERROR]: 'End-user could not be updated, please try again',

    [HEADER_MISSING_JSON]: 'Request headers must include `Content-Type: application/json`',
    [INVALID_BETA_CODE]: 'Beta code not valid, please try again',
    [INVALID_EMAIL]: 'Please use a valid email address',
    [INVALID_JSON]: 'Invalid JSON data',
    [INVALID_PARAMS]: 'Parameters are invalid, please try again',
    [INVALID_PASSWORD]: 'Password must be at least 8 characters long',
    [INVALIDATE_TOKEN_ERROR]: 'Could not invalidate tokens',
    [LOGIN_ERROR]: 'Invalid email or password, please try again',
    [LOGOUT_ERROR]: 'Could not logout',
    [NEEDS_VERIFICATION]: 'Account requires verification',
    [NO_PROJECTS]: 'No projects found',
    [PASSWORD_ERROR]: 'Incorrect password, please try again',

    [PROJECT_CREATE_ERROR]: 'Project could not be created, please try again',
    [PROJECT_DELETE_ERROR]: 'Project could not be deleted, please try again',
    [PROJECT_NOT_FOUND]: 'Project not found',
    [PROJECTS_NOT_FOUND]: 'No projects found',
    [PROJECT_REGISTRATION_DISABLED]: 'Project is not currently accepting new registrations, please try again later',
    [PROJECT_PERMISSION_ERROR]: 'Not authorized to modify this project',
    [PROJECT_UPDATE_ERROR]: 'Project could not be updated, please try again',

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
