function getDataTestIds(html) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    var listItems = tempDiv.querySelectorAll('.list-item');
    var dataTestIds = [];
    
    for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var dataTestId = listItem.getAttribute('data-test-id');
    dataTestIds[i] = dataTestId;
    }
    
    return dataTestIds;
    }
    
    var htmlCode = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="/main.js"></script>
        <div id="root"></div>
        <ul>
            <li class="list-item green" data-test-id="1">green</li>
            <li class="list-item red" data-test-id="2">red</li>
            <li class="list-item orange" data-test-id="3">yellow</li>
            <li class="list-item blue" data-test-id="4">blue</li>
            <li class="list-item white" data-test-id="5">orange</li>
        </ul>
    php
    Copy code
    <ul>
        <li class="car">car</li>
        <li class="red">red</li>
        <li class="white">orange</li>
    </ul>
    <div>
        <label><input type="text" id="secret-login"></label>
        <label><input type="password" id="secret-password"></label>
        <button type="button" id="button-send">send</button>
    </div>
    <div id="append-div">
    </div>
    </body>
    </html>
    `;
    var result = getDataTestIds(htmlCode);
    console.log(result);