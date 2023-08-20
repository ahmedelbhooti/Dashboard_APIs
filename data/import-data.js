const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Doc = require("../models/docModel");

dotenv.config({ path: `./config.env` });

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
	.then(() => {
		console.log("Database connected successfully");
	});

const docs = JSON.parse(fs.readFileSync(`${__dirname}/jsondata.json`, "utf8"));

//Import data to DB
const importData = async () => {
	try {
		await Doc.create(docs);
		console.log("data imported successfully");
		process.exit();
	} catch (err) {
		console.log(err);
	}
};

//Delete data from DB
const deleteData = async () => {
	try {
		await Doc.deleteMany();
		console.log("data deleted successfully");
		process.exit();
	} catch (err) {
		console.log(err);
	}
};

if (process.argv[2] === "--import") {
	importData();
} else if (process.argv[2] === "--delete") {
	deleteData();
}
