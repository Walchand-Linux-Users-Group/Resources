let username = 'wlug'
function setCookie(name, value, age) {
       let maxAge = "max-age="+ age;
       document.cookie = name + "=" + value + ";" + maxAge + ";path=/";
}
setCookie(username,2,5)