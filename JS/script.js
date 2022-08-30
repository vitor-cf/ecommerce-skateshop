const shapeItems = [
    {
        id: 0,
        categoria: 'Shape',
        name: 'Third Eye Schaar 8.5"',
        img: 'img/shape-element.jpg',
        price: 259.99,
        quantidade: 0
    },
    
    {
        id: 1,
        categoria: 'Shape',
        name: 'Element Shape Skate Seal 8"',
        img: 'img/shape-element-seal.jpg',
        price: 259.99,
        quantidade: 0
    },

    {
        id: 2,
        categoria: 'Shape',
        name: 'Collins Reaper 8.25"',
        img: 'img/shape-junkies.jpg',
        price: 259.99, 
        quantidade: 0
    },

    {
        id: 3,
        categoria: 'Shape',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: 259.99, 
        quantidade: 0
    },
    {
        id: 4,
        categoria: 'Shape',
        name: 'Girl Mike Mo 93 8.25"',
        img: 'img/shape-girl.jpg',
        price: 259.99, 
        quantidade: 0
    },
    {
        id: 4,
        categoria: 'Shape',
        name: 'Girl Mike Mo 93 8.25"',
        img: 'img/shape-girl.jpg',
        price: 259.99, 
        quantidade: 0
    },
    {
        id: 4,
        categoria: 'Shape',
        name: 'Girl Mike Mo 93 8.25"',
        img: 'img/shape-girl.jpg',
        price: 259.99, 
        quantidade: 0
    },
    {
        id: 4,
        categoria: 'Shape',
        name: 'Girl Mike Mo 93 8.25"',
        img: 'img/shape-girl.jpg',
        price: 259.99, 
        quantidade: 0
    }
    

]

inicializarLista = () => {

    var containerShape = document.getElementById('produtos');
    shapeItems.map((val) => {
        containerShape.innerHTML += `
        
        <div class="item-caixa-produtos">
                <img src="`+val.img+`" alt="" class="img-produto">
                <span class="span-categoria">`+val.categoria+`</span> 
                <span class="span-info">`+val.name+`</span>
                <span class="span-preco">R$ `+val.price+`</span> 
                
                <a key="`+val.id+`" ><button class="btn-addcart">Adicionar</button></a>
            </div> 
             
        
        
        `
    })
}  

inicializarLista(); 

/* Função atualizar carrinho */
atualizarCarrinho = () => {
    
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ""; 
    let modalCarrinho = document.getElementById('modal-carrinho');
    
    shapeItems.map((val) => {
        if(val.quantidade > 0 ) {
            modalCarrinho.style.display = 'block';
            containerCarrinho.innerHTML += `
            <div class="carrinho-style">
            <img src="`+val.img+`" alt=""> 
            <div class="price-name-column">
            <span class="span-info">`+val.name+`</span>
            </div>
            
            
            <div class="price-box">
            <p>Preço</p>
            <p class="price-style" >`+val.price+`</p>
            </div>
            </div>
            
            
            ` 
        
        }
    })
} 

// BOTAO FECHAR PEDIDO
// var quantItem = 1;

// function mudarQuantidade () {
//      let spaceQuant = document.getElementById('qnt-box-item');
//      quantItem++
//      spaceQuant.innerHTML = quantItem 
    


// } 

//  function btnRemove () {
//      let spaceQuant = document.getElementById('qnt-box-item');
//      if (quantItem > 1) {
//         quantItem--
//          spaceQuant.innerHTML = quantItem
//      }
    
//  }

// const btnAdd = document.getElementById('btn-add-item');
// btnAdd.addEventListener('click', mudarQuantidade); 

//  const btnTeste = document.getElementById('btn-remove-item');
//  btnTeste.addEventListener('click', btnRemove)

// Ao clicar em Adicionar adiciona o item no carrinho
var links = document.querySelectorAll('a');
var btnUm = document.getElementsByTagName('button');

for(var i = 0; i < links.length; i++) {
    
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        shapeItems[key].quantidade++;
        atualizarCarrinho();
        return false;
       
    })
} 



// Botoes no modal Add e remove


// function fechar modal 

closeModal = () => {
    let modalCarrinho = document.getElementById('modal-carrinho'); 

    modalCarrinho.style.display = 'none';
    
    
} 

let btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', closeModal)