$(function () {
    $('.user-choice').submit(function (event) {
        event.preventDefault();
        var program = $('#program').prop('selectedIndex');
        var education = $('#education').prop('selectedIndex');
        if (!$('logo').hasClass('gray')) {
            $('.logo').addClass('gray');
        }
        if (program == 0) {
            if (education == 0) {
                $('.scholarship, .k-12, .loan, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            } else if (education == 1) {
                $('.scholarship, .loan, .k-12').each(function () {
                    $(this).removeClass('gray');
                });
            } else {
                $('.scholarship, .loan, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            }
        } else if (program == 1) {
            if (education == 0) {
                $('.scholarship, .k-12, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            } else if (education == 1) {
                $('.scholarship, .k-12').each(function () {
                    $(this).removeClass('gray');
                });
            } else {
                $('.scholarship, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            }
        } else {
            if (education == 0) {
                $('.loan, .k-12, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            } else if (education == 1) {
                $('.loan, .k-12').each(function () {
                    $(this).removeClass('gray');
                });
            } else {
                $('.loan, .high-school').each(function () {
                    $(this).removeClass('gray');
                });
            }
        }
    });
});