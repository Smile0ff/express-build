import mongoose from 'mongoose';

import LocaleObject from './localeObject';

class LocaleType extends mongoose.SchemaType{

    constructor(key, options){
        if(!options.modelName)
            throw new TypeError("modelName is required");

        super(key, options);
    }

    cast(value){
        let model = mongoose.model(this.options.modelName),
            schema = model.schema,
            localeObject = {};

        if(!model)
            throw new ReferenceError(this.options.modelName + 'is not exist');

        if(!schema)
            throw new ReferenceError('Schema for '+ this.options.modelName + 'is not exist');
        
        localeObject = new LocaleObject(value);

        return localeObject[schema.locale];
    }

}

mongoose.Schema.Types.LocaleType = LocaleType;

export default LocaleType;