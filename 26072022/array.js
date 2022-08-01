



var images = ['pics/cars1.jpg', 'pics/car2.jpg', 'pics/car3.jpg', 'pics/car4.jpg', 'pics/car5.jpg',];
document.getElementById('amit').innerHTML = '<img id="image0" data-photo="0" src="' + images[0] + '" />';

var point = '';
for (var i = 0 ; i < images.length; i++) {
    point += '<span onclick=" showslide('+i+')" class=" divslide" > '+i+' </span>'
}
document.getElementById('point').innerHTML=point;

function showslide(ninja){
    document.getElementById('amit').innerHTML = '<img id="image' +(ninja)+'"  data-photo="' +(ninja)+ '" src="' + images[(ninja)] + '" />'
}

function next() {
    var currentimage = parseInt(document.getElementById('amit')[0].dataset.photo);
    document
    
    
}
function prev() {
    alert('prev');

}
