// Smooth Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});
},{
threshold:0.2
});

sections.forEach(section=>{
section.classList.add("hidden");
observer.observe(section);
});

// Typing Effect

const text = "Java Full Stack Developer";
let i = 0;

function typing(){

const title = document.querySelector(".hero h3");

if(i < text.length){
title.innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}

}

document.querySelector(".hero h3").innerHTML="";
typing();

// Scroll To Top Button

const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.style.position="fixed";
btn.style.bottom="30px";
btn.style.right="30px";
btn.style.padding="15px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#38bdf8";
btn.style.cursor="pointer";
btn.style.display="none";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){
btn.style.display="block";
}else{
btn.style.display="none";
}

});

btn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};