const UserModel = require("../models/user.model");
const Validator = require ('fastest-validator');


/* create an instance of the validator */
//let userValidator = new Validator();

/* use the same patterns as on the client to validate the request */
let namePattern = /([A-Za-z\-\’])*/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

/* user validator shema */
const userVSchema = {
		email: { type: "email", max: 75 },
		pseudo: { type: "string", min:1, max:5, pattern: namePattern},
		mdp: { type: "string", min: 2, max: 50, pattern: passwordPattern}
	};

/* static user service class */
class UserService
{
	static create(data)
	{
		//var vres = userValidator.validate(data) userVSchema);
		
		/* validation failed */
		/*if(!(vres === true))
		{
			let errors = {}, item;

			for(const index in vres)
			{
				item = vres[index];

				errors[item.field] = item.message;
			}
			
			throw {
			    name: "ValidationError",
			    message: errors
			};
		}*/
		
		let user = new UserModel(data.email, data.pseudo, data.mdp);
		console.log("ON EST DANS LE CREATE DE USER SERVICE VOICI DATA:"+ data+ "ET VOICI USER"+user);


		return user;
	}

}

module.exports = UserService;