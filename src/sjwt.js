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

class SjwtClass {
    constructor() {
        this.user = null;
        this.token = null;

        this.config = {
            version: 'v1',
            host: 'https://api.simplejwt.com',
            projectId: null,
            saveToken,
            loadToken,
        };
    }

    configure(options) {
        this.user = null;
        this.token = null;

        this.config = {
            version: options.version ?? this.config.version,
            host: options.host ?? this.config.host,
            projectId: options.projectId ?? this.config.projectId,
            saveToken: options.saveToken ?? this.config.saveToken,
            loadToken: options.loadToken ?? this.config.loadToken,
        };
    }

    get apiUrl() {
        return `${this.config.host}/${this.config.version}`;
    }

    get authUrl() {
        return `${this.apiUrl}/auth`;
    }

    get projectId() {
        return this.config.projectId;
    }

    getConfig() {
        return this.config;
    }

    saveToken({token, user} = {}) {
        if (token !== this.token) {
            this.user = null;
        }

        if (user) {
            this.user = user;
        }

        this.token = token;
        this.config.saveToken(token);

        return this.token;
    }

    loadToken() {
        if (this.token) {
            return this.token;
        }

        this.token = this.config.loadToken();

        return this.token;
    }
}

const sjwt = new SjwtClass();

export default sjwt;

