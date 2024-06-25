const express = require('express');
const mongoose = require('mongoose');
const goatRoutes = require('./routes/goatRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/goatkeeper', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', goatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
