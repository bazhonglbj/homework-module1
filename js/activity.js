$(document).ready(function(){
    $("td").addClass("selectable");

    $(".selectable").click(function() {
        $(this).toggleClass("highlighted");
    });
});