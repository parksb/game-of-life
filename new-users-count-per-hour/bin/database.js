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
    database.records = JSON.parse(data).sort(function (v1, v2) {
        return v1.date > v2.date ? 1 : v1.date < v2.date ? -1 : 0;
    });
});

module.exports = database;
