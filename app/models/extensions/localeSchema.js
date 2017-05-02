import mongoose from 'mongoose';

import localization from '@config/middleware/localization';

const localize = function(req, res){
    this.schema.locale = localization.getLocale(req);

    return this;
}

class LocaleSchema extends mongoose.Schema{

    constructor(obj, options){
        super(obj, options);

        this.statics.localize = localize;
    }

}

export default LocaleSchema;