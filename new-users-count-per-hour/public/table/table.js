const _ = document;
(function () {
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
            td.textContent = standardTime.toString();
            td.className = 'data';
            tr.className = 'row';
            tr.append(td);
            for (let i = 1, max = 25; i < max; ++i) {
                let index = 0,
                    v = data[index],
                    platforms = {
                        Android: 0,
                        iOS: 0
                    }
                ;
                standardTime += 3600000;
                while (v && v.date < standardTime) {
                    let device = v.device.split(' ')[0];
                    ++platforms[device];
                    v = data[++index];
                }
                data.splice(0, index);

                let td = _.createElement('td'),
                    android = _.createElement('span'),
                    iOS = _.createElement('span')
                ;
                android.className = 'android';
                iOS.className = 'ios';
                if (platforms.Android === 0 && platforms.iOS === 0) {
                    android.style.width = 'calc(50% - 5px)';
                    iOS.style.width = 'calc(50% - 5px)';
                } else {
                    if (platforms.Android) {
                        android.style.width = `calc(${platforms.Android * 100 / (platforms.Android + platforms.iOS)}% - 5px)`;
                    } else {
                        android.style.width = '0px';
                        android.style.paddingLeft = '0px';
                    }
                    if (platforms.iOS) {
                        iOS.style.width = `calc(${platforms.iOS * 100 / (platforms.Android + platforms.iOS)}% - 5px)`;
                    } else {
                        iOS.style.width = '0px';
                        iOS.style.paddingLeft = '0px';
                    }
                }
                android.textContent = platforms.Android.toString();
                iOS.textContent = platforms.iOS.toString();
                td.className = 'data';
                td.appendChild(android);
                td.appendChild(iOS);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    });
    http.open('GET', 'user-count');
    http.send();
}());
