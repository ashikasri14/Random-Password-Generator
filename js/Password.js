function generate() {

    var length = document.getElementById("length").value;
    var password = "";

    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < length; i++) {

        var randomNumber = Math.floor(Math.random() * characters.length);
        password = password + characters[randomNumber];

    }

    document.getElementById("password").value = password;
}
