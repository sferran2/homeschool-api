const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema(
  {
    inventoryNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'Book',
        'Game',
        'Puzzle',
        'Manipulative',
        'Flashcards',
        'Workbook',
        'Sensory',
        'Toy',
        'Other'
      ]
    },

    ageRange: {
      type: String,
      required: true,
      trim: true
    },

    skills: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: 'At least one skill is required.'
      }
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    condition: {
      type: String,
      required: true,
      enum: [
        'Excellent',
        'Good',
        'Fair',
        'Needs Repair',
        'Missing Pieces'
      ]
    },

    notes: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('ReadingMaterial', readingSchema);