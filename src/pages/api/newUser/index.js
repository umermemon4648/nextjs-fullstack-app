import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
export default async function handler(req,res){

    await connectToDB()
    if (req.method ==="POST") {
        const {fname, lname, email, gender} = req.body
    try {    
        const addedUser = await User.create({fname, lname, email, gender})
        await addedUser.save()
        res.status(200).json({success: true, addedUser})
    } catch (error) {
        return res.status(500).json({erro:'Failed to add document'})
    }
}
    
    else{
        return res.status(405).json({message:'This method is not allowed'})
    }
}