import mongoose from "mongoose"
const UserMsgStruct = mongoose.Schema(
    {
        name:String,
        email:String,
        cellno:String,
        msg:String,
    }
);

const AddMsgModel = mongoose.model("UserMsgModel",UserMsgStruct);

export default AddMsgModel;