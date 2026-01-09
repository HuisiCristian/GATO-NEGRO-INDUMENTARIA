import productos from "./Productos" 

const miPromise =new Promise ((resolve,reject) =>{})

function getData(){
    const promiseData = new Promise ((resolve,reject) =>{

        setTimeout(() => { resolve(productos)},1500);
    });
    return promiseData
    
}

export function getItemData(itemID){
    const promiseData = new Promise ((resolve,reject) =>{

        const itemRequest = productos.find(item => String(item.id) === itemID)
        setTimeout(() => resolve(itemRequest),1000);
    });
    return promiseData
}

export function getCategoryData(categoryID){
    return new Promise ((resolve,reject) =>{
        const itemsCategory = productos.filter(item => item.category === categoryID)
        setTimeout(() => resolve(itemsCategory),1000);
    })
}

export default getData

