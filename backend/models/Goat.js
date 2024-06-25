const mongoose = require('mongoose');

const GoatSchema = new mongoose.Schema({
  farmName: String,
  farmCode: String,
  goatName: String,
  birthDate: Date,
  birthYear: String,
  birthNumber: Number,
  goatNumber: String,
  sex: String,
  colors: String,
  leftEarTattoo: String,
  rightEarTattoo: String,
  hornStatus: String,
  medications: [{ type: String, date: Date }],
  procedures: [{ type: String, date: Date }],
  otherInformation: [{ type: String, date: Date }],
  pictures: [{ url: String, date: Date }]
});

GoatSchema.statics.getNextBirthNumber = async function(birthDate) {
  // Implement logic to get next birth number, reset yearly
};

module.exports = mongoose.model('Goat', GoatSchema);
