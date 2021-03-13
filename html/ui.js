$(function () {
    $(".container").hide();
    function display(bool) {
        if (bool) {
            $(".container").fadeIn(1000);
            $(".system-actions").hide();
        } else {
            $(".container").fadeOut(500);
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://bros-blackmarket/exit', JSON.stringify({}));
            return
        }
    };
});
