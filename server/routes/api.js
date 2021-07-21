var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  try {
    let text = req.query.text;
   
    if(text.trim() == ""){
      res.status(400).send({ 
        error: "no text"
      });
    }

    res.status(200).send({
      text: text.split("").reverse().join("")
    });
  } catch (error) {
    res.status(400).send({ 
      error: "no text"
    });
  }
});

module.exports = router;
