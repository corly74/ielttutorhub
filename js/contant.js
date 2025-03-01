 // contact us form.
 $(function () {

    // prevent hide again.
    $('#collapseContactUs').on('hide.bs.collapse', function (e) {
        e.preventDefault();
    });
    window.scrollToPos = function (id) {
        if (typeof $('#' + id).offset().top == 'undefined') return;
        // console.log($('#'+id).offset().top);



        // Loading google recaptcha on-demand.
        var _gr = document.createElement('script');
        _gr.onload = function () {
            window.grecaptcha.ready(function () {
                console.log('recaptcha ready!');
            });
        };
        _gr.src = 'https://www.google.com/recaptcha/api.js?render=6LfqXcUUAAAAAKo-s4047w0_nifG8y6-tAIbb9WP';
        document.head.append(_gr);



        $('#promo-banner-modal').modal('hide');
        $('html, body').animate({ scrollTop: $('#' + id).offset().top }, '150', 'easeInOutQuad');
    }

    var preventDlClick = false;
    $('#contactUsForm').submit(function (e) {
        e.preventDefault();

        if (!preventDlClick) { preventDlClick = true; } else { return; }

        console.log(e.target);
        console.log($(e.target).serialize());


        window.grecaptcha.execute('6LfqXcUUAAAAAKo-s4047w0_nifG8y6-tAIbb9WP', { action: 'homepage' }).then(function (token) {
            $('#g-recaptcha-response').val(token);
            $('#refer').val(encodeURIComponent(window.location.href));
            console.log(token);
            $.ajax({
                url: '../getContactUsForm.php',
                type: 'post',
                dataType: 'json',
                data: $('#contactUsForm').serialize(),
                success: function (data) {
                    preventDlClick = false;
                    if (data.status == 'OK') {
                        alert('感謝您的留言，我們會在24小時內盡快與您連繫的！\n\nWe already got your information, we\'ll contact you in 24 hours.');
                    }
                    else if (data.status == 'ERR02') {
                        alert('請確定表單內容是否都有填寫正確？\n\nPlease check your information are correct or not.');
                    }
                    else {
                        alert('訊息傳送失敗！' + data.status);
                    }
                }
            });


            console.log(token);
        });

    });

});
