const _ = document;
const ONE_HOUR = 3600000;
const HOUR = {
    MIN: 0,
    MAX: 24
};

(function () {
    const View = {
        fillZero: function (text) {
            return `0${text}`.slice(-2);
        },
        getDateString: function (date) {
            return `${date.getFullYear()}-${this.fillZero(date.getMonth() + 1)}-${this.fillZero(date.getDate())}`
        },
        createCell: function (platforms) {
            let td = _.createElement('td'),
                android = _.createElement('span'),
                iOS = _.createElement('span'),
                sum = platforms.Android + platforms.iOS,
                bothZero = (platforms.Android === 0 && platforms.iOS === 0)
            ;
            if (platforms.Android || bothZero) {
                android.className = 'android';
                android.textContent = platforms.Android.toString();
                android.style.width = `calc(${bothZero ? 50 : (platforms.Android * 100 / (sum))}% - 5px)`;
                td.appendChild(android);
            }
            if (platforms.iOS || bothZero) {
                iOS.className = 'ios';
                iOS.textContent = platforms.iOS.toString();
                iOS.style.width = `calc(${bothZero ? 50 : (platforms.iOS * 100 / (sum))}% - 5px)`;
                td.appendChild(iOS);
            }
            td.className = 'data';
            return td;
        }
    };

    let http = new XMLHttpRequest();
    http.addEventListener('load', function () {
        let data = JSON.parse(http.responseText),
            startDate = Date.parse('2017-09-17 00:00:00'),
            endDate = Date.parse('2017-09-28 00:00:00'),
            standardTime = startDate
        ;
        let table = _.getElementById('table'),
            tbody = table.querySelector('tbody')
        ;
        while (standardTime < endDate) {
            let tr = _.createElement('tr'),
                td = _.createElement('td')
            ;
            td.textContent = View.getDateString(new Date(standardTime));
            td.className = 'data';
            tr.className = 'row';
            tr.appendChild(td);
            for (let i = HOUR.MIN + 1, max = HOUR.MAX + 1; i < max; ++i) {
                let index = 0,
                    v = data[index],
                    platforms = {
                        Android: 0,
                        iOS: 0
                    }
                ;
                standardTime += ONE_HOUR;
                while (v && v.date < standardTime) {
                    let device = v.device.split(' ')[0];
                    ++platforms[device];
                    v = data[++index];
                }
                data.splice(0, index);
                tr.appendChild(View.createCell(platforms));
            }
            tbody.appendChild(tr);
        }
    });
    http.open('GET', 'user-count');
    http.send();
}());
