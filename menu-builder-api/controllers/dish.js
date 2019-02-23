const DB = require('../db/index');

// Get list with dishes
const getDishes = (req, res) => {
	DB.Dish.find({}) // Find all dishes 
		.then((dishes) => {			
			return res.json({
				status: 0,
				dishes: dishes, // Set all dishes to response
			});
		})
		.catch((err) => {
			console.error(err);
		});
};

const addDish = (req, res) => {
	if (req.body) {
		const newDish = new DB.Dish(req.body);
		
		newDish
			.save()
			.then((dish) => {
				return res.json({
					status: 0,
					data: 'Блюдо создано',
				})
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		return;
	}
};

const removeDish = (req, res) => {
	console.log(`Remove dish with id ${req.body}`);
	if (req.body) {
		DB.Dish.deleteOne({
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
	}
};

function connect(app) {
	app.get('/dishes', getDishes);
	app.post('/dishes/addDish', addDish);
	app.delete('/dishes/removeDish', removeDish);
};

module.exports = { connect };
