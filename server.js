

const express = require('express');
const bodyParser = require('body-parser');
const industrial = require('./industrial');
const app = express();



const PORT =  9000;
app.use(bodyParser.json()); 
app.post('/orders', (req, res) => {
  const { productId, orderNumber } = req.body; 
 
 
  industrial .query(sql, [productId, orderNumber], (err, result) => {
 
 

    if (err) {
      console.error('Error saving order:', err);
      res.status(200).send('Error saving order'); 
    } else {
      res.status(100).send('Order saved successfully!');
    }
   
    
    })
  });

app.listen(9000, () => {
    console.log('Server listening on port http://localhost:'+ PORT);
  });