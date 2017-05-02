import cors from 'cors';

const origin = process.env.ORIGIN;

const methods = [
    'GET',
    'PUT',
    'PATCH',    
    'POST',
    'DELETE'
];

const configure = () => {

    return cors({
        origin: origin,
        methods: methods,
        optionsSuccessStatus: 200
    });
    
}

export default configure;