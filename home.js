$ (Document).ready(function() {

    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

    function setCookie(name, value)
    {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

    function storeValues(form)  
    {
    setCookie("username", form.username.value);
    setCookie("amount", form.amount.value);
    return true;
}

    if(username = getCookie("username")) document.myForm.username.value = username;
    if(amount = getCookie("amount")) document.myForm.amount.value = amount;








































//  function setCookie( cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = "=" + cvalue + ";" + expires + ";path=/";
// }
// function getCookie(cvalue) {
//     var name = cvalue + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(value.length, c.length);
//         }
//     }
//     return "";
// }

// function checkCookie() {
//     var user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:", "");
//         if (user != "" && user != null) {
//             setCookie("username", user, 365);
//         }
//  }
// }
});
