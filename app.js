//modules require
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const docRouter = require("./routes/docRoutes");

const app = express();

// A middleware
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: [process.env.FRONTEND_URL],
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		credentials: true,
	}),
);

//route splitting
app.use("/api/v1/docs", docRouter);

module.exports = app;
