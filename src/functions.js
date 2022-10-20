function randomDigit(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
 };

 function getRandomPassword(n) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/!$%&()=?*+";
    
    let password = "";
    for (let i = 0; i < n; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    };
    
    return password;
 };

 export function chislo() {
    let a = Number(document.getElementById("ot").value);
    let b = Number(document.getElementById("do").value);
    let result = randomDigit(a, b);
    document.getElementById("num").textContent = result;
 };

 export function rezparol() {
    let n = document.getElementById("dlina").value;
    n === "" ? n = 8 : n = Number(n);
    let result = getRandomPassword(n);
    document.getElementById("psw").textContent = result;
 };

 export function useParol(){
    return getRandomPassword(8);
 };