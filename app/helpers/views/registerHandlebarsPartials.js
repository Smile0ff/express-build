import path from 'path';
import hbs from 'hbs';

const partialsPath = path.resolve(__dirname, '../../views/partials');

export default () => {

    hbs.registerPartials(partialsPath, () => {
        //all template are loaded
        //handle custom tailored templates
    });

};