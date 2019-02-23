const DB = require('../db/index');

// Get list with sub-dishes
const getSubDishes = (req, res) => {
	DB.SubDish.find({}) // Find all dishes 
		.then((subDishes) => {			
			return res.json({
				status: 0,
				dishes: subDishes, // Set all dishes to response
			});
    })
    .catch((err) => {
      console.error(err);
    });
};

const addSubDish = (req, res) => {
	if (req.body) {
		const newDish = new DB.SubDish(req.body);
		
		newDish
			.save()
			.then((subDish) => {
				return res.json({
					status: 0,
					data: 'Блюдо создано',
				})
			})
			.catch((err) => {
				console.log(err);
			})
	} else {
		return;
	}
};

const removeSubDish = (req, res) => {
	console.log(`Remove dish with id ${req.body}`);
	if (req.body) {
		DB.SubDish.deleteOne({
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
	app.get('/sub-dishes', getSubDishes);
	app.post('/sub-dishes/addSubDish', addSubDish);
	app.delete('/sub-dishes/removeSubDish', removeSubDish);
};

module.exports = { connect };
