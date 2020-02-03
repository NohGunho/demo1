import mongoose , {Schema} from 'mongoose';

const NewsSchema = new Schema({
    newsid :String,
    newstitle :String,
    newsimage :String,
    reporterid :String,
    category :String,
    newshitCnt : Number,
    newsscrapCnt : Number,
    registerDate:{
        type:Date,
        default:Date.now,
    },
})

const News = mongoose.model('News', NewsSchema);
export default News;