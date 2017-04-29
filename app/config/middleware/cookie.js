import cookieParser from 'cookie-parser';

const configure = () => cookieParser(process.env.COOKIE_SECRET);

export default configure;