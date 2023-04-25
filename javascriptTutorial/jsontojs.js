let text = '{"menuitem": [' +
    '{"value": "New", "onclick": "CreateNewDoc()"},'
     +
    '{"value": "Open", "onclick": "OpenDoc()"},'
     +
    ' {"value": "Close", "onclick": "CloseDoc()"}]}'


    
let obj = JSON.parse(text);
console.log(obj.menuitem[1].value);