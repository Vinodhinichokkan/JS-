const myObj = {
    name: "vino",
    content : ["Earn", "Grow", "GIve"],
    sub: function(){
        console.log("Thanks for clicking bell icon");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.sub();

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(sendJSON.name);


/*{
    name: 'vino',
    content: [ 'Earn', 'Grow', 'GIve' ],
    sub: [Function: sub]
  }
  vino
  Thanks for clicking bell icon
  {"name":"vino","content":["Earn","Grow","GIve"]}
  undefined */

  
  
  