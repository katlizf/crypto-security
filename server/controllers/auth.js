const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const auth = bcrypt.compareSync(password, users[i].passwordHash)
        } if (auth) {
          let returnedUser = {...users[i]}
          delete returnedUser.passwordHash
        }
          res.status(200).send(returnedUser)
        }
        res.status(400).send("User not found.")
    },
    register: (req, res) => {
        // console.log('Registering User')
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        
       let user = {
         username,
         email,
         firstName,
         lastName,
         passwordHash
       }
       users.push(user)
       let userDisplay = {...user}
       delete userDisplay.passwordHash
       res.status(200).send(userDisplay)
      }
}



