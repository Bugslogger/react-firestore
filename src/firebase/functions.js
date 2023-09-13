import { app } from "./init";
// import from firebaase package
//  let check the firebase doc.
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(app);

/**
 *
 * @param {String} CollectionName
 * @param {Object{}} body
 * @returns
 *
 *
 * Here `CollectionName` is the name of collection or you can say it is
 * parent inside this parent all data is stored.
 *
 * `Body` is the data you want to store in firebase firestore
 *
 * let me show you how it looks like.
 *
 */
export async function SendToFirebase(CollectionName, body) {
  const response = await addDoc(collection(db, CollectionName), body);

  return response;
}

/**
 *
 * @param {String} CollectionName
 * @param {String} Id
 * @param {Object} body
 *
 * In previous function Id was automatically ganerated by firebase.
 * but we can also set our own id.
 * Now let see how we can do that.
 * let head to the doc.
 *
 * Now let check if collection id is empty or not
 * if empty then do not execute firebase functions
 *
 * I forgot "db" here
 *
 */
export const SendDataWithCustomID = async (CollectionName, Id, body) => {
  if (!collection || !Id || !body) return { message: "Parameter is missing." };

  const response = await setDoc(doc(db, CollectionName, Id), body);
  return response;
};

/**
 *
 * @param {string} CollectionName
 * @returns
 *
 * here we need name of collection
 * it will get all data of a given collection.
 *
 */
export const GetAllData = async (CollectionName) => {
  if (!CollectionName) return; // if collection name is empty then terminate code here itself.
  const res = await getDocs(collection(db, CollectionName));
  return res;
};

/**
 *
 * @param {String} CollectionName
 * @param {String} ID
 * @returns
 *
 * to get a data from using specific ID.
 * we have to need ID and collection name.
 *
 */
export async function GetDataWithCustomID(CollectionName, ID) {
  if (!CollectionName || !ID) return { message: "parameters are missing." };

  const singleDataWithId = await getDoc(doc(db, CollectionName, ID));
  return singleDataWithId;
}

/**
 *
 * @param {String} collectionname
 * @param {String} id
 * @param {Object} body
 */
export async function UpdateData(collectionname, id, body) {
  if (!collectionname || !id || !body) return;
  const response = await updateDoc(doc(db, collectionname, id), body); //db was missing
  return response;
}

/**
 *
 * @param {String} collectionname
 * @param {String} id
 */
export async function DeleteFromFirestore(collectionname, id) {
  return await deleteDoc(doc(db, collectionname, id));
}
