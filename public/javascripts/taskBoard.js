$(document).ready(function() {
    //$(body).fadeIn(5000);
    $('select').material_select();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(".button-work").sideNav();
    Sortable.create(toDo, { group: "board"});
    Sortable.create(doing, { group: "board"});
    Sortable.create(review, { group: "board"});
    Sortable.create(complete, { group: "board"});


  });

  $('.collection-item').click(function(){$('.task-form').removeClass('hide');});
  //$('#cancel').click(function(){$('.task-form').addClass('hide');});
  $('#cancel').click(function(){alert('click');});
