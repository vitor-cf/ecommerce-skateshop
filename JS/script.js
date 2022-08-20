const shapeItems = [
    {
        id: 0,
        categoria: 'SHAPE',
        name: 'Third Eye Schaar 8.5"',
        img: 'img/shape-element.jpg',
        price: 259.99,
        quantidade: 0
    },
    
    {
        id: 1,
        categoria: 'SHAPE',
        name: 'Element Shape Skate Seal 8"',
        img: 'img/shape-element-seal.jpg',
        price: 259.99,
        quantidade: 0
    },

    {
        id: 2,
        categoria: 'SHAPE',
        name: 'Collins Reaper 8.25"',
        img: 'img/shape-junkies.jpg',
        price: 259.99, 
        quantidade: 0
    },

    {
        id: 3,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: 259.99, 
        quantidade: 0
    },
    

]

inicializarLista = () => {

    var containerShape = document.getElementById('produtos');
    shapeItems.map((val) => {
        containerShape.innerHTML += `
        
        <div class="item-caixa-produtos">
                <img src="`+val.img+`" alt="" class="img-produto">
                <span class="span-categoria">`+val.categoria+`</span> 
                <span class="span-info">`+val.name+`</span>
                <span class="span-preco">`+val.price+`</span> 
                <a key="`+val.id+`" ><button class="btn-addcart" id="btn-add">Adicionar</button></a>
            </div> 
             
        
        
        `
    })
}  

inicializarLista(); 

/* Função atualizar carrinho */
atualizarCarrinho = (product) => {
    console.log('teste:', product)
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ""; 
    let modalCarrinho = document.getElementById('modal-carrinho');
    
    shapeItems.map((val) => {
        if(val.quantidade > 0 ) {
            modalCarrinho.style.display = 'block';
            containerCarrinho.innerHTML += `
            <div class="carrinho-style">
            <img src="`+val.img+`" alt=""> 
            <span class="span-info">`+val.name+`</span>
            <span class="span-preco">R$ `+val.price+`</span>
            <button class="btn-close-item">x</button>
            </div>
            
            `
        }
    })
}


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        shapeItems[key].quantidade++;
        atualizarCarrinho();
        return false;
        
    })
} 


// function fechar modal 

closeModal = () => {
    let modalCarrinho = document.getElementById('modal-carrinho'); 

    modalCarrinho.style.display = 'none';
    
    
} 

let btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', closeModal)