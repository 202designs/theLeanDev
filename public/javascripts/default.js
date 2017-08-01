$(document).ready(function() {
    $('select').material_select();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    getListData();
  });

function getListData(){
    $.getJSON("https://apex.oracle.com/pls/apex/simulsys/contacts/contactList/", function(data){
            //alert('data loaded');

            var items = (data.items);

            for (var i=0; i < items.length; i++) {
            console.log(data);
            var contactName = items[i].name;
            var contactEmail = items[i].email;
            var contactId    = items[i].contact_id;

            $("ul.contactsList").append('<li class="collection-item">'+contactName+ '    '+contactEmail+'</li>'  );

          }
        });}

          $("#createContact").click(function(){
            var contactName = $('#contactName').val();
            var contactEmail = $('#contactEmail').val();
            var restUrl = "https://apex.oracle.com/pls/apex/simulsys/contacts/createContacts/";
                 $.ajax({url: restUrl,
                         type: 'post',
                         headers: {"NAME": contactName,
                                   "EMAIL": contactEmail}
                                              });

            $('#contactName').val('');
            $('#contactEmail').val('');
            //*$( "ul.ulcontacts" ).empty();
            //getListData();
            $("ul.contactsList").prepend('<li class="collection-item">'+contactName+ '    '+contactEmail+'</li>'  );

            });