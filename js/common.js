$(function () {
    var res = template("messageScript", {message:'密码输入错误',show:false});
    var message = document.getElementById('message')
    message.innerHTML = res;
})

function messageText(message) {
    var res = template("messageScript", {message:message,show:true});
    var messageBox = document.getElementById('message')
    messageBox.innerHTML = res;
    setTimeout(function () {
        var ress = template("messageScript", {message:message,show:false});
        messageBox.innerHTML = ress;
    },1000)
}
