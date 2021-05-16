const url = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async ()=> {

    const resp = await fetch( url );
    
    if (! resp.ok ) return alert ('No se pudo realizar la petición');

    const chiste = await resp.json();

    return chiste;
}

export {
    obtenerChiste
}