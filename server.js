const express = require('express');
const cors = require('cors');

const app = express();

// Apply CORS middleware globally
app.use(cors());

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
