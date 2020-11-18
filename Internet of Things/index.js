$(function(){

    var song = new Audio;
    song.src = "alarm/alarm.mp3";

    var counter = 0;
    var cookies = 20;

    setInterval(function(){

    var endpoint = "http://www.beyondthepines.co/pnl/read_all.php";
    var data = $.getJSON(endpoint, function(result){


    if($('#allowCookies').is(":checked")){

        if(result.returned[0].mag < 1){
            $('.open-notification').hide();
            $('.text').text('The Cookie Jar is open');
            song.pause();
            
            counter ++;
            $('.jar').text(counter + "times");
            
            cookies = cookies - 1;

            if(cookies <= 0){
                $('.text').text('Sorry, you have no more cookies :(');
            } else {
                $('.cookies').text(cookies + "left");
            }

        } else {
            $('.open-notification').hide();
            $('.text').text('The Cookie Jar is closed');
            song.pause();
        }

    } else {

        if(result.returned[0].mag < 1){
            $('.open-notification').show();
            $('.text').hide();
            song.play();

            counter ++;
            $('.jar').text(counter + "times");

            cookies = cookies - 1;

            if(cookies <= 0){
                $('.text').text('Sorry, you have no more cookies :(');
            } else {
                $('.cookies').text(cookies + "left");
            }
            
        } else {
            $('.open-notification').hide();
            $('.text').text('The Cookie Jar is closed');
            song.pause();
        }

    }

    });

}, 1000);

});
