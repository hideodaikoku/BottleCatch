var item = false; // this is the default state of the item. You don't have it.
var button = ['/path to html file with button options','etc'];
var video = "path to first video";
var canvas = document.getElementById("video-space"); // use this variable to render the video in the html file
var choices = document.getElementById("button-space");// use this variable to render your buttons

var choice;

function main(){
    choice = document.getElementById("Option").value; //Keep a single choice variable 
    runLogic();
} 

function runlogic() {
    // you call everything from here
    // consider making a dropdown list or using radio buttons
    switch (choice){
        case 0:
        // go to loadVideo and pass filePath & choice
        break;
        case 1:
        // go to loadVideo and pass filePath & choice
        break;
        case 2:
        // go to loadVideo and pass filePath & choice
        break;
        case 3:
        // go to loadVideo and pass filePath & choice
        break;
        case 4:
        // go to loadVideo and pass filePath & choice
        break;
        default:
        // ask the user to do pick a valid choice
        return;
    }
}

function loadVideo(filePath, choice){
    // use provided filePath to change file path
    // use the number from the choice variable to change the valiue of the choice variable
}