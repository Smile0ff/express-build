import path from 'path';
import moduleAlias from 'module-alias';

const appPath = path.resolve(
    process.env.BASE,
    process.env.APP
);

const aliases = {
    '@root': '',
    '@config': 'config',
    '@middleware': 'middleware',
    '@routes': 'routes',
    '@views': 'views',
    '@models': 'models',
    '@services': 'services' 
}

for(let alias in aliases){
    moduleAlias.addAlias(alias, path.join(appPath, aliases[alias]));
}

export default moduleAlias;