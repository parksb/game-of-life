(function () {
    let svg = d3.select('#graph'),
        margin = {
            top: 20,
            right: 80,
            bottom: 30,
            left: 50
        },
        width = svg.attr('width') - margin.left - margin.right,
        height = svg.attr('height') - margin.top - margin.bottom,
        g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
    ;
    let x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]),
        z = d3.scaleOrdinal(d3.schemeCategory10)
    ;
    let line = d3.line()
        .curve(d3.curveBasis)
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.usersCount); })
    ;

    let http = new XMLHttpRequest();
    http.addEventListener('load', function () {
        let data = JSON.parse(http.responseText);
        let cities = [];

        for(let i = 0, max = data.length, standardTime = data[0] && data[0].date + 3600; i < max; ++i) {
            let v = data[i];
            cities.some(city => city.id === v.device) || cities.push({
                id: v.device,
                values: []
            });

            (standardTime < v.date) && (standardTime += 3600000);

            let city = cities.filter(city => city.id === v.device)[0];
            city.values.some(v => v.date.getTime() === standardTime) || city.values.push({
                date: new Date(standardTime),
                usersCount: 0
            });
            ++city.values.filter(v => v.date.getTime() === standardTime)[0].usersCount;
        }
        x.domain(d3.extent(data, function(d) { return d.date; }));

        y.domain([
            d3.min(cities, function(c) { return d3.min(c.values, function(d) { return d.usersCount; }); }),
            d3.max(cities, function(c) { return d3.max(c.values, function(d) { return d.usersCount; }); })
        ]);

        z.domain(cities.map(function(c) { return c.id; }));

        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x));

        g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('fill', '#000')
            .text('usersCount, ºF');

        let city = g.selectAll('.city')
            .data(cities)
            .enter().append('g')
            .attr('class', 'city');

        city.append('path')
            .attr('d', function(d) { return line(d.values); })
            .style('fill', 'none')
            .style('stroke', 'steelblue')
            .style('stroke-width', '1.5px')
            .style('stroke', function(d) { return z(d.id); });

        city.append('text')
            .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
            .attr('transform', function(d) { return 'translate(' + x(d.value.date) + ',' + y(d.value.usersCount) + ')'; })
            .attr('x', 3)
            .attr('dy', '0.35em')
            .style('font', '10px sans-serif')
            .text(function(d) { return d.id; });
    });
    http.open('GET', 'user-count');
    http.send();
}());