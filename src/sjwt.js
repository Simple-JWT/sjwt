const saveToken = (token) => {
    if (localStorage) {
        localStorage.setItem('sjwt-token', token);
        return true;
    }

    return false;
};

const loadToken = () => {
    if (localStorage) {
        return localStorage.getItem('sjwt-token');
    }

    return null;
};

const removeToken = () => {
    if (localStorage) {
        return localStorage.removeItem('sjwt-token');
    }

    return null;
};

class SjwtClass {
    constructor() {
        this._user = null;
        this._token = null;

        this._config = {
            version: 'v1',
            host: 'https://api.simplejwt.com',
            projectId: null,
            saveToken,
            loadToken,
            removeToken,
        };
    }

    configure(options) {
        this._user = null;
        this._token = null;

        this._config = {
            version: options.version ?? this._config.version,
            host: options.host ?? this._config.host,
            projectId: options.projectId ?? this._config.projectId,
            saveToken: options.saveToken ?? this._config.saveToken,
            loadToken: options.loadToken ?? this._config.loadToken,
            removeToken: options.removeToken ?? this._config.removeToken,
        };
    }

    get apiUrl() {
        return `${this._config.host}/${this._config.version}`;
    }

    get authUrl() {
        return `${this.apiUrl}/auth`;
    }

    get projectId() {
        return this._config.projectId;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }

    get token() {
        if (this._token) {
            return this._token;
        }

        this._token = this._config.loadToken();

        return this._token;
    }

    set token(token) {
        if (token !== this._token) {
            this._user = null;
        }

        this._token = token;
        this._config.saveToken(token);
    }

    get config() {
        return this._config;
    }

    logout() {
        this._token = null;
        this._user = null;
        this._config.removeToken();
    }
}

const sjwt = new SjwtClass();

export default sjwt;

