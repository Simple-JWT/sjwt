import defaultStore from './lib/store.js';

const login = ({
    email,
    password,
    projectId,
    store = defaultStore,
}) => {
    console.log('login', {email, password, projectId, store});
};

export default login;
