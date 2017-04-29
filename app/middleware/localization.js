import I18n from '@config/middleware/localization';


class Localization extends I18n{

    constructor(){
        super();

    }

}

export default (req, res, next) => {
    let localization = new Localization(req, res);

    localization
        .setup()
        .initialize(req, res)
        .setLocaleWithCookie()
        .setLocale(res, 'en');

    next();
};