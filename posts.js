const express = require('express')
const router = express.Router()
let  commentsRoute = require('./comments.js')
 
	 
  router.get('/',(req, res) => {
const postId = req.params.pId

	if (postId) {return res.status(200).send(req.store.posts[req.params.pId])
	}else{
		res.send(req.store.posts)
		
	}	
  })
  
  
  router.post('/' , (req,res) =>{
 let newPost = {
	  name : req.body.name,
	  url: req.body.url,
	  text : req.body.text,
	  comments : []
 }
 let postId = req.store.posts.length
  req.store.posts.push(newPost)
  console.log('created post', req.store.posts)
  res.sendStatus(201)//create a post
})


  router.put('/:pId', (req, res)=>{
   req.store.posts[req.params.pId] = Object.assign(req.store.posts[req.params.pId], req.body)
    res.status(200).send(req.store.posts[req.params.pId])
	console.log('modified', req.store.posts[req.params.pId])
})

  
  router.delete('/:pId', (req, res) => {
	  req.store.posts.splice(req.params.pId,1)
       console.log('deleted', req.store.posts)
       res.status(204).send(req.store.posts)	
  })
  router.use( '/:pId/comments',  ( req, res, next ) =>{
    // Pass the post to the request so that 
    req.accessedPostID = req.params.pId;
    next();
}, commentsRoute );

  module.exports= router
