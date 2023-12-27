class sjwtClass {
    config;

    constructor() {
        this.config = {
            version: 'v1',
            host: 'https://api.simplejwt.com',
            projectId: null,
        };
    }

    configure(options) {
        this.config = {
            version: options.version ?? this.config.version,
            host: options.host ?? this.config.host,
            projectId: options.projectId ?? this.config.projectId,
        };
    }

    getConfig() {
        return this.config;
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
};

const sjwt = new sjwtClass()

export default sjwt;

