const menuHamburguer = document.getElementById('menuHamburguer')
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active')
})

const inputFocus = document.querySelectorAll('.inputText input')
const labelFocus = document.querySelectorAll('.inputText')
inputFocus.forEach((input, index) => {
    input.addEventListener('focus', () => {
        labelFocus.forEach((label, i) => {
            if (inputFocus[i].value == '') {
                label.classList.remove('focus')
            }
        })
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