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

const cases = async (req, res, next) => {
    let posts = await Post.localize(req, res).find({});

    res.render('cases', {
        title: 'cases page',
        posts: posts
    });
};

const caseDetail = async (req, res, next) => {
    let params = req.params;
    let post = await Post.localize(req, res).findById({_id: params.id});

    res.render('case', {
        title: 'case page',
        post: post
    });
};

export default (router) => {

    router.get('/', 'home', home);
    router.get('/about', 'about', about);
    router.get('/cases', 'cases', cases);
    router.get('/cases/:id', 'caseDetail', caseDetail);

    return router;
}
