$(document).ready(function () {

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
                        if ($("#name").val() == "") {
                            alert("Введите Имя держателя карты")
                        } else {
                            console.log("Номер карты:" + $("#num").val())
                            console.log("Срок действия карты:" + $("#MM").val() + "/" + $("#YY").val())
                            console.log("CCV:" + $("#CCV").val())
                            console.log("Имя держателя карты:" + $("#name").val())
                        }
                    }

                }
            }
        }
    })

})
