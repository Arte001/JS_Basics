let crypto = [
  {
    name: "Bitcoin",price: 1388.37},
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

/*crypto.forEach(function(currency, index, cArr) {
  console.log(currency);
})

crypto.forEach(currency => console.log(currency.name));

let name = document.createElement('div');
document.body.innerHTML = name;
document.getElementById(name).style.backgroundColor = "#000000";
*/
const container = document.getElementById('items');// нашли в разметке контейнер куда надо добавлять элементы
crypto.forEach(currency => {
  const myElement = document.createElement('div') // для каждого элемента массива создали div
  myElement.textContent = currency.name // положили в него название текущего элемента массива
  const myText = document.createElement('p') // для каждого элемента массива создали paragraph
  myText.textContent = currency.price // добавили этот созданный элемент внутрь ранее найденного контейнера
  const myBlock = document.createElement('div') //для каждого элемента массива создали div
  myElement.classList.add('element') // наложили class
  myText.classList.add('text') // наложили class
  myBlock.classList.add('block') // наложили class
  container.append(myElement) // добавили этот созданный элемент внутрь ранее найденного контейнера
  container.append(myText) // добавили этот созданный элемент внутрь ранее найденного контейнера
  container.append(myBlock) // добавили этот созданный элемент внутрь ранее найденного контейнера
  myBlock.style.width = currency.price / 10 + 'px' //назначили ширину
  myBlock.style.height="15px" // назначили высоту
  myBlock.classList.add(currency.name.toLowerCase()) //устанавливаем css класс для каждой шкалы
});


