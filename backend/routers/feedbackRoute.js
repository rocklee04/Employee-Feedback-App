const express = require("express");
const feedbackRoutes = express.Router();
const feedbackController = require('../controllers/feedbackController');

feedbackRoutes.get('/requiring-feedback', feedbackController.getReviewsRequiringFeedback);
feedbackRoutes.post('/:reviewId/submit-feedback', feedbackController.submitFeedback);

module.exports = {feedbackRoutes};