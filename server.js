const express = require('express')
const routes  = require('./routes')
const morgan = require('morgan')
const bodyParser = require ('body-parser')



const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))	


 let store = {
	 posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      { text : 'Cruel…..var { house, mouse} = No type optimization at all'},
      { text : 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
      { text : '(p1,p2)=>{ … } ,i understand this ,thank you !'}
    ]
    }
  ]
}

app.use((req, res, next) => {
  req.store = store
  next()
})

 
 app.use('/posts',routes.posts)


app.listen(3000)
console.log('Server is running at http://localhost:3000/')