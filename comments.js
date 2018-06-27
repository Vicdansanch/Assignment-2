const express = require('express')
const router = express.Router()



 router.get('/' , (req, res) => {
	
	return res.status(200).send(req.store.posts[ req.accessedPostID].comments)
	
})
  router.post('/' ,(req,res) => {
 let newComment = req.body
 let commentId = req.store.posts[ req.accessedPostID].comments.length
 
 req.store.posts[req.accessedPostID].comments.push(newComment)
 console.log("created Comment" , newComment)
 res.status(201).send(newComment)
	
})
  router.put('/:cmId' ,(req,res) => {
	  
 req.store.posts[req.accessedPostID].comments[req.params.cmId] = Object.assign(req.store.posts[req.accessedPostID].comments, req.body)
    res.status(200).send(req.store.posts[req.accessedPostID].comments)
	console.log('modified', req.store.posts[req.accessedPostID].comments)
})
  router.delete('/:cmId',(req,res ) => {
	
req.store.posts[req.accessedPostID].comments.splice(req,params.cmId,1)
console.log("deleted", req.store.posts[req.accessedPostID].comments)
res.status(204).send()
  }) 

 
module.exports = router