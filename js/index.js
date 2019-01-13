let item="";
function WakeUp() {
    let place= "";
    let sleep = document.getElementById("lol").value;
    if(sleep === "Try to sleep") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML=place;

    }


    else if(sleep === "Go anyways") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML=place;

    }
}
function Gypsy() {
    let place= "";
    let erik = document.getElementById("lol1").value;
    if (erik === "Stop and listen") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML=place;
    }

    else if(erik === "RUN AWAY") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML=place;

    }
}
function Bottle() {
    let place= "";
    let water = document.getElementById( "lol2").value;
    if (water === "Throw bottle on street") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML=place;
    }

    else if (water === "Throw bottle into the trash can") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML = place;
        item = "false"
    }
    else if (water === "Keep bottle")  {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML = place;
        item = "true"
    }
}
function Monster() {
    let place = "";
    let minsung = document.getElementById("lol3")
    if (item === "true") {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML = place;
    } else (item === "false")
    {
        place = "<iframe width=\"768\" height=\"432\" src=\"https://www.youtube.com/embed/ZwDvSS58WoU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        document.getElementById("videoplace").innerHTML = place;
    }

}