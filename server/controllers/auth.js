const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Khatum.')
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        console.log("I'm waiting...")
        const existing = bcrypt.compareSync(password, users[i].password)
        console.log(existing)
        if (users[i].username === username && existing) {
          let userToReturn = {...users[i]}
          delete userToReturn.password
          res.status(200).send(userToReturn)
          console.log(userToReturn)
          console.log("Ner'Mah")
          return
        }
      }
      res.status(400).send("User not found.")
      console.log("I... cannot maintain!")
    },

    register: (req, res) => {
      console.log("I will comply.")
        console.log('Registering User')
        console.log(req.body)
        

        let {password} = req.body

        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)       
        req.body.password = passwordHash
        console.log('Darkness descends!')
    
        users.push(req.body) 
        console.log(users)
        res.status(200).send(req.body)
        console.log("I am intrigued.")
    }
}