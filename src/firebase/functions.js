import { app } from "./init";
// import from firebaase package
//  let check the firebase doc.
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
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
