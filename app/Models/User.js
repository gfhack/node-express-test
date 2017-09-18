const bookshelf = require('../../bookshelf');
const Model = bookshelf.Model;

class User extends Model
{
	get tableName() {
		return 'users';
	}
}

module.exports = bookshelf.model('User', User);
