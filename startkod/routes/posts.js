import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const router = Router();

// GET all posts
router.get('/', async (req, res) => {

});

// GET all posts by userID
router.get('/:userId', async (req, res) => {

});

// POST new post
router.post('/', async (req, res) => {

});

// PUT post by postID
router.put('/:postId', async (req, res) => {

});

// DELETE post by postID
router.delete('/:postId', async (req, res) => {

});

export default router;