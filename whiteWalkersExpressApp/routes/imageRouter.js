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
    var imageFileName = req.body.fileName;
    var images_file= fs.createReadStream('/Users/sonalsingh/MSCS/CornellBrh/ProjectWhiteWalkers/whiteWalkersExpressApp/pictures/'+imageFileName);
    var classifier_ids = ["COMEONMANx_10969308"];
    var threshold = 0.5;

    var params = {
        images_file: images_file,
        classifier_ids: classifier_ids,
        threshold: threshold
    };

    visualRecognition.classify(params, (err, response) => {
        if (err) { 
            console.log(err);
        } else {
            var name = response.images[0].image;
            var imageClassifier = response.images[0].classifiers[0].classes[0].class;
            finalResponse["fileName"] = name;
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