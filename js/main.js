jQuery(document).ready(function(){
$("input.qty").val('0');

$(".incrementor").on("mousedown", function(event){
  event.preventDefault();
});

    $('.qtyplus').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    });
    $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    });

$('.yesNoWrapper span').click(function(e){
        e.preventDefault();
        var parentID = $(this).closest('div').attr('id');
        $("#" + parentID + " span").removeClass("yesNo_selected");
        $(this).addClass("yesNo_selected");
    });


});
