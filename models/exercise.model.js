const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    default: function() {

      const caloriesPerMinute = {
        running: 10,
        cycling: 8,
        swimming: 12,
        walking: 5,
        weightlifting: 6,
        yoga: 3,
        dancing: 7,
      };
      const exerciseType = this.name.toLowerCase();
      const caloriesPerMinuteForExercise = caloriesPerMinute[exerciseType] || 5;
      return this.duration * caloriesPerMinuteForExercise;
    },
  },
}, { 
  timestamps: true 
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
