import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { createPost,deletePost,commentPost,getUserPosts,likeUnlikePost,getAllPost,getLikedPost,getFollowingPosts } from "../controllers/post.controller.js";


const router = express.Router();

router.get('/all',protectRoute,getAllPost)
router.get('/following',protectRoute,getFollowingPosts)
router.get('/likes/:id',protectRoute,getLikedPost)
router.get('/user/:username',protectRoute,getUserPosts)
router.post('/create',protectRoute,createPost)
router.delete('/:id',protectRoute,deletePost)
router.post('/comment/:id',protectRoute,commentPost)
router.post('/like/:id',protectRoute,likeUnlikePost)

export default router