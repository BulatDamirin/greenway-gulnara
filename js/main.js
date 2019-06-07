$('#header').css('height', $(window).height());
$(window).on('resize', function() {
    $('#header').css('height', $(window).height());
});
new WOW({
    offset: 0,
    mobile: false
}).init();

if ($(window).width() <= 528) {
    let speed = 200;
    $('.fadeInUp').each(function(elem){
        $( this ).data('wow-delay', 0);
    });
}

$(document).on('DOMContentLoaded', function() {

    function validateEmail() {
      let mail = $('#email').val();
      if (mail == '') return 'error1';
      let pattern  = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
      if (mail.search(pattern) != 0) return 'error2';
    }

    function ajaxRequest() {
      let form = `email=${$('#email').val()}&name=${$('#name').val()}`;
      let xhr = $.ajax({
        type: "POST",
        url: "mail.php",
        cache: false,
        data: form,
        xhr: function(){
          var xhr = $.ajaxSettings.xhr(); // получаем объект XMLHttpRequest
          xhr.upload.addEventListener('progress', function(evt){ // добавляем обработчик события progress (onprogress)
            if(evt.lengthComputable) { // если известно количество байт
              // высчитываем процент загруженного
              var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
              // устанавливаем значение в атрибут value тега <progress>
              // и это же значение альтернативным текстом для браузеров, не поддерживающих <progress>
              $('.ajax-load').css('width', percentComplete + '%');
            }
          }, false);
          return xhr;
        },
        success: function(){
          $('.ajax-load').css('width', '0');
          $('#email').val('');
          $('#name').val('');
        }
      });

    }

    let k = 0;

    $('#email').blur(function() {
      if (k == 1) {
        let answer = validateEmail();
        if (answer == 'error1') {
          $('#email').css('border', '2px solid ' + errorColor);
          $('.error-text').text('Поле email не должно быть пустым');
        }
        else if (answer == 'error2') {
          $('#email').css('border', '2px solid ' + errorColor);
          $('.error-text').text('Неправильный формат email');
        }
        else {
          $('#email').css('border', '2px solid #C1E18C');
          $('.error-text').text('');
        }
      }
    });

    let errorColor = '#DB726C';

    $('#sub').on('click', function(e){
      e.preventDefault();
      let answer = validateEmail();
      if (answer == 'error1') {
        $('#email').css('border', '2px solid ' + errorColor);
        $('.error-text').text('Поле email не должно быть пустым');
        k = 1;
      }
      else if (answer == 'error2') {
        $('#email').css('border', '2px solid ' + errorColor);
        $('.error-text').text('Неправильный формат email');
        k = 1
      }
      else {
        $('#email').css('border', '2px solid #C1E18C');
        $('.error-text').text('');
        ajaxRequest();
      }
    });

    

    let speed = 700;
    if ($(window).width() <= 528) {
        speed = 200;
    }

    $('.slides').slick({
        dots: true,
        speed: speed,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 528,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('[data-href=".contact"]').click(function() {
      let e = $($(this).data('href')).offset().top;
      $('html, body').animate({scrollTop: e}, 1500);
    });

    $('.slick-arrow').empty();
    $('.slick-prev').html('<img class="arrow-svg" src="img/back.svg">');
    $('.slick-next').html('<img class="arrow-svg" src="img/next.svg">');
    $('.slick-dots button').empty();

});


