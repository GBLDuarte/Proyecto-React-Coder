import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
import products from "../data/products";

const firebaseConfig = {
  apiKey: "AIzaSyCfWM7oTwVJ8wwxAZAb1PD-tBKJCC-VE2w",
  authDomain: "proyecto-react-coder-56d42.firebaseapp.com",
  projectId: "proyecto-react-coder-56d42",
  storageBucket: "proyecto-react-coder-56d42.appspot.com",
  messagingSenderId: "58928903339",
  appId: "1:58928903339:web:799eaa106805648cbaf3ee"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

// Traer todos los documentos (productos)
export default async function getProducts() {
  const colectionProducts = collection(DB, "celulares")
  const docSnapshot = await getDocs(colectionProducts)

  const documentsData = docSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

// Traer documento por ID

export async function getSingleProduct(idParam) {
  const docRef = doc(DB, "celulares", idParam);
  const docSnap = await getDoc(docRef);

  let itemData = docSnap.data();
  itemData.id = docSnap.id;

  return itemData;
}

// Traer documentos por categoria
export async function getProductsByCategory(categoryParams) {
  const collectionRef = collection(DB, "celulares");

  const queryCat = query(collectionRef, where("category", "==", categoryParams))
  const docSnapshot = await getDocs(queryCat)

  const documentsData = docSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  })
  return documentsData;
}

// Order
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

// Exportar todos los productos a firebase
export async function exportProductsToFirebase() {
  const collectionRef = collection(DB, "celulares")
  for (let item of products) {
    delete(item.id);
    let docOrder = await addDoc(collectionRef, item);
    console.log("creado " + docOrder.id);
  }
}