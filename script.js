$(function(){
    $("#add").on("click", function(){
        let calendar_content = $("#item").val();
        if (calendar_content !== ''){
            let li_element = $("<li></li>").text(calendar_content);
            $(li_element).append("<button class='rem' id='but'>X</button>");
            $("#mylist").append(li_element);
            $("#item").val("");


        }

        $(".rem").on("click", function(){
            $(this).parent().animate({
                
            }, 1000);
        });

        $(".rem").on("click", function(){
            $(this).parent().fadeOut(1000);
            //$(this).parent().remove();  
        });
    });
})