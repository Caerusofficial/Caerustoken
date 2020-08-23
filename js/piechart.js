jQuery(window).load(function() {
    "use strict";

    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Task', 'Percentage'],
            ['Uniswap', 65],
            ['Presale', 20],
            ['Teamshare', 0],
            ['Marketing', 15]
            
        ]);

        var options = {
            enableInteractivity: 'true',
            pieSliceText: 'none',
            fontSize: '14',
            pieStartAngle: 36,
            'legend': {
                position: 'labeled'
            },
            fontName: 'IBM Plex Sans',
            colors: ['#0096a0', '#00a7b2', '#2bc0ca', '#40d4de', '#67e1e9'],
            'tooltip': {
                trigger: 'none'
            }

        };

        if (jQuery(window).width() < 668) {

            var options = {
                enableInteractivity: 'true',
                pieSliceText: 'percentage',
                fontSize: '10',
                pieStartAngle: 36,
                'legend': {
                    position: 'left'
                },
                fontName: 'IBM Plex Sans',
                colors: ['#0096a0', '#00a7b2', '#2bc0ca', '#40d4de', '#67e1e9'],
                'tooltip': {
                    trigger: 'none'
                }
            };

        }



        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }


});