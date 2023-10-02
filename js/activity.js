$(document).ready(function(){
    $("td").not(":contains('Not Available')").addClass("selectable");

    $(".selectable").click(function() {
        var content = $(this).text();
        $(this).toggleClass("highlighted");

        if ($(this).hasClass("highlighted")){
            $('#displaySelected').css("visibility","visible");
            $('#displaySelected').css("margin-top","2-em");
            $('#result').append("<p>"+ content + "</p>");
        } else {
            $('#result p:contains('+ content +')').remove();

            if($('#result').has('p').length==false){
                $('#displaySelected').css("visibility","hidden");
                $('#displaySelected').css("margin-top","0");
            }
        }
    });
});