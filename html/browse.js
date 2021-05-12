$(function() {
    $(".firefox-browser").hide();
    $(".system-actions").hide();
    $(".blackmarket-browser").hide();
    // FIREFOX

    $("#firefox-button").click(function() {
        $(".firefox-browser").hide(0);
        $(".firefox-browser").fadeIn(100);
        $(".system-actions").hide();
        $(".blackmarket-browser").hide();

        dragElement(document.getElementById("firefox-browser"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("firefox-header")) {
            document.getElementById("firefox-header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        }
    });
    $("#close-firefox").click(function() {
        $(".firefox-browser").fadeOut(100);
    });
    $("#close-firefox-2").click(function() {
        $(".firefox-browser").fadeOut(100);
    });
    $("#system-actions-trigger").click(function() {
        $(".system-actions").fadeIn();
    });
    $("#close-actions-menu").click(function() {
        $(".system-actions").fadeOut();
    });

    function LoadingPurchase(){
      alert('HELLO')
    }

    // blackmarket

    $("#blackmarket-trigger").click(function() {
      $(".firefox-browser").hide();
        $(".blackmarket-browser").fadeIn(300);
        dragElement(document.getElementById("blackmarket-browser"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("blackmarket-browser")) {
            document.getElementById("blackmarket-browser").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        }
    });
    $("#blackmarket-info-close").click(function() {
        $(".blackmarket-info").hide();
    });
    $("#blackmarket-close").click(function() {
        $(".blackmarket-browser").fadeOut(100);
    });
    $("#close-blackmarket-2").click(function() {
        $(".blackmarket-browser").fadeOut(100);
    });
    $("#last-page").click(function() {
        $(".firefox-browser").show();
        $(".system-actions").hide();
        $(".blackmarket-browser").hide();
    });

    $("#firefox-refresh").click(function() {
        $(".firefox-browser").fadeOut(50);
        $(".firefox-browser").fadeIn(50);
    });
    
    $("#blackmarket-refresh").click(function() {
        $(".blackmarket-browser").fadeOut(50);
        $(".blackmarket-browser").fadeIn(50);
    });

    // CLOSE COMPLETE UI
    function close(){
      $(".blackmarket-body").delay(2500).fadeIn();
      $("#processTXT").delay(2500).fadeOut();
      $(".loader").delay(2500).fadeOut();
      setTimeout(() => {  
        $.post('http://bros-blackmarket/exit', JSON.stringify({}));
       }, 2900);

    }
    
    $("#close").click(function () {
      $.post('http://bros-blackmarket/exit', JSON.stringify({}));
      return
    });

    // Blackmarket ORDERS

    $("#blackmarket-1-order").click(function() {
      $('.blackmarket-body').hide();
      $('#processTXT').show();
      $(".loader").show();
      close()
      $.post('http://bros-blackmarket/order', JSON.stringify({
          item: "WEAPON_SWITCHBLADE",
          price: 250,
          amount: 1
      }))
    });
    $("#blackmarket-2-order").click(function() {
      $('.blackmarket-body').hide();
      $('#processTXT').show();
      $(".loader").show();
      close()
      $.post('http://bros-blackmarket/order', JSON.stringify({
          item: "WEAPON_GUSENBERG",
          price: 22500,
          amount: 1
      }))
    });
    $("#blackmarket-3-order").click(function() {
      $('.blackmarket-body').hide();
      $('#processTXT').show();
      $(".loader").show();
      close()
      $.post('http://bros-blackmarket/order', JSON.stringify({
          item: "WEAPON_HEAVYSNIPER",
          price: 57500,
          amount: 1
      }))
    });
    $("#blackmarket-4-order").click(function() {
      $('.blackmarket-body').hide();
      $('#processTXT').show();
      $(".loader").show();
      close()
      $.post('http://bros-blackmarket/order', JSON.stringify({
          item: "WEAPON_MACHINEPISTOL",
          price: 2750,
          amount: 1
      }))
    });
    $("#blackmarket-5-order").click(function() {
      $('.blackmarket-body').hide();
      $('#processTXT').show();
      $(".loader").show();
      close()
      $.post('http://bros-blackmarket/order', JSON.stringify({
          item: "WEAPON_MARKSMANRIFLE",
          price: 67500,
          amount: 1
      }))
    });
});

// DATE SPAN
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Pazar";
weekday[1] = "Pazartesi";
weekday[2] = "Salı";
weekday[3] = "Çarşamba";
weekday[4] = "Perşembe";
weekday[5] = "Cuma";
weekday[6] = "Cumartesi";
var n = weekday[d.getDay()];
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes()
$("#current-time").html(time);
$("#current-day").html(n);