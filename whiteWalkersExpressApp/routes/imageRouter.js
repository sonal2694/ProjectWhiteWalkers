const express = require("express");
const bodyParser = require("body-parser");
var VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

const imageRouter = express.Router();
imageRouter.use(bodyParser.json());

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
    var fileNamesJson = req.body;
    var keys = []

    for (var key in fileNamesJson)
        keys.push(key);

    fileNames = []
    for (var i in keys) {
        var imageFileName = req.body[keys[i]];
        fileNames.push(imageFileName);

        var images_file= fs.createReadStream('/Users/sonalsingh/MSCS/CornellBrh/ProjectWhiteWalkers/whiteWalkersExpressApp/pictures/'+imageFileName);
        var classifier_ids = ["DetectIcyRoads_304399595"];
        var threshold = 0.0;

        var params = {
            images_file: images_file,
            classifier_ids: classifier_ids,
            threshold: threshold
        };

        visualRecognition.classify(params, (err, response) => {
            if (err) { 
                console.log(err);
            } else {
                console.log(response);
                console.log(JSON.stringify(response, null, 2))
            }
        });
        res.end('Printing classification on Console');
        // .then((response) => {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'application/json');
        //     res.json(response);
            
        // });
    }
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