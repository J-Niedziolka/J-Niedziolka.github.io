$(function(){
    /*
    <div id="result"></div>
    <script>
    // Check browser support
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    </script>*/
    if (typeof(Storage) !== "undefined") {
        $("#add").on("click", function(){
            //alert('breakpoint8');
            //let calendar_content = $("#item").val(); //tutaj sprawdzic
            if ($("#item").val() !== '') {
                //alert('breakpoint1');
                localStorage.setItem('calendarContent', $("#item").val());
                localStorage.setItem('detailsContent', $("#details").val());
                localStorage.setItem('priority', $("#priority").val());
                let li_element = $("<li class='pos'></li>").text(localStorage.getItem("calendarContent"));
                
                //alert('breakpoint2');
                $(li_element).append("<p id='fill'></p>");
                $(li_element).append("<button class='rem' id='but'>X</button>");
                $(li_element).addClass(localStorage.getItem('priority'));

                //alert('breakpoint3');
                $("fill").text()
                $("#mylist").append(li_element);
                $("#details").val("");
                $("#item").val("");  
            }

            //alert('breakpoint4');
            $(".rem").on("click", function(){
                //alert('breakpoint5');
                $(this).parent().fadeOut(1000);
                //$(this).parent().remove();  
            });
        });
      } 
      else {
        // Sorry! No Web Storage support..
        alert('przypał...');
      }


    /*$("#add").on("click", function(){
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
        });

        $(".rem").on("click", function(){
            $(this).parent().fadeOut(1000);
            //$(this).parent().remove();  
        });
    });*/
})