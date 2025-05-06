const express = require('express');
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import routes

app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced!');
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
}).catch(err => {
  console.error('DB connection error:', err);
});
