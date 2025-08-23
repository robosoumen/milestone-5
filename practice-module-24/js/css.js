// const sectionAll = document.getElementsByTagName('section');
// const sectionAll = document.querySelectorAll('section');
// // console.log(sectionAll)
// for(const sect of sectionAll){
//     console.log(sect.innerText)
//     sect.style.backgroundColor = 'lightblue'
//     sect.style.border = '20px'
//     sect.style.margin = '30px'
// }

// const section = document.getElementsByTagName('section');
// for(const sect of section){
//     sect.classList.add('title')
// }

// create element : -
const newChild = document.createElement('li');
newChild.innerText = 'footballer the year'

//find the parent

const parentList = document.getElementById('new')
parentList.appendChild(newChild)