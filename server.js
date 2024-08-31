const express = require('express');
const app = express();

// cors
const cors = require("cors");
//Loop of allowed origins
const allowedOrigins = [
  "http://localhost:3001",
  "http://localhost:3000",
  "https://admin-for-all.vercel.app",
  "https://dauqunews.vercel.app",
  "https://fronttest-eazrwtdu.daucu.site",
];

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Pietro', lastName: 'Doe' },
    { id: 2, firstName: 'anna', lastName: 'Traversy' },
    { id: 3, firstName: 'Giovanni', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
