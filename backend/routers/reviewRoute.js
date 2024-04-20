const express = require("express");
const reviewRoutes = express.Router();
const reviewController = require('../controllers/reviewController');

reviewRoutes.get("/", reviewController.getAllReviews);
reviewRoutes.get("/:id", reviewController.getReview);
reviewRoutes.post("/add", reviewController.addReview);
reviewRoutes.put("/update/:id", reviewController.updateReview);
reviewRoutes.delete('/delete/:id', reviewController.deleteReview);

module.exports = { reviewRoutes };
