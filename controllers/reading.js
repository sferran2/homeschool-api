const mongoose = require('mongoose');
const ReadingMaterial = require('../models/reading');

// GET all reading items
const getAll = async (req, res) => {
  try {
    const items = await ReadingMaterial.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving reading materials.',
      error: error.message
    });
  }
};

// GET one reading item by ID
const getSingle = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid reading material ID.'
      });
    }

    const item = await ReadingMaterial.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: 'Reading material not found.'
      });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving the reading material.',
      error: error.message
    });
  }
};

// POST a new reading item
const createItem = async (req, res) => {
  try {
    const item = new ReadingMaterial({
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
      message: 'An error occurred while creating the reading material.',
      error: error.message
    });
  }
};

// PUT update a reading item
const updateItem = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid reading material ID.'
      });
    }

    const updatedItem = await ReadingMaterial.findByIdAndUpdate(
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
        message: 'Reading material not found.'
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
      message: 'An error occurred while updating the reading material.',
      error: error.message
    });
  }
};

// DELETE a reading item
const deleteItem = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: 'Invalid reading material ID.'
      });
    }

    const deletedItem = await ReadingMaterial.findByIdAndDelete(
      req.params.id
    );

    if (!deletedItem) {
      return res.status(404).json({
        message: 'Reading material not found.'
      });
    }

    res.status(200).json({
      message: 'Reading material deleted successfully.'
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting the reading material.',
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