const locales = [
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
];

class LocaleObject{

    constructor(value){
        
        locales.map((locale) => {
            this[locale] = Object.keys(value).includes(locale) ? value[locale] : null;
        });

    }

}

export default LocaleObject;