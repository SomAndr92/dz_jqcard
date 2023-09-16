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
        if ($("#num").val() == "") {
            alert("Введите номер карты")
        } else {
            if ($("#MM").val() == "") {
                alert("Введите месяц")
            } else {
                if ($("#YY").val() == "") {
                    alert("Введите год")
                } else {
                    if ($("#CCV").val() == "") {
                        alert("Введите CCV")
                    } else {
                        if ($("#num").val() == "") {
                            alert("Введите Имя держателя карты")
                        } else {
                            console.log("Номер карты:" + $("#name").val())
                            console.log("Срок действия карты:" + $("#MM").val() + "/" + $("#YY").val())
                        }
                    }

                }
            }
        }
    })
})


/*
        $(".tt").toggle(300);
        $("div").addClass("hehe");
        console.log($(".tt").val())*/

/*
$(".tt").on("change", function () {
    console.log($(this).val())
})
$(".btn1").on("click", function () {
    $("div").addClass("bac");
})*/


