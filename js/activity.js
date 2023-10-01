$(document).ready(function(){
    $("td").not(":contains('Not Available')").addClass("selectable");

    $(".selectable").click(function() {
        $(this).toggleClass("highlighted");
    });
});