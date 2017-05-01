import I18n from '@config/middleware/localization';

class Localization extends I18n{

    constructor(req, res){
        super(req, res);
    }

    setLocaleWithCookie(res, locale){
        res.cookie(process.env.COOKIE_LOCALE, locale);
    }

    getLocaleWithCookie(req){
        return req.cookies[process.env.COOKIE_LOCALE];
    }

}

function processModule(req, res){
    let locale = req.app.subdomain || process.env.DEFAULT_LOCALE;
    let localization = new Localization(req, res);

    localization.setLocaleWithCookie(res, locale);
    localization.setLocale(req, locale);
}

export default (req, res, next) => {
    processModule(req, res);

    next();
};