$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    // Обработчик для кнопки "Открыть"
    $("#open").click(function() {
        $("#envelope").removeClass("close").addClass("open");
        // Показываем кнопку программы
        $(".program-button").removeClass("hidden");
    });

    // Обработчик для кнопки "Закрыть"
    $("#reset").click(function() {
        $("#envelope").removeClass("open").addClass("close");
        // Скрываем кнопку программы
        $(".program-button").addClass("hidden");
    });

})
