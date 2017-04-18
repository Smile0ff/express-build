import { resolve } from "path";
import i18n from "i18n";

function configureI18n(){

    i18n.configure({
        locales: ["en", "ru"],
        defaultLocale: "en",
        cookie: "i18n",
        directory: resolve(__dirname, "../locales")
    });

    return i18n;
}

export default configureI18n();