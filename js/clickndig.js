$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});


/* WHOLESALE PAGE */
$('#reason').on('change', function(e) {
    e.preventDefault();
    console.log($(this).val());
    if($(this).val() === 'Other (Please Describe)') {
        console.log('yhe');
        $('#otherdesc').show();
    }
});
$('#othercheck').click(function(){
            if($(this).is(":checked")){
                $('#otherdesc1').show();
            }
            else if($(this).is(":not(:checked)")){
                $('#otherdesc1').hide();
            }
        });
