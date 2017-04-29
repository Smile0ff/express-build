import path from 'path';
import favicon from 'serve-favicon';

const faviconPath = path.resolve(__dirname, 'public/favicon.png');
const configure = () => favicon(faviconPath);

export default configure;

