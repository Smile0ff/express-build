import hbs from "hbs";

function dump(obj){
    console.log(obj);
}

function urlHelper(router){
    return (name, params, method) => {
        params = params.hash;
        return router.namedRoutes.build(name, params, method);
    }
}

export default (router) => {

    hbs.registerHelper("dump", dump);
    hbs.registerHelper("url", urlHelper(router));
    
}