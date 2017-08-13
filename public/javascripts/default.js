$(document).ready(function() {
    $('select').material_select();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

  });

  $("#sendContact").click(function(){
    var contactName = $('#contactName').val();
    var contactEmail = $('#contactEmail').val();
    var contactPhone = $('#contactPhone').val();
    //var clientName  = $('#clientName').val();
    var contactComments = $('#contactDescription').val();

    var restUrl = "https://simulsys.com/apex/simulsys/client/createClientContact/";
         $.ajax({url: restUrl,
                 type: 'post',
                 headers: {"CONTACT_NAME": contactName,
                           "CONTACT_EMAIL": contactEmail,
                           "CONTACT_PHONE": contactPhone,
                           "CONTACT_COMMENTS": contactComments
                           }
                                      });

    $('#contactName').val('');
    $('#contactEmail').val('');
    $('#contactPhone').val('');
    $('#contactDescription').val('');
    $('#sendContact').addClass('disabled');


    });
    // Function that validates email address through a regular expression.
    $( "#contactEmail" ).change(function() {
    var valEmail = $("#contactEmail").val();
    var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (expression.test(valEmail)) {
    $('#sendContact').removeClass('disabled');

    }
    else {
    $('#sendContact').addClass('disabled');
    Materialize.toast('Email Not Valid', 4000, 'rounded')
    }
  });
