const body = document.body;
let olList, btnOtro, liChiste;

const crearChiste = () => {
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group">

        </ol>
        `

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
    };

// const eventos = ()=>{

//     const btnOtro = document.querySelectorAll('.btn btn-primary') ;
//     // const olList = document.querySelectorAll('mt-2 list-group');
    
//     btnOtro.addEventListener('click', async ()=>{

//     const resp = await fetch( url );
//     if (!resp.ok ) return alert ('No se pudo realizar la petición');
//     const chiste = await resp.json();
//     return chiste;

//     });   

// };

const eventos = ()=>{

    olList  = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    
    
    btnOtro.addEventListener('click', async ()=>{

        const olItem = document.createElement('li');
        olItem.setAttribute("class", "list-group-item");
        
        const url = 'https://api.chucknorris.io/jokes/random';
        const resp = await fetch( url );
        if (!resp.ok ) return alert ('No se pudo realizar la petición');
        const chiste = await resp.json();
        
        olItem.append(`${chiste.value}`);
        olList.append(olItem);
    
    });   

};

export const init = ()=>{
    crearChiste();
    eventos()
    
}
