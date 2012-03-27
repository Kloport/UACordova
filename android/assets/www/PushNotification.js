function PushNotification() {
}

PushNotification.prototype.registerCallback = function(successCallback, failureCallback) {
     return PhoneGap.exec(
            successCallback,           // called when signature capture is successful
            failureCallback,           // called when signature capture encounters an error
            'PushNotificationPlugin',  // Tell PhoneGap that we want to run "PushNotificationPlugin"
            'registerCallback',        // Tell the plugin the action we want to perform
            []);                       // List of arguments to the plugin
};

PushNotification.prototype.notificationCallback = function (json) {
	console.log('notificationCallback');
    var data = JSON.parse(json);
    navigator.notification.alert(data.msg);
};

PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("pushNotification", new PushNotification());
});

