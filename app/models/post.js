import mongoose from 'mongoose';

import LocaleType from './extensions/localeType';
import LocaleSchema from './extensions/LocaleSchema';

const modelName = 'Post';
const postSchema = new LocaleSchema({
    title: {
        type: LocaleType,
        modelName: modelName
    },
    text: {
        type: LocaleType,
        modelName: modelName
    }
});

const Post = mongoose.model(modelName, postSchema);

export default Post;