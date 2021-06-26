const labels = document.querySelectorAll('.form_control label');
console.log(labels); 

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx*60}ms ;">${letter}</span>`)
    .join('')

    console.log(label.innerHTML);
})


const head =  document.getElementById('myheader');
const about = document.getElementById('about');



window.addEventListener('scroll',() => {
    // head.style.backgroundColor = "yellow";
    let aboutTop = about.getBoundingClientRect().top;
    console.log(aboutTop); 

    if(aboutTop <= 65){
        head.classList.remove("active-header");
    }
    else{
        head.classList.add("active-header");
    }
    // console.log();
})



/* ==== Menu Show ==== */
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu("nav-toggle","nav-menu")

/* ==== Active and Remove Menu ==== */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==== SCROLL REVEAL ANIMATION ==== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ==== Scroll Home ==== */
sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home_img',{delay:400})
sr.reveal('.home_social-icon',{interval:200})


/* ==== Scroll About ==== */
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay:200})
sr.reveal('.about_text',{delay:400})


/* ==== Scroll Skills ==== */
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay:200})
sr.reveal('.skills_data',{interval:200})
sr.reveal('.skills_img',{delay:200})

/* ==== Scroll Work ==== */
// sr.reveal('.work_img',{interval:200})

/* ==== Scroll Contact ==== */
sr.reveal('.contact_input',{interval:200})


