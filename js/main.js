$(document).ready(function () {
    let tab = $('.tabs .tab');
    let tabAnnual = $('.tabs .tab.tab-annual');
    let tabMonthly = $('.tabs .tab.tab-monthly');
    let annual = $('.wrap-package-annual');
    let monthly = $('.wrap-package-monthly');
    $(tab).click(function () {
        $(this).prev().removeClass('active');
        $(this).next().removeClass('active');
        $(this).addClass('active');
        if ($(tabAnnual).hasClass('active')) {
            $(annual).css('display', 'flex')
        } else {
            $(annual).css('display', 'none')
        }
        if ($(tabMonthly).hasClass('active')) {
            $(monthly).css('display', 'flex')
        } else {
            $(monthly).css('display', 'none')
        }
    });

    let searchTabs = $('.search-menu li');
    $(searchTabs).click(function () {
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        $(this).addClass('active');
    });


    // CALCULATOR

    let planPrice = $('.standart-table .plan-price-value');
    // let planPriceVal = $('.standart-table .plan-price-value');
    let planPriceNv = $('.standart-table .plan-price-value');
    let newMaunthlyCustomers = $('.standart-table .new-mounth-customers-value');
    let monthlyChurn = $('.standart-table .monthly-churn-value').val();
    let oldLtv = $('.standart-table .ltv');
    let oldLtvVal = $('.standart-table .ltv').text();
    let oldCac = $('.standart-table .cac-value');
    let unitEconomics = $('.standart-table .unit-economics').text();
    let unitEconomicValue = $('.standart-table .unit-economics');
    let inputRate = $('.input-rate').val();
    let resultUnitEconomics = $('.standart-table .unit-economics');
    let resultNewMounthlyCustomers = $('.new-mounth-customers-expected');
    let increase = $('.increase');
    let increaseResult = $('.increase-result');
    let newPlanPrice = $('.new-plane-price');
    let expectedLtc = $('.expectedLtc');



    $('.wrap-calc input').change(function () {
        let planPrice = $('.standart-table .plan-price-value');
        let monthlyChurn = $('.standart-table .monthly-churn-value');
        let oldCac = $('.cac-value').val();
        let resultUnitEconomics = $('.standart-table .unit-economics');
        let newMaunthlyCustomers = $('.standart-table .new-mounth-customers-value');
        let inputRate = $('.input-rate').val();
        let increase = $('.increase');
        let increaseResult = $('.increase-result');
        let newPlanPrice = $('.new-plane-price');
        let expectedLtc = $('.expectedLtc');
        let cacResult = $('.cac-result');
        let expectedUnit = $('.expected-unit');
        let resultcalc1 = $('.result-calc-1');
        let resultcalc2 = $('.result-calc-2');
        let superResult = $('.super-result');
        let superResultPersent = $('.super-persent');




        let returnLTV = $(planPrice).val() / $(monthlyChurn).val() / 10;
        if ($(planPrice).val() == "" || $(monthlyChurn).val() == "") {
            $(oldLtv).text() == "3,000";
        } else {
            $(oldLtv).text(`$${(returnLTV * 100) / 100}`);
        }



        let unitEconomics = (returnLTV / oldCac);
        $(resultUnitEconomics).text(`$${unitEconomics.toFixed(2)}`);

        let newMounthlyCostomers = newMaunthlyCustomers.val() * (1 - (inputRate / 100));

        $(resultNewMounthlyCustomers).text(`${newMounthlyCostomers.toFixed(2)}`);

        let newChurn = monthlyChurn.val() * (1 + (increase.val() / 100));
        $(increaseResult).text(`${newChurn.toFixed(2)}%`);
        // increaseResult.toFixed(1);

        let ltcResult = newPlanPrice.val() / (newChurn / 100);
        $(expectedLtc).text(`${ltcResult.toFixed(2)}`);

        let cacResultQ = oldCac / (1 - (inputRate / 100));

        cacResult.text(`$${cacResultQ.toFixed(2)}`);

        let resultExpectedUnit = ltcResult / (cacResultQ * 10);

        $(expectedUnit).text(`${resultExpectedUnit.toFixed(2)}%`);

        // console.log(ltcResult / cacResultQ);

        let revenueGeneratedAnnually1 = $(planPrice).val() * newMaunthlyCustomers.val() * 12 / $(monthlyChurn).val();
        $(resultcalc1).text(`$${revenueGeneratedAnnually1.toFixed(2)}`);


        let revenueGeneratedAnnually2 = newPlanPrice.val() * resultNewMounthlyCustomers.text() * 12 / monthlyChurn.val();
        $(resultcalc2).text(`$${revenueGeneratedAnnually2.toFixed(2)}`);


        let generateNewPricing = revenueGeneratedAnnually2 - revenueGeneratedAnnually1;
        $(superResult).text(`$${generateNewPricing.toFixed(2)}`);

        let superPersent = generateNewPricing / revenueGeneratedAnnually1;

        $(superResultPersent).text(`${superPersent.toFixed(2)}%`);
    });

    // BURGER

    $('.mobile-menu').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('open-mobile');
    })

    // SWIPER

    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 3,
        spaceBetween: 67,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            991: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    });

    let calcTextBtn = $('.calculate-section .btn')
    if ($(window).width() <= '767'){
        $(calcTextBtn).text('Calculate your new price')
    }

    $('.starter-package').magnificPopup({
        items: {
            src: '#package-starter'
        }
    });

    $('.adcanced-package').magnificPopup({
        items: {
            src: '#package-advanced'
        }
    });

    $('.growth-package').magnificPopup({
        items: {
            src: '#package-growth'
        }
    });

    $('.enterprise-package').magnificPopup({
        items: {
            src: '#package-enterprise'
        }
    });

    $('.full-package').magnificPopup({
        items: {
            src: '#package-full'
        }
    });
});