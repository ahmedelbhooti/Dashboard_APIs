const express = require("express");
const docController = require("../controllers/docController");

const router = express.Router();

router
	.route("/")
	.get(docController.getAllData)
	.post(docController.createNewDoc);

router
	.route("/:id")
	.delete(docController.deleteDoc)
	.patch(docController.updateDoc);

router.route("/year/:year").get(docController.yearFilter);

router.route("/topic/:topic").get(docController.topicFilter);

router.route("/title/:title").get(docController.titleFilter);

router.route("/sector/:sector").get(docController.sectorFilter);

router.route("/region/:region").get(docController.regionFilter);

router.route("/country/:country").get(docController.countryFilter);

router.route("/pestle/:pestle").get(docController.pestleFilter);

router.route("/source/:source").get(docController.sourceFilter);

router.route("/intensity/:intensity").get(docController.intensityFilter);

router.route("/likelihood/:likelihood").get(docController.likelihoodFilter);

router.route("/any/:search").get(docController.anyFilter);

module.exports = router;
