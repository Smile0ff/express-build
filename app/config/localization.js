import path from 'path';
import i18n from 'i18n';

const locales=[
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
];

i18n.configure({
    locales: locales,
    defaultLocale: process.env.LOCALE_EN,
    cookie: process.env.COOKIE_LOCALE,
    directory: path.resolve(__dirname, '../locales')
});

export default i18n;