
window.onload =  function() {
	// alert("Your unique browser fingerprint is: " + window.glob);
    document.getElementById("errWrapper").style.visibility = "hidden";
};



jQuery("#sendToMax").click(function() {
   
    var typedText = document.getElementById("thisWillGoToMax").value;
    sendToMax(typedText);
});
var pubnub = PUBNUB.init({
    publish_key: 'demo',
    subscribe_key: 'demo'
});

function sendToMax(form) {
    console.log("form in sendToMax:" + form);
    pubnub.publish({
        channel: 'f1bm9hbo3',
        message: { "theWebSiteSays": jQuery("#thisWillGoToMax").val() }
    });
    jQuery("#thisWillGoToMax").val('');
}
pubnub.subscribe({
    channel: "f1bm9hbo3", // CONNECT TO THIS CHANNEL.
    error: function() { // LOST CONNECTION (auto reconnects)
        // alert("Connection Lost. Will auto-reconnect when Online.")
        
        setTimeout(function(){ document.getElementById("errWrapper").style.color = "red"; document.getElementById("errorMessage").style.visibility = "visible"; console.log("error");}, 0);
        setTimeout(function(){ document.getElementById("errWrapper").style.visibility = "hidden"; console.log("error end");}, 5000);
    },
    callback: function(fromMax) { // RECEIVED A MESSAGE.
        if (fromMax.value != undefined) {
            jQuery("#jmPubNubDisplay").text(fromMax.value);
        }
    }
})


if (window.DeviceMotionEvent == undefined) {
    document.getElementById("no").style.display = "block";
    document.getElementById("yes").style.display = "none";
} 
