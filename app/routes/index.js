import i18n from "i18n";

function setLocale(locale){

    return (req, res, next) => {
        i18n.setLocale(locale);
        res.redirect("/");
    }
}

const home = (req, res, next) => {

    res.render('index', {
        title: 'Express',
        hello: i18n.__('hello')
    });
};

const test = (req, res, next) => {
    res.render('test', {
        title: 'Test page'
    });
};

export default (router) => {

    router.get("/en", "en_locale", setLocale('en'));
    router.get("/ru", "ru_locale", setLocale('ru'));

    router.get("/", "home", home);

    router.get("/test/:id/:slug", "test.id.slug", test);

    return router;
}
