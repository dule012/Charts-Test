$(function () {
    var arrOfMac = ['58-90-77-22-75-5C', '5A-3D-30-13-8F-15', 'A3-43-AE-41-2E-D7', 'B6-06-F6-C7-D5-04', '9D-01-4A-A4-CB-91', 'D7-C4-71-4A-47-35', '0D-D3-6B-05-86-59']
        , arrOfContract = ['54867972', '31495080', '31495080', '79238775', '39531833', '33992438', '93603004'],
        arrOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'Jul', 'August', 'September', 'October', 'November', 'December'],
        arrOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    arrOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'],
        arrOfSumDaysInMonth = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 335, 365]

    firstJanuary = new Date('Jan 01 2018').getDay(),
        dateInCalendar1 = $('.date-in-calendar1')
    dateInCalendar2 = $('.date-in-calendar2'),
        leftCalendar = $('.left-calendar'),
        rightCalendar = $('.right-calendar'),
        month1 = $('.month1'),
        month2 = $('.month2'),
        widthOfDateInCalendar = 14.2, //from css,
        dateWrapper = document.querySelector('.date-wrapper'),
        date = document.querySelector('.date')

    //create Calendar
    for (var i = 0; i < 31; i++) {
        dateInCalendar1.append(`<div>${i + 1}</div>`)
        if (i < 28) {
            if (i == 0) {
                dateInCalendar2.append(`<div style="margin-left:${(arrOfDaysInMonth[0] % 7) * 14.2}%;">${i + 1}</div>`)
            } else {
                dateInCalendar2.append(`<div>${i + 1}</div>`)
            }
        }
    }
    function listinCalendar(newMonth1, newMonth2) {
        dateInCalendar1.empty()
        dateInCalendar2.empty()

        month1.text(newMonth1)
        for (var i = 0; i < arrOfDaysInMonth[arrOfMonths.indexOf(newMonth1)]; i++) {
            if (i == 0) {
                dateInCalendar1.append(`<div style="margin-left:${(arrOfSumDaysInMonth[arrOfMonths.indexOf(newMonth1) - 1] % 7) * widthOfDateInCalendar}%;">${i + 1}</div>`)
            } else {
                dateInCalendar1.append(`<div>${i + 1}</div>`)
            }
        }

        month2.text(newMonth2)
        for (var i = 0; i < arrOfDaysInMonth[arrOfMonths.indexOf(newMonth2)]; i++) {
            if (i == 0) {
                dateInCalendar2.append(`<div style="margin-left:${(arrOfSumDaysInMonth[arrOfMonths.indexOf(newMonth2) - 1] % 7) * widthOfDateInCalendar}%;">${i + 1}</div>`)
            } else {
                dateInCalendar2.append(`<div>${i + 1}</div>`)
            }
        }
        month1.text() == 'November' ? rightCalendar.css('display', 'none') : rightCalendar.css('display', 'block'), leftCalendar.css('display', 'block')
        month1.text() == 'January' ? leftCalendar.css('display', 'none') : leftCalendar.css('display', 'block')
    }
    rightCalendar.on('click', function () {
        var newMonth1 = arrOfMonths[arrOfMonths.indexOf(month1.text()) + 2]
        var newMonth2 = arrOfMonths[arrOfMonths.indexOf(month2.text()) + 2]
        listinCalendar(newMonth1, newMonth2)
    })
    leftCalendar.on('click', function () {
        var newMonth1 = arrOfMonths[arrOfMonths.indexOf(month1.text()) - 2]
        var newMonth2 = arrOfMonths[arrOfMonths.indexOf(month2.text()) - 2]
        listinCalendar(newMonth1, newMonth2)
    })
    date.onclick = function () {
        dateWrapper.style.display = 'block'
    }
    $(window).on('click', function (e) {
        if (e.target.closest('.date-wrapper') != false && e.target.closest('.date') != date) {
            dateWrapper.style.display = 'none'
        }
    })


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


    var resetFilters = $('.reset'),
        viewingData = $('.viewing-data'),
        days = $('.days-wrapper'),
        search = $('.search'),
        filter = $('.filter'),
        apply = $('.apply'),
        macAddress = $('.mac-address'),
        contractId = $('.contract-id')
    resetFilters.on('click', function () {
        viewingData.css('display', 'none')
        days.css('display', 'none')
        filter.css('display', 'block')
        search.css('display', 'block')
        apply.css('display', 'block')
        $(this).css('display', 'none')
    })
    apply.on('click', function () {
        if (inputMac.val() != '' && inputContract.val() != '') {

            viewingData.css('display', 'block')
            macAddress.text(inputMac.val())
            contractId.text(inputContract.val())
            days.css('display', 'block')
            resetFilters.css('display', 'block')
            filter.css('display', 'none')
            search.css('display', 'none')
            $(this).css('display', 'none')
            inputMac.val('')
            inputContract.val('')
        }
    })

})
/*<div class="col-12 row tables">

                <div class="col-12 col-md-6">

                    <div class="card-color">
                        <p class="bigger-then-others">Overall Status</p>
                        <div class="colored-div orange">Medium</div>
                    </div>

                    <div class="card-color">
                        <p>RSS Status</p>
                        <div class="colored-div red">Bad</div>
                    </div>

                    <div class="card-color">
                        <p>Clinet RSS Status</p>
                        <div class="colored-div orange">Medium</div>
                    </div>

                    <div class="card-color">
                        <p>Sticky Client Status</p>
                        <div class="colored-div green">Good</div>
                    </div>
                    <div class="card-color-wrapper">
                        <div class="card-color">
                            <p>Interference Status - overall</p>
                            <div class="colored-div orange">Medium</div>
                        </div>
                        <div class="card-color">
                            <p>Interference Status Co - Channel</p>
                            <div class="colored-div green">Good</div>
                        </div>
                        <div class="card-color">
                            <p>Interference Status - Ajdacent</p>
                            <div class="colored-div red">Bad</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">

                </div>
            </div> */