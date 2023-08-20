const Doc = require("../models/docModel");

//Get all doc
exports.getAllData = async (req, res) => {
	try {
		const docs = await Doc.find();
		res.status(200).json({
			status: "success",
			data: {
				docs,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: "Invalid request",
		});
	}
};

//Get data filtered by year
exports.yearFilter = async (req, res) => {
	try {
		const { year } = req.params;
		if (year.length !== 4) {
			return res.status(400).json({
				success: false,
				message: "Invalid year",
			});
		}
		const allData = await Doc.find({
			$or: [
				{ start_year: year },
				{ end_year: year },
				{ published: { $regex: year, $options: "i" } },
				{ added: { $regex: year, $options: "i" } },
			],
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by year ${year}`,
			data: allData,
		});
	} catch (e) {
		console.log(e);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by topics
exports.topicFilter = async (req, res) => {
	try {
		const { topic } = req.params;
		if (topic.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid topic",
			});
		}
		const allData = await Doc.find({ topic: { $regex: topic, $options: "i" } });
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by topic: ${topic}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by title
exports.titleFilter = async (req, res) => {
	try {
		const { title } = req.params;
		if (title.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid title",
			});
		}
		const allData = await Doc.find({ title: { $regex: title, $options: "i" } });
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by title: ${title}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by sector
exports.sectorFilter = async (req, res) => {
	try {
		const { sector } = req.params;
		if (sector.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid sector",
			});
		}
		const allData = await Doc.find({
			sector: { $regex: sector, $options: "i" },
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by sector: ${sector}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by region
exports.regionFilter = async (req, res) => {
	try {
		const { region } = req.params;
		if (region.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid region",
			});
		}
		const allData = await Doc.find({
			region: { $regex: region, $options: "i" },
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by region: ${region}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by country
exports.countryFilter = async (req, res) => {
	try {
		const { country } = req.params;
		if (country.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid country",
			});
		}

		const allData = await Doc.find({
			country: { $regex: country, $options: "i" },
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by country: ${country}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by pestleFilter
exports.pestleFilter = async (req, res) => {
	try {
		const { pestle } = req.params;
		if (pestle.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid pestle",
			});
		}
		const allData = await Doc.find({
			pestle: { $regex: pestle, $options: "i" },
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by pestle: ${pestle}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by source
exports.sourceFilter = async (req, res) => {
	try {
		const { source } = req.params;
		if (source.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid source",
			});
		}
		const allData = await Doc.find({
			source: { $regex: source, $options: "i" },
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by source: ${source}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by intensity
exports.intensityFilter = async (req, res) => {
	try {
		const { intensity } = req.params;
		const allData = await Doc.find({ intensity: parseInt(intensity) });
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by intensity: ${intensity}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Get data filtered by likelihood
exports.likelihoodFilter = async (req, res) => {
	try {
		const { likelihood } = req.params;
		const allData = await Doc.find({ likelihood: parseInt(likelihood) });
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by likelihood: ${likelihood}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

// function to get data filtered by any
exports.anyFilter = async (req, res) => {
	try {
		const { search } = req.params;
		if (search.length < 3) {
			return res.status(400).json({
				success: false,
				message: "Invalid search",
			});
		}
		const allData = await Doc.find({
			$or: [
				{ sector: { $regex: search, $options: "i" } },
				{ topic: { $regex: search, $options: "i" } },
				{ insight: { $regex: search, $options: "i" } },
				{ title: { $regex: search, $options: "i" } },
				{ pestle: { $regex: search, $options: "i" } },
				{ source: { $regex: search, $options: "i" } },
				{ url: { $regex: search, $options: "i" } },
			],
		});
		if (!allData || allData.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No Data Found",
			});
		}
		return res.status(200).json({
			success: true,
			message: `Filtered by search ${search}`,
			data: allData,
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

//Create a new Doc
exports.createNewDoc = async (req, res) => {
	try {
		const newDoc = await Doc.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				doc: newDoc,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: "Invalid data",
		});
	}
};

//Update Doc
exports.updateDoc = async (req, res) => {
	try {
		const tour = await Doc.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				tour,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: "Invalid Id",
		});
	}
};
//Delete a doc
exports.deleteDoc = async (req, res) => {
	try {
		await Doc.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: "success",
			data: null,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: "Invalid Id",
		});
	}
};
