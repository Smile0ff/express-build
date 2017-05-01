const dump = (obj) => {
    console.log(obj)
}

const getUrl = (router) => {
    return (name, params, method) => {
        params = params.hash;
        return router.namedRoutes.build(name, params, method);
    }
}

const getAbsoluteUrl = (req) => {
    return (subdomain) => {
        let protocol = req.protocol + '://',
            origin = process.env.ORIGIN,
            queryPath = req.path;

        subdomain = subdomain ? subdomain + '.' : '';

        return `${protocol}${subdomain}${origin}${queryPath}`;
    }
}

export {
    dump,
    getUrl,
    getAbsoluteUrl
}
