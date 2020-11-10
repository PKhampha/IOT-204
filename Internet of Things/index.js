$(function(){

    var song = new Audio;
    song.src = "alarm/alarm.mp3";

    setInterval(function(){

    var endpoint = "http://www.beyondthepines.co/pnl/read_all.php";
    var data = $.getJSON(endpoint, function(result){
        

        if(result.returned[0].mag < 1){
            $('.toggle').addClass('open-notification-button');
            $('.toggle').removeClass('closed-notification');
            $('.text').text('COOKIE JAR IS OPEN');
            song.play();
        } else {
            $('.toggle').removeClass('open-notification-button');
            $('.toggle').addClass('closed-notification');
            $('.text').text('COOKIE JAR IS CLOSED');
            song.pause();
        }
    });

}, 1000);

});