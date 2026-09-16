// Load Firebase Auth
function loadFirebaseAuth(callback){
  if (window.firebase && window.firebase.auth) return callback();
  
  var s = document.createElement('script');
  s.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";
  s.onload = callback;
  document.head.appendChild(s);
}

// Initialize Firebase and Login
document.addEventListener("DOMContentLoaded", function(){

  loadFirebaseAuth(function(){

    try { 
      firebase.initializeApp(FIREBASE_CONFIG);
    } catch(e){}

    const auth = firebase.auth();

    window.doLogin = function(){
      const email = document.getElementById("email").value;
      const pass  = document.getElementById("password").value;

      auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
          // Redirect sesuai role
          if(email === "HMIF@example.com"){
            window.location.href = "index.html";
          } else if(email === "Kaprodi@example.com"){
            window.location.href = "index_kaprodi.html";
          } else if(email === "Kemahasiswaan@example.com"){
            window.location.href = "index_kemahasiswaan.html";
          } else {
            alert("Akun tidak dikenali!");
          }
        })
        .catch(err => {
          alert("Login gagal: " + err.message);
        });
    };

  });

});
