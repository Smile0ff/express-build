import path from 'path';
import Localization from '@services/localization/localization';

const locales = [
    process.env.LOCALE_EN,
    process.env.LOCALE_RU
]

const cookie = process.env.COOKIE_LOCALE;

const directory = path.resolve(
    process.env.BASE,
    process.env.APP,
    'services/localization/locales'
);

const localization = new Localization(locales, cookie, directory);

export default localization;