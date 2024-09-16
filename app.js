// Import Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwPKfzLSLvGSE7m2yDBZAS5AroslD2hw",
  authDomain: "shegdg-de059.firebaseapp.com",
  databaseURL: "https://shegdg-de059-default-rtdb.firebaseio.com",
  projectId: "shegdg-de059",
  storageBucket: "shegdg-de059.appspot.com",
  messagingSenderId: "755226615294",
  appId: "1:755226615294:web:6abcde9f78eb47cc5db4af",
  measurementId: "G-LHTWB5G5Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById('articleForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const imageUrl = document.getElementById('imageUrl').value;

  // Reference the database and push the new article
  const articlesRef = ref(database, 'articles');
  push(articlesRef, {
    title: title,
    content: content,
    imageUrl: imageUrl
  }).then(() => {
    document.getElementById('message').innerText = 'تم نشر المقالة بنجاح!';
  }).catch((error) => {
    document.getElementById('message').innerText = 'حدث خطأ: ' + error.message;
  });
});