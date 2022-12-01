import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'

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
  // 1.A referenciamos nuestra coleccion 
  const colectionProducts = collection(DB, "celulares")
  // 1.B solicitamos todos los documentos
  const docSnapshot = await getDocs(colectionProducts)

  const documentsData = docSnapshot.docs.map((doc) => {
    let docDataWithId = doc.data();
    docDataWithId.id = doc.id;
    return docDataWithId;
  })
  return documentsData;
}

// Traer documento por ID

export async function getSingleProduct(idParam) {
  // Referencia un solo documento mediante parametros (database, nombre de coleccion, id)
  const docRef = doc(DB, "celulares", idParam);
  // Solicitamos el documento con los parametros deseados
  const docSnap = await getDoc(docRef);

  let itemData = docSnap.data();

  return itemData;
}

// Traer documentos por categoria

