# QRPhisher | Browser-based QRLJacking Attack Tool.

## How It Works

![QRPhisher](https://www.shieldoma.com/media/qrphisher-how-it-works.png)

## How to Use as a Quick Console Payload

1. Visit the target website.
2. Copy and paste the content of `source/main.js` inside the console tab (DevTools).

## How to Use It as a Bookmarklet

1. Add the content of `source/bookmarklet.js` as a new bookmarklet called: **QRPhisher**.
2. Click on it after opening the target website and change the needed settings.

## Default Settings

At the top of the plugin source code, you will find this settings JSON object. You can add as many services as you want, but remember that this is optional. You can always set up the attack details directly within the widget.

```json
{
    "default_server_url": "SERVER_URL_HERE",
    "services": [
        {
            "title": "WhatsApp", 
            "selector": ".landing-main canvas[role=\"img\"]",
            "reload_selector": ".Jht5u",
            "domain_match": ["web.whatsapp.com"]
        },
        {
            "title": "Telegram", 
            "selector": ".qr-container:first-of-type svg:first-of-type", 
            "reload_selector": "",
            "domain_match": ["web.telegram.org"]
        }
    ]
}
```

- `default_server_url`: the server URL used to save the QR code.
- `services`: the list of services, which can be expanded as needed. For each service object:
    - `title`: service name.
    - `selector`: main QR code HTML element, which you can obtain using the inspect element tool.
    - `reload_selector`: some services add a button to reload the QR code after inactivity or after a specific period of time, used to automatically reload the QR code, which you can obtain using the inspect element tool.
    - `domain_match`: **optional**, used to automatically choose the "Selector" and "Reload Selector" if the target website matches any domain in the list.


## QRPhisher Showcase Demo (Online)

Visit our online platform at [QRPhisher Showcase](https://qr.shieldoma.com/).
- Create a new attack
- Edit the page using the available options
- Test the attack with another browser or device

![QRPhisher Showcase](https://www.shieldoma.com/media/qrphisher-showcase.png)

## Full POC Video (Tested on web.whatsapp.com)

[![POC](https://www.shieldoma.com/media/qrphisher-thumb-2.jpg)](https://www.dailymotion.com/video/k6DJYjM5fm5H1tAeSoi)

## Technical Details

- The current version supports QR objects in the following formats: **Canvas**, **SVG**, **IMG**. Feel free to contribute additional types.
- To save the QR code, we use a base64-encoded string of the QR and send it as a GET request to our server. Therefore, you should increase the maximum length of HTTP GET requests on your server to be able to save it.

## About This Project

**QRPhisher** is an educational showcase for QRLJacking attacks developed by Shieldoma Team. We used our own servers to handle the backend part of the attack, including saving and displaying the phishing pages. The backend part isn't open source, but you can always build your own.

## About QRLJacking Attack Vector

Learn more about QRLJacking at:
- [OWASP QRLJacking](https://github.com/OWASP/QRLJacking)
- [Seekurity Blog - QRLJacking](https://seekurity.com/blog/tag/qrljacking)
- [QRLJacking Attack Author: Mohamed Abdelbasset Elnouby](https://github.com/SymbianSyMoh)
