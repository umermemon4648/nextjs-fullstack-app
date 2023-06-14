import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'

export default async function handler(req,res){
    await connectToDB()
    if (req.method==='DELETE') {
        
        try {
            await User.findByIdAndDelete({_id: req.query.id})
            return res.status(200).json({success: true ,message:'Successfully Deleted'})

        } catch (error) {
            return res.status(500).json({error:'Failed to fetch doc'})
        }
    }

    else{
        return res.status(405).json({message:'This method is not allowed'})

    }

}