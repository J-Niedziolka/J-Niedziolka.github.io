$(function(){
    $("#add").on("click", function(){
        let calendar_content = $("#item").val();
        if (calendar_content !== ''){
            let li_element = $("<li class='pos'></li>").text(calendar_content);
            $(li_element).append("<p id='fill'></p>");
            $(li_element).append("<button class='rem' id='but'>X</button>");
            $(li_element).addClass($("#priority").val());

            $("#fill").text($("#details").val());
            
            $("#mylist").append(li_element);
            $("#details").val("");
            $("#item").val("");
        }

        /*$(".rem").on("click", function(){
            $(this).parent().animate({
                filter: "drop-shadow(8px 8px 10px gray)"
            }, 1000);
        });*/

        $(".rem").on("click", function(){
            $(this).parent().fadeOut(1000);
            //$(this).parent().remove();  
        });
    });
})