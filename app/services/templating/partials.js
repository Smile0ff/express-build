import hbs from 'hbs';

import localization from '@config/middleware/localization';

const locales = () => {
    let source = hbs.handlebars.partials.locales,
        template = hbs.compile(source);

    return template({ locales: localization.getLocales() });
}

export {
    locales
}