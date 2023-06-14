import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler, asyncError} from '../../../middleware/errorHandler'


export default asyncError(async(req, res) =>{
    await connectToDB()
    if (req.method==='DELETE') {
     
            await User.findByIdAndDelete({_id: req.query.id})
            return res.status(200).json({success: true ,message:'Successfully Deleted'})

    }

    else{
        errorHandler(res,405,'This method is not allowed')

    }

})