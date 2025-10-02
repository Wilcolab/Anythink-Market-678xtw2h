/**
 * POST /api/comments
 * Creates a new comment for a given post.
 *
 * Request body should contain:
 * - postId: ID of the post to comment on
 * - author: Author of the comment
 * - content: Content of the comment
 *
 * Success Response:
 * - Status: 201
 * - Body: The created comment object
 *
 * Error Response:
 * - Status: 500
 * - Body: { error: "Failed to create comment" }
 *
 * @route POST /api/comments
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing postId, author, and content
 * @param {Object} res - Express response object
 * @returns {Object} The created comment or an error message
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, can you help me implement the comment creation logic?
router.post("/", async (req, res) => {
    try {
        const { postId, author, content } = req.body;   
        const newComment = new Comment({ postId, author, content });
        await newComment.save();
        res.status(201).json(newComment);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create comment" });
    }
});