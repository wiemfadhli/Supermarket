const pool = require('./salesdb');

// Model: get all sales
const getAllSales = async () => {
  const result = await pool.query('SELECT * FROM sales');
  return result.rows;
};

// Example: get sales summary
const getSalesSummary = async () => {
  try {
    const result = await pool.query(`
      SELECT
        SUM(total) AS total_sales,
        COUNT(*) AS transactions,
        AVG(total) AS average_sale
      FROM sales
    `);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching sales summary:', err);
    throw err;
  }
};


// Example: customer type breakdown
const getCustomerTypeSummary = async () => {
  const result = await pool.query(`
    SELECT customer_type, SUM(total) AS total
    FROM sales
    GROUP BY customer_type
  `);
  return result.rows;
};

// Example: payment method breakdown
const getPaymentMethodSummary = async () => {
  const result = await pool.query(`
    SELECT payment AS payment_method, SUM(total) AS total
    FROM sales
    GROUP BY payment
  `);
  return result.rows;
};

// Example: product line breakdown
const getProductLineSummary = async () => {
  const result = await pool.query(`
    SELECT product_line, SUM(total) AS total
    FROM sales
    GROUP BY product_line
  `);
  return result.rows;
};

module.exports = {
  getAllSales,
  getSalesSummary,
  getCustomerTypeSummary,
  getPaymentMethodSummary,
  getProductLineSummary,
};
