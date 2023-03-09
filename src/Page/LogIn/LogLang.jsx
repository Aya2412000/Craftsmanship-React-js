// //handel language in Navbar components
// var H = document.getElementById("H");
// var erfa = document.getElementById("erfa");
// var home = document.getElementById("home");
// var services = document.getElementById("services");
// var aboutUs = document.getElementById("aboutUs");
// var contact = document.getElementById("contact");
// var login = document.getElementById("login");
// var emailIn = document.getElementById("emailIn");
// var passwordIn = document.getElementById("passwordIn");
// var remember = document.getElementById("remember");
// var login2 = document.getElementById("login2");
// // handel button language..
// var arabic = document.getElementById("ar");
// var english = document.getElementById("en");
// arabic.onclick = () => {
//   setLang("arabic");
//   document.body.style.direction = "rtl";
//   localStorage.setItem("Lang", "arabic");
// };
// english.onclick = () => {
//   setLang("english");
//   document.body.style.direction = "ltr";
//   localStorage.setItem("Lang", "english");
// };
// window.onload = () => {
//   setLang(localStorage.getItem("Lang"));
// };
// export default function setLang(getLang) {
//   if (getLang === "arabic") {
//     // handel language in Navbar components
//     H.innerHTML = "حِــ";
//     erfa.innerHTML = "رفـه";
//     home.innerHTML = "الرئيسية";
//     services.innerHTML = "الخدمات";
//     aboutUs.innerHTML = "عَـنَّــا";
//     contact.innerHTML = "تواصل معـنا";
//     login.innerHTML = "تسجيل الدخول";
//     emailIn.innerHTML.replace = "البريد الإلكتروني";
//     passwordIn.innerHTML = "كلمة السر";
//     remember.innerHTML = "تذكرنــي";
//     login2.innerHTML = "تسجيل الدخول";
//     login2.style.margin = "0 5rem";
//   } else if (getLang === "english") {
//     login.innerHTML = "LOGIN";
//     // handel language in Navbar components
//     H.innerHTML = "H";
//     erfa.innerHTML = " erfa";
//     home.innerHTML = "Home";
//     services.innerHTML = "Services";
//     aboutUs.innerHTML = "About";
//     contact.innerHTML = "Contact Us";
//     emailIn.innerHTML = "Email";
//     passwordIn.innerHTML = "Password";
//     remember.innerHTML = "remember me ?";
//     login2.innerHTML = "LOGIN";
//     login2.style.margin = "0 8rem";
//   }
// }
