const Feedback = require('../models/Feedback');
const Review = require('../models/Review');

const getReviewsRequiringFeedback = async (req, res) => {
    try {
        // Find reviews participated by the employee
        const participatedReviews = await Review.find({ participants: req.body.employeeId }).exec();

        // Find reviews that the employee has provided feedback for
        const reviewedReviews = await Feedback.find({ employee: req.body.employeeId }).distinct('review').exec();

        // Filter reviews requiring feedback
        const reviewsRequiringFeedback = participatedReviews.filter(review => !reviewedReviews.includes(review._id.toString()));

        res.json(reviewsRequiringFeedback);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get reviews requiring feedback', error: err.message });
    }
};


const submitFeedback = async (req, res) => {
    const { text } = req.body;
    const reviewId = req.params.reviewId;
    const employeeId = req.body.employeeId; 

    try {
        const feedback = new Feedback({
            review: reviewId,
            employee: employeeId,
            text
        });

        await feedback.save();
        res.status(201).json(feedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getReviewsRequiringFeedback, submitFeedback };
