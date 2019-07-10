function displayDate() {
    document.getElementById("time").innerHTML = Date();
}

function changePicture() {
    var newPic = '<p><h3><em>Things I Love</em><h/3></p> <img class="image" scr="https://i.ytimg.com/vi/4NSmfHDqHh4/hqdefault.jpg" alt="A picture of a girl taking a picture" ></img>';
    document.getElementById("pictures").innerHTML = newPic;
}
