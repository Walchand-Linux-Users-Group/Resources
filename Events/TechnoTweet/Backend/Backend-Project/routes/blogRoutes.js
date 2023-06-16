const express = require('express');
const router = express.Router();

const { createBlog, deleteBlog, getAllBlog, getBlog, AddComment, upload } = require('../controllers/blogControllers');

router.post('/createBlog',upload, createBlog);
router.post('/deleteBlog', deleteBlog);
router.get('/getBlog/:id', getBlog);
router.post('/addComment', AddComment);
router.get('/', getAllBlog);

module.exports = router;