const menuHamburguer = document.getElementById('menuHamburguer')
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('menu-active')
})
const menuPrimmary = document.querySelectorAll('.menu-primary ul li a')
menuPrimmary.forEach(element => {
    element.addEventListener('click',()=>{ 
        menuHamburguer.classList.toggle('active')
        document.querySelector('.menu').classList.toggle('menu-active')  
    })
});
const menuSecudary = document.querySelectorAll('.menu-secondary ul li a')
menuSecudary.forEach(element => {
    element.addEventListener('click',()=>{ 
        menuHamburguer.classList.toggle('active')
        document.querySelector('.menu').classList.toggle('menu-active')  
    })
});

const inputFocus = document.querySelectorAll('.inputText input')
const labelFocus = document.querySelectorAll('.inputText')
inputFocus.forEach((input, index) => {
    input.addEventListener('focus', () => {
        labelFocus[index].classList.add('focus')
    })

    input.addEventListener('blur', () => {
        if (input.value == '') {
            labelFocus[index].classList.remove('focus')
        }
    })
})

const cores = ['green', 'red', 'blue', 'pink', 'orange', 'purple']
const students = document.querySelector('.gridStudents')
for (let x = 1; x <= 30; x++) {
    students.innerHTML += `<div><img src="./assets/studentsphoto/img${x}.png" alt="img${x}"></div>`
}
const coresAleatorias = document.querySelectorAll('.gridStudents div')
coresAleatorias.forEach((student, index) => {
    student.style.background = cores[index % cores.length]
})


const logos = document.querySelector('.photoLogos')
for (let x = 1; x <= 9; x++) {
    logos.innerHTML += `<img src="./assets/logophotos/logo${x}.png" alt="logo${x}">`
}

window.addEventListener('scroll',()=>{
    
    if(window.scrollY > 150){
        document.querySelector('#notify a').style.backgroundColor = '#FF3366'
    }else{
        document.querySelector('#notify a').style.backgroundColor = ''
    }
})

const questions = document.querySelectorAll('.faq')
questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active')
        })
})

const aModules = document.querySelector('.gridModules')
aModules.addEventListener('click',()=>{
    aModules.classList.toggle('active')
})

const mouse = document.querySelectorAll('.mouse');

function animateMouse(mouse) {
    
    let xPosPercent = Math.random() * 100;
    let yPosPercent = Math.random() * 100;
    let xSpeed = (Math.random() - 0.5) * 0.5; 
    let ySpeed = (Math.random() - 0.5) * 0.5;

    function moveMouse() {
        xPosPercent += xSpeed;
        yPosPercent += ySpeed;

        mouse.style.left = `${xPosPercent}%`;
        mouse.style.top = `${yPosPercent}%`;
        if (xPosPercent > 100 || xPosPercent < 0) {
            xSpeed = -xSpeed;
            xPosPercent = Math.max(0, Math.min(xPosPercent, 100));
        }

        if (yPosPercent > 100 || yPosPercent < 0) {
            ySpeed = -ySpeed;
            yPosPercent = Math.max(0, Math.min(yPosPercent, 100));
        }
        
        requestAnimationFrame(moveMouse);
    }

    
    requestAnimationFrame(moveMouse);
}

mouse.forEach(mouse => {
    animateMouse(mouse);
});


