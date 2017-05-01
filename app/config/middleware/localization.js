import path from 'path';
import i18n from 'i18n';

const i18nOptions = {
    locales: [
        process.env.LOCALE_EN,
        process.env.LOCALE_RU
    ],
    defaultLocale: process.env.LOCALE_EN,
    cookie: process.env.COOKIE_LOCALE,
    directory: path.resolve(__dirname, '../../locales')
}

class I18n{

    constructor(req, res){
        Object.assign(this, i18n);

        this.configure(i18nOptions);
        this.init(req, res);
    }

}

export default I18n;