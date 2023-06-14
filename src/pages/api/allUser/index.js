import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler, asyncError} from '../../../middleware/errorHandler'


export default asyncError(async(req, res) =>{

    await connectToDB()
    if (req.method==="GET") {
        const savedUser = await User.find({})
        return res.status(200).json({success: true, savedUser})
    }
    else{
        errorHandler(res,405,'This method is not allowed')
    }
    })