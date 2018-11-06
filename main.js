$(function () {
    var arrOfMac = ['58-90-77-22-75-5C', '5A-3D-30-13-8F-15', 'A3-43-AE-41-2E-D7', 'B6-06-F6-C7-D5-04', '9D-01-4A-A4-CB-91', 'D7-C4-71-4A-47-35', '0D-D3-6B-05-86-59']
        , arrOfContract = ['54867972', '31495080', '31495080', '79238775', '39531833', '33992438', '93603004'],

        inputMac = $('input[name=mac]'),
        inputContract = $('input[name=contract]'),
        macWrapper = $('.mac-wrapper'),
        contractWrapper = $('.contract-wrapper')


    inputMac.on('keyup', function () {
        macWrapper.empty()
        var macValue = inputMac.val().toLowerCase()
        for (var i = 0; i < arrOfMac.length; i++) {
            if (arrOfMac[i].toLowerCase().indexOf(macValue) != -1) {
                macWrapper.css('display', 'block')
                macWrapper.append(`<div class="mac-div">${arrOfMac[i]}</div>`)
            }
        }

        $('.mac-div').on('click', function (e) {
            inputMac.val(e.target.textContent)
            inputContract.val(arrOfContract[arrOfMac.indexOf(e.target.textContent)])
            macWrapper.css('display', 'none')
        })

        if (macValue == '') {
            macWrapper.css('display', 'none')
            inputContract.val('')
        }
    })

    inputContract.on('keyup', function () {
        contractWrapper.empty()
        var contractValue = inputContract.val().toLowerCase()
        for (var i = 0; i < arrOfContract.length; i++) {
            if (arrOfContract[i].indexOf(contractValue) != -1) {
                contractWrapper.css('display', 'block')
                contractWrapper.append(`<div class="contract-div">${arrOfContract[i]}</div>`)
            }
        }

        $('.contract-div').on('click', function (e) {
            inputContract.val(e.target.textContent)
            inputMac.val(arrOfMac[arrOfContract.indexOf(e.target.textContent)])
            contractWrapper.css('display', 'none')
        })

        if (inputContract.val() == '') {
            contractWrapper.css('display', 'none')
            inputMac.val('')
        }
    })


    var chart = $('.chart')
    Highcharts.chart('container', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'HGw Status',
            align: 'left',
            x: 50,
            y: 20
        },

        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
            }
        },

        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });


})
