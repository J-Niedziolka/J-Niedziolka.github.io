$(function(){
    $("#add").on("click", function(){
        let calendar_content = $("#item").val();
        if (cal_item !== ''){
            let li_element = $("<li></li>").text(calendar_content);
            $(li_element).append("<button class='rem'>X</button>");
            $("#mylist").append(li_element);
            $("#item").val("");

        }
    });
})