// src/firebase.js
const firebaseConfig = {
    apiKey: "DUMMY_API_KEY",
    authDomain: "DUMMY_AUTH_DOMAIN",
    projectId: "DUMMY_PROJECT_ID"
  };
  
  export const signInWithEmailAndPassword = (email, password) => {
    // Dummy authentication
    if (email === 'admin@123.com' && password === 'admin@123') {
      localStorage.setItem('isLoggedIn', 'true');
      return Promise.resolve(true);
    }
    return Promise.reject(new Error('Invalid credentials'));
  };
  
  export const signOut = () => {
    localStorage.removeItem('isLoggedIn');
  };
  
  export default firebaseConfig;