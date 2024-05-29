// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAjHEttd6DTRYI2yyrPFX4zjUzW1Sl3NiI",
//   authDomain: "wheel-travels.firebaseapp.com",
//   projectId: "wheel-travels",
//   storageBucket: "wheel-travels.appspot.com",
//   messagingSenderId: "979145175140",
//   appId: "1:979145175140:web:5381e7f3db8630c05a2f71",
//   measurementId: "G-QL7Z5R9FR7"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDa42mpThOvenMRvNekl8Gq6U1NkNJTAms",
//   authDomain: "wheels-53400.firebaseapp.com",
//   projectId: "wheels-53400",
//   storageBucket: "wheels-53400.appspot.com",
//   messagingSenderId: "351317837310",
//   appId: "1:351317837310:web:edfba335cbfb746accecaf"
// };
// Initialize Firebase


const firebaseConfig = {
  apiKey: "AIzaSyCXd376DyCqXZLlR6Jzri8w4lVNq39J2PM",
  authDomain: "wheeltravels-e5607.firebaseapp.com",
  projectId: "wheeltravels-e5607",
  storageBucket: "wheeltravels-e5607.appspot.com",
  messagingSenderId: "366041215601",
  appId: "1:366041215601:web:2e009ef932f409dd94e1d0"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



