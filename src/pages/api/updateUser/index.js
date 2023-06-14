import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler, asyncError} from '../../../middleware/errorHandler'


export default asyncError(async(req, res) =>{
    await connectToDB()
    if (req.method==='PUT') {
        const {fname, lname, email, gender} = req.body
      
            const existingUser = await User.findById({_id: req.query.id})
            if (!existingUser) {
                return res.status(400).json({success: false ,message:'Item not found'})
            }

            // update the fields
            existingUser.fname = fname
            existingUser.lname = lname
            existingUser.email = email
            existingUser.gender = gender

            // save updated User
            const updatedUser = await existingUser.save()
            return res.status(200).json({success: true ,updatedUser})

       
    }

    else{
        errorHandler(res,405,'This method is not allowed')

    }

})