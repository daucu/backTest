const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'https://fronttest-eazrwtdu.daucu.site/', // Your frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Pietro', lastName: 'Doe' },
    { id: 2, firstName: 'anna', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
