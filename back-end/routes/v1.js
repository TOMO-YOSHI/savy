const express = require("express");
const router  = express.Router();

const {getProvinces, getMapData} = require("../controllers/mapController.js");
const {getQuiz} = require("../controllers/quizController.js");
const {getTeam} = require("../controllers/teamController.js");
const {getFaq} = require("../controllers/faqController.js");
const {getTestemonial} = require("../controllers/testemonialController.js");
const {getMaterial, search} = require("../controllers/wasteManagementController.js");

// Routes to savy api - Version 1
router
    .get("/provinces", getProvinces)
    .get("/mapdata", getMapData)
    .get("/quiz", getQuiz)
    .get("/team", getTeam)    
    .get("/faq", getFaq)      
    .get("/testemonials", getTestemonial) 
    .get("/materials", getMaterial)     
    .get("/search", search);      

module.exports = router;
