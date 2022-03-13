
// Dom Document Object Model

// var elment = document.getElementById("myId");
// var elment1 = document.getElementsByClassName("myClass")
// var elment2 = document.getElementsByName("test")
// var elment3 = document.getElementsByTagName("input")
// var elment4 = Array.from( document.querySelectorAll(".myClass") )



// // 1- Get element => 2- event => action

// elment.addEventListener( "click" , function(){


//     alert("hello")

// } )


// var const let 
// 1- Scoping

// if( true ){

//     var x = 5;
//     let y = 6;

// }

// console.log(x);
// console.log(y);

//2- Hoisting

// console.log(x);

// let x = 5;

// 3- redeclaration

// let x = "ahmed";
// let x = "hambozo";

// console.log(x);

// const x = 5;
// x = 6;
// console.log(x);

// Template Literal
// var userName = "Mahomud";

// document.getElementById("test").innerHTML = `hello ${ 5 + 6 - 2 } welcome in our page`

// Arrow Function
// a new way to write a fuction =>  remove a return and {} if it was a 1 line
// if you send 1 param => remove () 
// if you doesn't send param => _
// deep accessing in object

// this

// class Table{
//     constructor(width){
//         this.width = width;
//     }
// }

// new Table()



// var object = {

//     name: "Mahmoud",
//     eat: function(){

        
//         var showBestMeal = _ =>  console.log( this.name + " loves koshary." ) 

//     }

// }

// spread operator

// function sum(x,y,z){
//     return x + y + z;

// }

// var myArr = [10,20,30]

// sum( ...myArr )

// filter map reduce

// var myArr = [5,7,3];

// console.log(  myArr.reduce( (x,y) =>  x += y  , 100 ) )

// var y = new Map(); // y = {}
// // let x = {
// //     name: "ahmed",
// //     age: 25,
// // }
// y.set("name", "ahmed" ).set("age", 25).set("phone","01111655")
// console.log(y)  ;

// // for (const prop of y.entries() ) {
// //     console.log(prop);
// // }

// var x = Object.fromEntries( y )
// console.log(x);

// Object => 2 methods ( entries( Object ) transfer it into a map  ,  fromEntries( Map ) transfer it into an object )
// var x = new Set( [10, 50 , 30 , 10 , 40, 30] );
// console.log(x);

// API 
/*
    LINK : 
    GET: get data mn el database
    POST: adef 7aga fe el DB
    PUT: bt3dl fe el DB
    PATCH: bt3dl fe el DB (fe 7aga mo3yna)
    DELETE: delete 

*/
// var httpReq = new XMLHttpRequest();
// httpReq.open("GET",URL);
// httpReq.send();

// httpReq.addEventListener( "readystatechange" , function(){

//     if( httpReq.readyState == 4 && httpReq.status == 200 )
//     {
      
//         JSON.parse( httpReq.response )
//     }

// } )


/*

    ReadyState
    0: unsent
    1: connection stablished 
    2: Request sent succesfully
    3: request processing
    4: success

*/

/*

    Status:
    404: page not Found
    403: forbidden
    500: 3eb fe el server
    200: Success

*/

// async function getURL(){
    
//     var myResponse = await fetch("URL","GET");
//     myResponse = await myResponse.json();

//     console.log(myResponse);
// }

// document.querySelectorAll("div img")
/*
    show()
    hide()
toggle()

slideUp()
slideDown()
slideToggle()

fade

*/


// https://opentdb.com/api.php?amount=5&category=25&difficulty=easy


import {Settings} from './Settings.js'

let mySettings = new Settings();
