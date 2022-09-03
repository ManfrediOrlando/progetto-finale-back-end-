const express = require('express')
const cors = require('cors')
const corsOption = {
    origin:'http://localhost:3000'
}

const app = express()

app.use(cors(corsOption))

//parsing all req of content-type (app-json)
app.use(express.json())

//parsing all req with url-encoded
app.use(express.urlencoded({extended:true}))

// first generic route
app.get('/', (req, res) => {
    res.json({msg:'all ok '})
})

//routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

//set port & listen

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('server up & running')
})

// init my SQL

const db = require('./app/models')
const Role = db.role

function init(){
    Role.findOrCreate({where:{
        id:1,
        name:'user'
    }});

    Role.findOrCreate({where:{
        id:2,
        name:'moderator'
    }});
    Role.findOrCreate({where:{
        id:3,
        name:'admin'
    }})
}


db.sequelize.sync()
.then(() => {
    console.log('up')
    init()
})
































