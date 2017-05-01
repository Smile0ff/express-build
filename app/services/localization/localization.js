import i18n from 'i18n';

class Localization{

    constructor(locales, cookie, directory){
        Object.assign(this, i18n);

        this.locales = locales;
        this.defaultLocale = locales[0];
        this.cookie = cookie;
        this.directory = directory

        this.configure({
            locales: locales,
            defaultLocale: locales[0],
            cookie: cookie,
            directory: directory,
            updateFiles: false
        });
    }

    setLocaleWithCookie(res, locale){
        res.cookie(this.cookie, locale);
    }

    getLocaleWithCookie(req){
        return req.cookies[this.cookie];
    }

}

export default Localization;