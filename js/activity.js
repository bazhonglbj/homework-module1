$(document).ready(function(){
    $("td").not(":contains('Not Available')").addClass("selectable");

    $(".selectable").click(function() {
        var content = $(this).text();
        var colIndex = $(this).index();
        var header = $("table thead th").eq(colIndex).text();
        var displayText = content + " at " + header;

        $(this).toggleClass("highlighted");

        if ($(this).hasClass("highlighted")){
            $('#displaySelected').css("visibility","visible");
            $('#displaySelected').css("margin-top","2-em");
            $('#result').append("<p>"+ displayText + "</p>");
        } else {
            $('#result p:contains('+ displayText +')').remove();

            if($('#result').has('p').length==false){
                $('#displaySelected').css("visibility","hidden");
                $('#displaySelected').css("margin-top","0");
            }
        }
    });
});