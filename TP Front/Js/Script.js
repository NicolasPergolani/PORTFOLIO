let footer = `<div class="footer-contenido">
<ul class="social">  
    <li>
        <a href="https://www.linkedin.com/in/nicolaspergolani/" target="_blank">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
    </li>
    <li>
        <a href="https://github.com/NicolasPergolani" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
        </a>
    </li>
</ul>
</div>
<div class="bottom">
<p> Copyright & Design<span style="color: #4da6ff"> Pergolani Nicolas</span></p>
</div>
<a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Freepik -
Flaticon</a>`;

document.getElementById("idFooter").innerHTML = footer

let header = `  <a href="Index.html"> <div class="logo">Nicolas Pergolani Portfolio</div></a> 
<div class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
<nav class="nav-bar">
<ul>
<li>
    <a href="Index.html">Index</a>
</li>
<li>
    <a href="softwareKnowledge.html">Software Knowledge</a>
</li>
<li>
    <a href="workExperience.html">Work Experience</a>
</li>
<li>
    <a href="aboutMe.html">About Me</a>
</li>
</ul>
</nav>`

document.getElementById("idHeader").innerHTML = header;

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

}
