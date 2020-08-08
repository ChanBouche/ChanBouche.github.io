document.addEventListener("DOMContentLoaded", function(){
    var copyrightContainer = document.getElementById("foot");
    copyrightContainer.innerHTML = "<p>&copy;" + new Date().getFullYear()  + " Carson Fence LLC. all rights reserved.</p>";
})