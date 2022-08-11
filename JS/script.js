const shapeItems = [
    {
        id: 1,
        categoria: 'SHAPE',
        name: 'Element Shape Skate Third Eye Schaar 8.5"',
        img: 'img/shape-element.jpg',
        price: '250,00',
        quantidade: 0
    },
    
    {
        id: 2,
        categoria: 'SHAPE',
        name: 'Element Shape Skate Seal 8"',
        img: 'img/shape-element-seal.jpg',
        price: '250,00',
        quantidade: 0
    },

    {
        id: 3,
        categoria: 'SHAPE',
        name: 'Toy Machine Shape Skate Collins Reaper 8.25"',
        img: 'img/shape-junkies.jpg',
        price: '250,00', 
        quantidade: 0
    },

    {
        id: 4,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: '250,00', 
        quantidade: 0
    },
    {
        id: 5,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: '250,00', 
        quantidade: 0
    }, 
    {
        id: 6,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: '250,00', 
        quantidade: 0
    },
    {
        id: 7,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: '250,00',
        quantidade: 0
    }, 
    {
        id: 8,
        categoria: 'SHAPE',
        name: 'Shape Hell Monster 8.25"',
        img: 'img/shape-monster.jpg',
        price: '250,00',
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
                <span class="span-preco">`+val.price+`</span> 
                <a key="`+val.id+`" ><button class="btn-addcart" id="btn-add">Adicionar</button></a>
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
            <br>
            <p>`+val.name+` | quantidade: `+val.quantidade+`</p>
            <br>
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