function findLiTags(html) {
    var Div = document.createElement('div');
    Div.innerHTML = html;
  
    var liTags = Div.querySelectorAll('li');
    var texts = [];
  
    for (var i = 0; i < liTags.length; i++) {
      var li = liTags[i];
      texts[i] = li.textContent;
    }
  
    return texts;
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
      <div id="root"></div>
      <ul>
          <li class="list-item green" data-test-id="1">green</li>
          <li class="list-item red" data-test-id="2">red</li>
          <li class="list-item orange" data-test-id="3">yellow</li>
          <li class="list-item blue" data-test-id="4">blue</li>
          <li class="list-item white" data-test-id="5">orange</li>
      </ul>
  
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
  
  var result = findLiTags(htmlCode);
  console.log(result);