
function addfont() {

    var fontSz = document.getElementById('fontSz').value;
    var fontclr = document.getElementById('fontclr').value;
    var arcClr = document.getElementById('arcClr').value;

    fontSz = fontSz == '' ? '35px' : fontSz;
    fontclr = fontclr == '' ? 'pink' : fontclr;
    arcClr = arcClr == '' ? 'orange' : arcClr;
    var tshirtImg = document.getElementById('tshirtImg');
    var tshirtContext = tshirtImg.getContext('2d');    
    var tshirtbg = new Image();
    tshirtbg.src = 'https://cpimg.tistatic.com/07346550/b/4/Mens-Solid-Color-Plain-T-Shirt-w410.jpg';
    tshirtbg.onload = function () {
        tshirtContext.drawImage(tshirtbg, 0, 0);
        tshirtContext.font = fontSz + 'px Arial';

        tshirtContext.strokeStyle = fontclr;
        tshirtContext.strokeText('Amit', 220, 120);

        tshirtContext.arc(210, 265, 60, 0, 2 * Math.PI);
        tshirtContext.fillStyle = arcClr;
        tshirtContext.strokeStyle = 'pink';

        tshirtContext.fill();
        tshirtContext.stroke();


    }

}
addfont();






