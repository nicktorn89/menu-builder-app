const DB = require('../db/index');

const getDishes = (req, res) => {
	console.log(req);

	DB.Dish.find({})
		.then((dishes) => {
			console.log(dishes);
			
			return res.json({
				status: 0,
				dishes: dishes,
			});
		})
};

const addDish = (req, res) => {
  console.log(req);
};

const removeDish = (req, res) => {
  console.log(req);
};

function connect(app) {
	app.get('/dishes', getDishes);
	app.post('/dishes/addDish', addDish);
	app.delete('/dishes/removeDish', removeDish);
};

module.exports = { connect };
