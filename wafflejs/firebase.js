  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDga_vBPSDAP1qLCw33nZK_VgpfgkJMShk",
    authDomain: "beige-analytics.firebaseapp.com",
    projectId: "beige-analytics",
    storageBucket: "beige-analytics.firebasestorage.app",
    messagingSenderId: "302434092493",
    appId: "1:302434092493:web:256440896860f7f1f6b084",
    measurementId: "G-238JM0DGW2"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);