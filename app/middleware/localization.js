import localization from '@config/middleware/localization';

function processModule(req, res){
    let locale = req.app.subdomain || localization.defaultLocale;

    localization.setLocaleWithCookie(res, locale);
    localization.setLocale(req, locale);
}

export default (req, res, next) => {
    localization.init(req, res);

    processModule(req, res);

    next();
};