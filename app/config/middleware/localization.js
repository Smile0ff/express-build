import path from 'path';
import i18n from 'i18n';

const i18nOptions = {
    locales: [
        process.env.LOCALE_EN,
        process.env.LOCALE_RU
    ],
    defaultLocale: process.env.LOCALE_EN,
    cookie: process.env.COOKIE_LOCALE,
    directory: path.resolve(__dirname, '../locales')
}

class I18n{

    constructor(){
        Object.assign(this, i18n);
    }

    setup(){
        this.configure(i18nOptions);

        return this;
    }

    initialize(req, res){
        this.init(req, res);

        return this;
    }

    setLocaleWithCookie(res, locale){
        res.cookie(process.env.COOKIE_LOCALE, locale);

        return this;
    }

    getLocaleWithCookie(req){
        req.cookies[process.env.COOKIE_LOCALE];

        return this;
    }

}

export default I18n;