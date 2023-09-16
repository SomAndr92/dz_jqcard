$(document).ready(function () {

    /*$.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/charmander",
        success: function (data) {
            console.log(data)
        }
    });*/


    $(".btn").on("click", function () {
        /*alert("привет")*/

        $(".tt").toggle(300);
        $("div").addClass("hehe");
        console.log($(".tt").val())
    })
    $(".tt").on("change", function () {
        console.log($(this).val())
    })
    $(".btn1").on("click", function () {
        $("div").addClass("bac");
    })
})