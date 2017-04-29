import { json, urlencoded } from 'body-parser';

const configure = () => {
    return {
        json: json(),
        urlencoded: urlencoded({ extended: true })
    }
};

export default configure;