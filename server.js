const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

// console.log(process.env);

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD,
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB connected successfully"));

//Starting server
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
