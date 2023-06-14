import {connectToDB} from '../../../utils/db'
import {User} from '../../../models/userModel'
import {errorHandler, asyncError} from '../../../middleware/errorHandler'


export default asyncError(async(req, res) =>{

    await connectToDB()
    if (req.method ==="POST") {
        const {fname, lname, email, gender} = req.body
   
          // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({success: true, message: 'Email already exists' });
      }
        const addedUser = await User.create({fname, lname, email, gender})
        await addedUser.save()
        res.status(200).json({success: true, addedUser})
   
}
    
    else{
        errorHandler(res,405,'This method is not allowed')
    }
})