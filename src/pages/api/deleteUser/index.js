import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler} from '../../../middleware/errorHandler'

export default async function handler(req,res){
    await connectToDB()
    if (req.method==='DELETE') {
        
        try {
            await User.findByIdAndDelete({_id: req.query.id})
            return res.status(200).json({success: true ,message:'Successfully Deleted'})

        } catch (error) {
            errorHandler(res)
        }
    }

    else{
        errorHandler(res,405,'This method is not allowed')

    }

}