const btnPersonas = document.getElementsByTagName('button')[0];

const btnGatitos = document.getElementsByTagName('button')[1];

console.log(btnPersonas)
console.log(btnGatitos)

btnPersonas.addEventListener('click', () => {
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += `<h1 class="title">Este es un titulo</h1>
  <img src="https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/11/15/breaking_bad.jpg?itok=rSTyV3du" alt="Walter White">`
  for (let i = 0; i < names1.length; i++) {
    // console.log(names1[i])
    document.getElementById('root').innerHTML += `<p>${names1[i]}</p>`
  }
})

btnGatitos.addEventListener('click', () => {
  document.getElementById('root').innerHTML = '';
  for (let i = 0; i < names2.length; i++) {
    // console.log(names1[i])
    document.getElementById('root').innerHTML += `<p>${names2[i]}</p>`
  }
})