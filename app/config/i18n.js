import { resolve } from "path";
import i18n from "i18n";

i18n.configure({
    locales: ["en", "ru"],
    defaultLocale: "en",
    cookie: "i18n",
    directory: resolve(__dirname, "../locales")
});

export default i18n;