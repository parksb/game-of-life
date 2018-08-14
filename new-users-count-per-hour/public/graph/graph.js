(function () {
    // svg 관련 정보
    let graph = {
        svg: d3.select('#graph'),
        g: d3.select('#graph').append('g'),
        line: (d3.line()
            .curve(d3.curveBasis)
            .x(d => position.x(d.date))
            .y(d => position.y(d.usersCount))
        ),
        margin: {
            top: 0,
            left: 50,
            right: 80,
            bottom: 30
        },
        get width() { return (this.svg.attr('width') - this.margin.left - this.margin.right); } ,
        get height() { return (this.svg.attr('height') - this.margin.top - this.margin.bottom); },
    };
    // 상대 위치 계산
    let position = {
        x: d3.scaleTime().range([0, graph.width]),
        y: d3.scaleLinear().range([graph.height, 0]),
        z: d3.scaleOrdinal(d3.schemeCategory10)
    };

    let http = new XMLHttpRequest();
    http.addEventListener('load', function () {
        const ONE_HOUR = 3600000;
        let data = JSON.parse(http.responseText),
            platforms = {}
        ;

        /* 시간대 별 데이터 분류 */
        for (let i = 0, max = data.length, standardTime = data[i] && data[i].date + ONE_HOUR; i < max; ++i) {
            let v = data[i];
            platforms[v.device] || (platforms[v.device] = {});

            // 기준 시간 초과 시 1시간 뒤로 설정
            (standardTime < v.date) && (standardTime += ONE_HOUR);

            let platform = platforms[v.device];
            platform[standardTime] ? ++platform[standardTime] : (platform[standardTime] = 1);
        }

        // D3 데이터 형식으로 변환
        platforms = Object.keys(platforms).map(k => {
            let platform = platforms[k];
            return {
                id: k,
                values: Object.keys(platform).map(time => ({
                    date: new Date(parseInt(time)),
                    usersCount: platform[time]
                }))
            };
        });

        /* 그래프 데이터 기준 */
        position.x.domain(d3.extent(data, d => d.date));
        position.y.domain([
            d3.min(platforms, c => d3.min(c.values, d => d.usersCount)),
            d3.max(platforms, c => d3.max(c.values, d => d.usersCount))
        ]);
        position.z.domain(platforms.map(c => c.id));

        // x축
        graph.g
            .attr('transform', `translate(${graph.margin.left},${graph.margin.top})`)
            .append('g')
            .attr('transform', `translate(0,${graph.height})`)
            .call(d3.axisBottom(position.x))
        ;
        // y축
        graph.g.append('g').call(d3.axisLeft(position.y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.7em')
            .attr('fill', '#000')
            .style('font', '12px sans-serif')
            .text('사용자 수')
        ;

        let platform = graph.g.selectAll()
            .data(platforms)
            .enter()
            .append('g')
        ;
        // 플랫폼 별 사용량 그래프
        platform.append('path')
            .attr('d', d => graph.line(d.values))
            .style('fill', 'none')
            .style('stroke-width', '1.5px')
            .style('stroke', d => position.z(d.id))
        ;
        // 그래프 별 텍스트
        platform.append('text')
            .datum(d => ({
                id: d.id,
                value: d.values[d.values.length - 1]
            }))
            .attr('transform', d => `translate(${position.x(d.value.date)},${position.y(d.value.usersCount)})`)
            .attr('x', 3)
            .attr('dx', '-0.1em')
            .style('font', '12px sans-serif')
            .text(d => d.id)
        ;
    });
    http.open('GET', 'user-count');
    http.send();
}());
