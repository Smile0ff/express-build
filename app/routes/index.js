import i18n from "i18n";

const home = (req, res, next) => {

    res.render('index', {
        title: 'home page'
    });
};

const about = (req, res, next) => {

    res.render('about', {
        title: 'about page'
    });
};

const cases = (req, res, next) => {

    res.render('cases', {
        title: 'cases page'
    });
};

export default (router) => {

    router.get("/", "home", home);
    router.get("/about", "about", about);
    router.get("/cases", "cases", cases);

    return router;
}
