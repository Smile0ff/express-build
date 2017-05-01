import subdomain from 'express-subdomain';

const origin = process.env.ORIGIN;

const authorizedSubdomains = [
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
]

function getUserSubdomain(req){
    let originParts = origin.split('.').length - 1;

    if(req.subdomains.length < originParts)
        return false;

    let userSubdomain = req.subdomains.pop();

    if(!userSubdomain)
        return false;

    if(!authorizedSubdomains.includes(userSubdomain))
        throw new Error('subdomain not found');

    return userSubdomain;
}

function processModule(req, res){
    let userSubdomain = getUserSubdomain(req);

    req.app.subdomain = userSubdomain ? userSubdomain : null;
}

const configure = subdomain('*', (req, res, next) => {

    try{

        processModule(req, res);

    } catch(err){
        err = new Error('Not found');
        err.status = 404;
        return next(err);
    }

    next();

});

export default configure;