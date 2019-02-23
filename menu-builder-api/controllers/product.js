const DB = require('../db/index');

const getProducts = (req, res) => {
	DB.Product.find({})
		.then((prods) => {			
			return res.json({
				status: 0,
				products: prods, // Set all products to response
			});
		})
		.catch((err) => {
			console.error(err);
		});
};

const addProduct = (req, res) => {
  if (req.body) {
		const newProduct = new DB.Product(req.body);
		
		newProduct
			.save()
			.then((prods) => {
				return res.json({
					status: 0,
					data: 'Продукт создано',
				})
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		return;
	}
};

const removeProduct = (req, res) => {
  if (req.body) {
		DB.Product.deleteOne({
			_id: req.body.id,
		})
			.then((data) => {
				res.json({
					status: 0,
					data: data,
				})
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		return;
	}
};

function connect(app) {
	app.get('/products', getProducts);
	app.post('/products/addProduct', addProduct);
	app.delete('/products/removeProduct', removeProduct);
};

module.exports = { connect };
