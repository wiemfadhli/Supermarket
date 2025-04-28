// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const { getAllSales, getAllTables, getCustomerTypeSummary, getSalesSummary ,getPaymentMethodSummary} = require('../Models/salesModel');


router.get('/', async (req, res) => {

   
  res.json(" get to go ");

}
)
// Get all sales
router.get('/sales', async (req, res) => {
  try {
    const sales = await getAllSales();
    res.json(sales);
  } catch (err) {
    console.error('Error fetching sales:', err.message);
    res.status(500).send('Failed to fetch sales');
  }
});

// List all tables
router.get('/tables', async (req, res) => {
  try {
    const tables = await getAllTables();
    res.json(tables);
  } catch (err) {
    console.error('Error fetching tables:', err.message);
    res.status(500).send('Failed to fetch tables');
  }
});
// ProductLineSummary
router.get('/ProductLineSummary', async (req, res) => {
  try {
    const tables = await getSalesSummary ();
    res.json(tables);
  } catch (err) {
    console.error('Error fetching ProductLineSummary :', err.message);
    res.status(500).send('Failed to fetch tables');
  }
});
// PaymentMethodSummary
router.get('/PaymentMethodSummary', async (req, res) => {
  try {
    const tables = await getPaymentMethodSummary();
    res.json(tables);
  } catch (err) {
    console.error('Error fetching ProductLineSummary :', err.message);
    res.status(500).send('Failed to fetch tables');
  }
});

// CustomerTypeSummary
router.get('/CustomerTypeSummary', async (req, res) => {
  try {
    const tables = await getCustomerTypeSummary();
    res.json(tables);
  } catch (err) {
    console.error('Error fetching CustomerTypeSummary:', err.message);
    res.status(500).send('Failed to fetch tables');
  }
});







module.exports = router;
