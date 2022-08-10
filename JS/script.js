//funcoes auxiliares ou uteis 
const seleciona = (elemento) => document.querySelector(elemento)

// Preencher com imagens e informações do SHAPE, utilizando OBJECT.


const preencheDadosShape = (shapeItem, item, index) => {
    shapeItem.setAttribute('data-key',index)
    shapeItem.querySelector('.shape-item--img img').src = item.img
    shapeItem.querySelector('.shape-item--categoria').innerHTML = item.categoria
    shapeItem.querySelector('.shape-item--name').innerHTML = item.name
    shapeItem.querySelector('.shape-item--price').innerHTML = item.price
} 

// MAPEAR shapeJSON para gerar lista de shapes 

shapeJson.map((item, index) => {
    // console.log(item);
    let shapeItem = document.querySelector('.models .shape-item').cloneNode(true)
    // console.log(shapeItem);
    seleciona('.shape-area').append(shapeItem)

    // preencher os dados de cada shape
    preencheDadosShape(shapeItem, item, index)
})
