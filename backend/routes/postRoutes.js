import express from 'express'
import { createPost, deletePost, getPost, likeUnlikePost, replyToPost ,getFeedPost} from '../controllers/postController.js'
import protectRoute from '../middlewares/protectRoutes.js'

const router= express.Router()

router.get("/feed",protectRoute,getFeedPost)
router.get("/:id",getPost)
router.post("/create", protectRoute,createPost)
router.delete("/:id",protectRoute,deletePost)
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/reply/:id",protectRoute,replyToPost)

export default router
