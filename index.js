function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if ( h == 0 ) {
h = 12;
}
if( h >= 12 ){
session = "PM";
}

if ( h > 12 ){
h = h - 12;
}
m = ( m < 10 ) ? m = "0" + m : m;
s = ( s < 10 ) ? s = "0" + s : s;

//putting time in one variable
var time = h + ":" + m + ":" + s + " " + session;
//putting time in our div
$('#clock').html(time);
//to change time in every seconds
setTimeout( showTime, 1000 );
}
showTime();
