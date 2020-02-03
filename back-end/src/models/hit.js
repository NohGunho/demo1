import mongoose , {Schema} from 'mongoose';

const HitSchema = new Schema({
    newstitle :String,
    newsimage :String,
    newshitCnt : Number,
    newsscrapCnt : Number,
    registerDate:{
        type:Date,
        default:Date.now,
    },
})

const Hit = mongoose.model('Hit', HitSchema);
export default Hit;