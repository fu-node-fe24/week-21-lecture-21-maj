import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { authorizeKey } from '../middlewares/authorize.js';

const router = Router();

// Middlewares
router.use(authorizeKey);

// GET all posts
router.get('/', async (req, res) => {
    res.json('Posts!');
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