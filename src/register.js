import defaultStore from './lib/store.js';

const register = ({
    email,
    password,
    projectId,
    store = defaultStore,
}) => {
    console.log('register', {email, password, projectId, store});
    const user = {email, password};
    store({user});
};

export default register;
