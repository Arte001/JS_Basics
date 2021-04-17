console.log('You are at ' +window.location)

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('.coolClass.mine');
console.log(allBySelector,firstBySelector);

const quest = prompt('что хотите написать на странице?');
byId.innerHTML = quest;
byId.innerHTML = "<h2>Hello I am id div</h2>";