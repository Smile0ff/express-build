import path from 'path';
import i18n from 'i18n';

const locales = [
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
]


function I18n(){
    console.log(this)
}

I18n.prototype = {...i18n};

let test = new I18n();


// class I18n{

//     constructor(){

        

//         console.log(this.constructor)

//         // this.configure({
//         //     locales: locales,
//         //     defaultLocale: process.env.LOCALE_EN,
//         //     cookie: process.env.COOKIE_LOCALE,
//         //     directory: path.resolve(__dirname, '../locales')
//         // });    
//     }

//     initialize(req, res, next){
//         return this.init(req, res, next);
//     }

//     setLocaleWithCookie(res, locale){
//         return res.cookie(process.env.COOKIE_LOCALE, locale)
//     }

//     getLocaleWithCookie(req){
//         return req.cookies[process.env.COOKIE_LOCALE]
//     }


// }

const configure = () => I18n;

export default configure;