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
/*const container = document.getElementById('items');// нашли в разметке контейнер куда надо добавлять элементы
crypto.forEach(currency => {
  const myElement = document.createElement('div') // для каждого элемента массива создали div
  //const bitcoinContainer = document.createElement('div') // создали контейнер для BTC
  //const ethereumContainer = document.createElement('div') // создали контейнер для ETC
  //const litecoinContainer = document.createElement('div') // создали контейнер для LTC
  myElement.textContent = currency.name // положили в него название текущего элемента массива
  const myText = document.createElement('p') // для каждого элемента массива создали paragraph
  myText.textContent = currency.price // добавили этот созданный элемент внутрь ранее найденного контейнера
  const myBlock = document.createElement('div') //для каждого элемента массива создали div
  const elementTitle = document.createElement('h2')
  const bitcoinContainer = document.createElement('div')
  bitcoinContainer.classList.add('bitcoin')
  bitcoinContainer.append(elementTitle)
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
*/
const container = document.getElementById('items');
crypto.forEach(currency => {
  const myTitle = document.createElement('h2')
  myTitle.textContent = currency.name
  const myText = document.createElement('p')
  myText.textContent = currency.price
  const myBlock = document.createElement('div')
  myTitle.classList.add('element') // наложили class
  myText.classList.add('text') // наложили class
  myBlock.classList.add('block') // наложили class
  myBlock.style.width = currency.price / 10 + 'px'
  myBlock.style.height="15px"
  myBlock.classList.add(currency.name.toLowerCase())
  const blockContainer = document.createElement('div')
  blockContainer.classList.add(currency.name + 'Class')
  
  container.append(blockContainer)
  blockContainer.append(myTitle)
  blockContainer.append(myText)
  blockContainer.append(myBlock)
});




