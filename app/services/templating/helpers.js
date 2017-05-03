const blockHelper = () => {

    let sections = {};

    function addToSection(name){
        return sections[name] ? sections[name].join('\r\n') : null;
    }

    function extendSection(name, context){
        sections[name] = [];
        sections[name].push(context.fn(this));
    }

    return {
        addToSection,
        extendSection
    }

}

const dump = (obj) => {
    console.log(obj)
}

const getTranslation = (res) => {
    return (key) => {
        return res.__(key);
    }
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
    blockHelper,
    dump,
    getTranslation,
    getUrl,
    getAbsoluteUrl
}
