import React from "react";
import Header from "../components/Nav/Header";

function Home() {

    var modal = document.getElementById("myModal");
    
    // get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // click the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }
    
    // click on (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // click anywhere outside of the modal to close 
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

return (
<Header />
}

export default Home;