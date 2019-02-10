const getProducts = (req, res) => {
	console.log(req);
	res.json({
		status: 0,
		data: 'hi',
	});
};

const addProduct = (req, res) => {
  console.log(req);
};

const removeProduct = (req, res) => {
  console.log(req);
};

function connect(app) {
	app.get('/products', getProducts);
	app.post('/dishes/addProduct', addProduct);
	app.delete('/dishes/removeProduct', removeProduct);
};

module.exports = { connect };
