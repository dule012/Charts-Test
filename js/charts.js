$(function () {
    var arrOfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //chart1    
    function chart1() {
        new Highcharts.Chart({
            chart: {
                type: 'areaspline',
                renderTo: 'container1',
                // spacingTop: 60
                borderRadius: 20,
            },
            title: {
                text: 'HGw Status',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'GB'
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + this.key}</p>
                    <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false
                    }
                },
            },
            series: [{
                name: 'Data Transfered',
                data: [75, 80, 60, 70, 119, 100, 120, 50, 90, 140, 100]
            }, {
                name: 'Total No. Unifi Clients',
                data: [100, 30, 80, 70, 67, 89, 66, 88, 55, 100, 90]
            }]
        })
    }
    function chart2() {
        //chart2
        new Highcharts.Chart({
            chart: {
                type: 'areaspline',
                renderTo: 'container2',
                // spacingTop: 60
                borderRadius: 20,
            },
            title: {
                text: 'HGw Status',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'GB'
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + this.key}</p>
                <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Good',
                data: [75, 80, 60, 70, 119, 100, 120, 50, 90, 140, 100]
            }, {
                name: 'Medium',
                data: [100, 30, 80, 70, 67, 89, 66, 88, 55, 100, 90]
            },
            {
                name: 'Bad',
                data: [50, 20, 40, 50, 57, 79, 56, 78, 45, 60, 40]
            }]
        })
    }
    function chart3() {
        //chart3
        new Highcharts.Chart({
            chart: {
                type: 'column',
                renderTo: 'container3',
                borderRadius: 20,
                // spacingTop: 60
            },
            title: {
                text: 'HGW Interterence',
                align: 'left',
            },
            subtitle: {
                text: 'Teritorial Directions',
                verticalAlign: 'bottom',
                y: 5
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13'
                ],

            },
            yAxis: {
                title: {
                    text: 'No. of Clients'
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    var minutes = new Date().getMinutes() < 10 ? 0 + '' + new Date().getMinutes() : new Date().getMinutes()
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + new Date().getHours() + ':' + minutes}</p>
                <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },


            plotOptions: {
                column: {
                    borderRadius: 5
                }
            },

            series: [{
                name: 'A',
                data: [90, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'B',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'C',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'D',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 90]
            }]


        })
    }
    function chart4() {
        //chart4
        new Highcharts.Chart({
            chart: {
                type: 'column',
                renderTo: 'container4',
                borderRadius: 20,
                // spacingTop: 60
            },
            title: {
                text: 'Total No. of interference Network',
                align: 'left',
            },
            subtitle: {
                text: 'Teritorial Directions',
                verticalAlign: 'bottom',
                y: 5
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13'
                ],

            },
            yAxis: {
                title: {
                    text: 'No. of Clients'
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    var minutes = new Date().getMinutes() < 10 ? 0 + '' + new Date().getMinutes() : new Date().getMinutes()
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + new Date().getHours() + ':' + minutes}</p>
            <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },


            plotOptions: {
                column: {
                    borderRadius: 5
                }
            },

            series: [{
                name: 'A',
                data: [90, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'B',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'C',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 100]
            }, {
                name: 'D',
                data: [100, 130, 200, 140, 100, 130, 200, 140, 100, 130, 200, 140, 90]
            }]


        })
    }
    function chart5() {
        //chart5
        new Highcharts.Chart({
            chart: {
                type: 'spline',
                renderTo: 'container5',
                borderRadius: 20,
                // spacingTop: 60
            },
            title: {
                text: 'HGw - Bit rate',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'dBm',
                },
                min: 0,
                max: -200,
                tickPixelInterval: -50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    var minutes = new Date().getMinutes() < 10 ? 0 + '' + new Date().getMinutes() : new Date().getMinutes()
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + new Date().getHours() + ':' + minutes}</p>
            <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}[dBm]</p></div>`
                },
            },


            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'dBm',
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    marker: {
                        enabled: false
                    },
                }
            },
            series: [
                {
                    name: 'Maximum',
                    data: [130, 150, 120, 70, 190, 180, 140, 160, 130, 100, 200]
                },
                {
                    name: 'Average',
                    data: [110, 170, 160, 140, 180, 130, 160, 140]
                }, {
                    name: 'Minumun',
                    data: [100, 120, 140, 150, 130, 1100, 120, 130, 160, 1200]
                }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        })
    }
    function chart6() {
        //chart6
        new Highcharts.Chart({
            chart: {
                type: 'spline',
                renderTo: 'container6',
                borderRadius: 20,
                // spacingTop: 60
            },
            title: {
                text: 'HGw - RSS',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'dBm',
                },
                min: 0,
                max: -200,
                tickPixelInterval: -50

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    var minutes = new Date().getMinutes() < 10 ? 0 + '' + new Date().getMinutes() : new Date().getMinutes()
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + new Date().getHours() + ':' + minutes}</p>
            <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}kbps</p></div>`
                },
            },


            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {
                title: {
                    text: 'dBm',
                },
                min: 0,
                max: 200,
                tickPixelInterval: 50
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    marker: {
                        enabled: false
                    },
                }
            },

            series: [
                {
                    name: 'Max',
                    data: [130, 150, 120, 70, 190, 180, 140, 160, 130, 100, 200],
                },
                {
                    name: 'Average',
                    data: [110, 170, 160, 140, 180, 130, 160, 140]
                }, {
                    name: 'Min',
                    data: [100, 120, 140, 150, 130, 1100, 120, 130, 160, 1200]
                }],

        })
    }
    function chart7() {
        //chart7
        new Highcharts.Chart({
            chart: {
                type: 'line',
                renderTo: 'container7',
                // spacingTop: 60
                borderRadius: 20,
            },
            title: {
                text: 'HGw - Number of retranmission',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                    '04:00'
                ],

            },
            yAxis: {

                min: 0,
                max: 230000,
                tickPixelInterval: 35000

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + this.key}</p>
                <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },
            yAxis: {
                title: {
                    text: ' '
                }
            },

            series: [{
                name: 'Byte',
                data: [0, 0, 70000, 0, 70000, 0, 0, 70000, 0, 0, 70000, 0]
            }, {
                name: 'Retranmitted Bytes',
                data: [0, 0, 17500, 0, 17500, 0, 0, 17500, 0, 0, 17500, 0]
            }],

        })
    }
    function chart8() {
        //chart8
        new Highcharts.Chart({
            chart: {
                type: 'areaspline',
                renderTo: 'container8',
                // spacingTop: 60
            },
            title: {
                text: 'HGw Number of Clients',
                align: 'left',
            },
            exporting: { enabled: false },
            xAxis: {
                categories: [
                    '06:00',
                    '08:00',
                    '10:00',
                    '12:00',
                    '14:00',
                    '16:00',
                    '18:00',
                    '20:00',
                    '22:00',
                    '00:00',
                    '02:00',
                ],

            },
            yAxis: {
                title: {
                    text: 'No. of Clients'
                },
                min: 0,
                max: 20,
                tickPixelInterval: 5

            },
            tooltip: {
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                },
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX = point.plotX + 100;
                    var tooltipY = point.plotY + 30;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                },
                shadow: false,
                borderWidth: 0,
                backgroundColor: 'rgb(29, 58, 138)',
                shared: false,
                useHTML: true,
                formatter: function () {
                    return `<div style="text-align: center;height: 30px;width: 115px;"><p >${new Date().getDate() + ' ' + arrOfMonths[new Date().getMonth()]
                        + '  ' + new Date().getFullYear() + '   ' + this.key}</p>
            <p style="margin-top: -15px;">${Highcharts.numberFormat(this.y, 0)}</p></div>`
                },
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false
                    }
                },
            },
            series: [{
                showInLegend: false,
                data: [5, 12, 6, 10, 18, 10, 7, 11, 10, 14, 9]
            },]

        })
    }
    //chart9
    new Highcharts.Chart({
        chart: {
            renderTo: 'container9',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart10
    new Highcharts.Chart({
        chart: {
            renderTo: 'container10',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart11

    new Highcharts.Chart({
        chart: {
            renderTo: 'container11',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart12
    new Highcharts.Chart({
        chart: {
            renderTo: 'container12',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart13
    new Highcharts.Chart({
        chart: {
            renderTo: 'container13',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart14
    new Highcharts.Chart({
        chart: {
            renderTo: 'container14',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })


    //chart15
    new Highcharts.Chart({
        chart: {
            renderTo: 'container15',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })

    //chart16
    new Highcharts.Chart({
        chart: {
            renderTo: 'container16',
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        exporting: { enabled: false },
        title: {
            text: 'HGw Wifi Usage',
            style: { color: 'blue', fontSize: 14 },
            align: 'left',
            x: 0,
            y: 10
        },
        plotOptions: {
            pie: {
                center: [40, -10],
                dataLabels: {
                    enabled: false
                }
            },
            showInLegend: true

        },
        legend: {
            align: 'left',
            layout: 'vertical',
            verticalAlign: 'bottom',
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '12px'
            },
            x: -10,
            y: -10
        },
        series: [{
            innerSize: '50%',
            size: '250%',
            showInLegend: true,
            data: [
                { name: 'Low', y: 55.0 },
                { name: 'Medium', y: 31.0 },
                { name: 'High', y: 14.0 }
            ]
        }]
    })


    var day1 = document.querySelector('.day1'),
        day7 = document.querySelector('.day7'),
        containerForGraphs = $('.container-for-graphs'),
        containerForGraphsq = document.querySelectorAll('.container-for-graphs')

    day1.onclick = function (e) {
        if (e.target.closest('.day1') == day1) {
            day1.style.cssText = 'background-color:blue;color:white;'
            day7.style.cssText = 'background-color:none; color: blue;'
            containerForGraphs.empty()
            chart1()
            chart2()
            chart3()
            chart4()
            chart5()
            chart6()
            chart7()
            chart8()
        }
    }
    day7.onclick = function (e) {
        if (e.target.closest('.day7') == day7) {
            day7.style.cssText = 'background-color:blue;color:white;'
            day1.style.cssText = 'background-color:none; color: blue;'
            containerForGraphs.empty()
            chart1()
            chart2()
            chart3()
            chart4()
            chart5()
            chart6()
            chart7()
            chart8()
        }
    }


})

