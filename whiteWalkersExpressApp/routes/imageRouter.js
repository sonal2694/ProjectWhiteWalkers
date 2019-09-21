const express = require("express");
const bodyParser = require("body-parser");

const imageRouter = express.Router();
imageRouter.use(bodyParser.json());

imageRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation is not supported on /images');
})
.post((req, res, next) => {
    var fileNamesJson = req.body;
    var keys = []

    for (var i in fileNamesJson)
        keys.push(i);

    for (var i in keys) {
        var imageFileName = req.body[keys[i]];
        console.log(imageFileName);
    }
    res.end('Printing image names on Console');
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