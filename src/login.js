import sjwt from './sjwt.js';

const login = ({
    email,
    password,
    projectId,
}) => {
    console.log('login', {email, password, projectId});
};

export default login;
