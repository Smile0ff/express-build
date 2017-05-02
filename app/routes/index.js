import localization from '@config/middleware/localization';

import Post from '@models/post'; 

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


    Post
        .localize(req, res)
        .find()
        .then((posts) => {
            res.json(posts);
        });


    // res.render('cases', {
    //     title: 'cases page'
    // });
};

export default (router) => {

    router.get("/", "home", home);
    router.get("/about", "about", about);
    router.get("/cases", "cases", cases);

    return router;
}
