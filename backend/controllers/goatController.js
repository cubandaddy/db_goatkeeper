const Goat = require('../models/Goat');

exports.addGoat = async (req, res) => {
  try {
    const { farmCode, birthDate, ...otherFields } = req.body;
    const birthNumber = await Goat.getNextBirthNumber(birthDate);
    const birthYear = calculateBirthYear(birthDate);
    const goatNumber = \`\${farmCode}-\${birthYear}\${birthNumber}\`;

    const newGoat = new Goat({
      ...otherFields,
      farmCode,
      birthDate,
      birthYear,
      birthNumber,
      goatNumber
    });

    await newGoat.save();
    res.status(201).json(newGoat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function calculateBirthYear(birthDate) {
  const year = new Date(birthDate).getFullYear();
  // Implement ADGA tattoo policy logic
  return year;
}
