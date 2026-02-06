import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where,addDoc} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import productos from "./Productos";

const firebaseConfig = {
    apiKey: "AIzaSyAqeIgsgFGIh-HH7VFxKYvBPnXID8CNqrU",
    authDomain: "gn--arg.firebaseapp.com",
    projectId: "gn--arg",
    storageBucket: "gn--arg.firebasestorage.app",
    messagingSenderId: "953434844195",
    appId: "1:953434844195:web:1f8433984519ad53edd596",
    measurementId: "G-EB33863W2W"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export async function getData() {
    const collectionRef = collection(db, 'productos');
    const productosSnapshot = await getDocs(collectionRef);
    return productosSnapshot.docs.map(item => {
        // Mapeamos el ID automático de Firebase al campo 'id'
        return { ...item.data(), id: item.id } 
    });
}

export async function getItemData(itemID) {
    const documentRef = doc(db, 'productos', itemID);
    const docSnapshot = await getDoc(documentRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getCategoryData(categoryID) {
    const collectionRef = collection(db, 'productos');
    const q = query(collectionRef, where('category', '==', categoryID));
    const productosSnapshot = await getDocs(q);
    
    const docs = productosSnapshot.docs;
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    });

    return dataDocs
    
}

// Guardamos datos del carrito
export async function createBuyOrder(buyOrderData) {
    const collectionRef = collection(db, 'compras');
    const docRef= await addDoc(collectionRef, buyOrderData);

    alert(`Compra realizada con exito! Tu ID de compra es: ${docRef.id}`);
    
}

export async function exportProductsToFirestore() {

    for (let item of productos) {
        delete item.id
        const docRef = await addDoc(collection(db, "productos"), item);

    }
    
}