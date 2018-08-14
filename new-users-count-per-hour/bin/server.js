const router = require('express').Router();
const path = require('path');
const database = require('./database');

router.get('/graph', (req, res) => res.sendFile(path.join(__dirname, '../public/graph/graph.html')));

router.get('/table', (req, res) => res.sendFile(path.join(__dirname, '../public/table/table.html')));

router.get('/user-count', function (req, res) {
    res.send(JSON.stringify(
        database.selectByDate(
            Date.parse('2017-09-17 12:20:00'),
            Date.parse('2017-09-27 12:30:00')
        )
    ));
});

module.exports = router;
