const z = require('zod')

const userSignup = (req,res) => {

    const bodySchema = z.object({
        firstname :  z.string(),
        lastname : z.string(),
        email : z.string().min(5).max(50).email(),
        password : z.string().min(6).refine((password) => /A-Z/.test(password))
    })
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password


}