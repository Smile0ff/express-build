import hbs from "hbs";

function urlHelper(router){
    return (name, params, method) => {
        params = params.hash;
        return router.namedRoutes.build(name, params, method);
    }
}

export default (router) => {

    hbs.registerHelper("url", urlHelper(router));
}