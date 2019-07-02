"use strict";

(function(){
    $(document).ready(function(){

        $(".burger-button").on("click", function(){
            let id = $(this).attr("burger");

            $ajax(`/api/burgers/${id}`{
                type: "PUT",
            }).then(function(){
                location.reload();
            });
        });


    $(".create-form").on("submit", function(){

        let newBurger ={
            burger_name: $("#new-burger").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        });
    });
    });
})();