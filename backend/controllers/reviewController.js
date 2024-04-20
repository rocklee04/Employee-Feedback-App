const express = require('express');
const Review = require('../models/Review');

// Get all performance reviews
let getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.send(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one performance review
let getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (review) {
            res.send(review);
        } else {
            res.status(404).json({ message: "Performance review not found." });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a performance review
let addReview = async (req, res) => {
    const { title, description, deadline, participants } = req.body;

    try {
        const newReview = new Review({
            title,
            description,
            deadline,
            participants
        });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a performance review
let updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReview) {
            res.status(404).json({ message: 'No performance review found with this ID' });
        }
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a performance review
let deleteReview = async (req, res) => {
    try {
        const deleted = await Review.findByIdAndDelete(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: 'No performance review found with this ID' });
        }
        res.json({ message: 'Performance review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllReviews, getReview, addReview, updateReview, deleteReview };
