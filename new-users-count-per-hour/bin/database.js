const fs = require('fs');
const database = {
    records: [],
    selectByDate: function (startDate, endDate) {
        return this.records.filter(function (v) {
            return startDate <= v.date && v.date < endDate;
        });
    }
};

fs.readFile('users.json', 'utf8', function (err, data) {
    database.records = JSON.parse(data);
});

module.exports = database;
