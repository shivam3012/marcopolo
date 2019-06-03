const express = require('express');
const router = express.Router();
const marcoPolo = require('../controllers/marcoPolo.js');

router.get('/getMarcoPoloGame', function (req, res) {
	marcoPolo.getGameResult(req, res);
});

module.exports = router;