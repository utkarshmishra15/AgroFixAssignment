const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});