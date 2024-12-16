const express = require('express');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes');

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
