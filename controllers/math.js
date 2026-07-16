const mongoose = require('mongoose');
const MathMaterial = require('../models/math');

// GET all math items
const getAll = async (req, res) => {
  try {
    const items = await MathMaterial.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving math materials.',
      error: error.message
    });
  }
};

// GET one math item by ID
const getSingle = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid math material ID.'
      });
    }

    const item = await MathMaterial.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: 'Math material not found.'
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving the math material.',
      error: error.message
    });
  }
};

// POST a new math item
const createItem = async (req, res) => {
  try {
    const item = new MathMaterial({
      inventoryNumber: req.body.inventoryNumber,
      name: req.body.name,
      category: req.body.category,
      ageRange: req.body.ageRange,
      skills: req.body.skills,
      quantity: req.body.quantity,
      condition: req.body.condition,
      notes: req.body.notes
    });

    const savedItem = await item.save();

    res.status(201).json(savedItem);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation failed.',
        error: error.message
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Inventory number already exists.'
      });
    }

    res.status(500).json({
      message: 'An error occurred while creating the math material.',
      error: error.message
    });
  }
};

// PUT update a math item
const updateItem = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid math material ID.'
      });
    }

    const updatedItem = await MathMaterial.findByIdAndUpdate(
      req.params.id,
      {
        inventoryNumber: req.body.inventoryNumber,
        name: req.body.name,
        category: req.body.category,
        ageRange: req.body.ageRange,
        skills: req.body.skills,
        quantity: req.body.quantity,
        condition: req.body.condition,
        notes: req.body.notes
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: 'Math material not found.'
      });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation failed.',
        error: error.message
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Inventory number already exists.'
      });
    }

    res.status(500).json({
      message: 'An error occurred while updating the math material.',
      error: error.message
    });
  }
};

// DELETE a math item
const deleteItem = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid math material ID.'
      });
    }

    const deletedItem = await MathMaterial.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: 'Math material not found.'
      });
    }

    res.status(200).json({
      message: 'Math material deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting the math material.',
      error: error.message
    });
  }
};

module.exports = {
  getAll,
  getSingle,
  createItem,
  updateItem,
  deleteItem
};