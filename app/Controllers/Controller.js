const Country = require('../Models/Country');
const User = require('../Models/User');

class Controller
{
	// hello(req, res) {
	// 	return res.json({ hello: 'world' });
	// }
	//
	// compute(req, res) {
	// 	let x = 0, y = 1;
	//
	// 	let max = 10000 + Math.random() * 500;
	//
	// 	for (let i = 0; i <= max; i++) {
	// 	    let z = x + y;
	// 	    x = y;
	// 	    y = z;
	// 	}
	//
	// 	return res.json({ status: 'done' })
	// }
	//
	// async countries(req, res) {
	// 	let data = await Country.fetchAll();
	//
	// 	return res.json({ data });
	// }

	async users(req, res) {
		let data = await User.fetchAll()

		return res.json({ data });
	}

	async user(req, res) {
		let data = await User.where('id', 1).fetch()

		return res.json({ data });
	}

	async createUser(req, res) {
		return res.json(req.body);
	}
}

module.exports = new Controller();
