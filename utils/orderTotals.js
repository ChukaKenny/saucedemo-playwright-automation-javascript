const TAX_RATE = 0.08;

//Works out the item total, tax and total the way they appear on the order overview page.
function getExpectedTotals(products) {
  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = subtotal + tax;

  return {
    itemTotal: `Item total: $${subtotal.toFixed(2)}`,
    tax: `Tax: $${tax.toFixed(2)}`,
    total: `Total: $${total.toFixed(2)}`,
  };
}

module.exports = { getExpectedTotals };
