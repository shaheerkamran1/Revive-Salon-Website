import AddMsgModel from "../Models/UserMsgModel.js"

export const getMsg = async(req, res)=>{
    try{
        const MsgUser = await AddMsgModel.find();
        res.status(200).json(MsgUser);
    }

    catch(eror){
        console.log("Error.");
        res.status(404).json({message: error.message});
    }
};

export const userMsgs = async (req,res)=>{

    let {name,email,cellno,msg}=req.body

    name=name.toString();
    email=email.toString();
    cellno=cellno.toString();
    msg=msg.toString();

    const newMsg = new AddMsgModel({
        name:name,
        email:email,
        cellno:cellno,
        msg:msg,
    })

    try{
        await newMsg.save();
        res.status(200).json(newMsg);
    } 

    catch (error) {
        console.log("Not Saved");
        res.status(404).json({message: Error.message});
    }
};