const express = require("express");
const bodyParser = require("body-parser");
var VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

const imageRouter = express.Router();
imageRouter.use(bodyParser.json());
var finalResponse = {};

var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: 'u8TEC9oKvuDSLS6oRQ6GvGpjEH-aknxy1nl-w_TVoIwe'
});

imageRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation is not supported on /images');
})
.post((req, res, next) => {
    var url = req.body.url;
    var classifier_ids = ["DetectIcyRoads_483090348"];
    var threshold = 0.5;

    var params = {
      url: url,
      classifier_ids: classifier_ids,
      threshold: threshold
    };

    visualRecognition.classify(params, (err, response) => {
        if (err) { 
            console.log(err);
        } else {
            var imageClassifier = response.images[0].classifiers[0].classes[0].class;
            finalResponse["url"] = url;
            finalResponse["class"] = imageClassifier;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(finalResponse);
        }
    });
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /images');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /images');
});

module.exports = imageRouter;