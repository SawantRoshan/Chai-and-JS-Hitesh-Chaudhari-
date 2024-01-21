// To avoid polution from global scoped variables we use IIFE function syntax

//Syntax:- (function(){})(); ......we can use this for DB connection 

//Example:-
(function myIIFE(params) {
 console.log("DB Connected!");   
})(); //last semicolon is important to stop the execution of the  function.

((name)=>{
    console.log(`You can use DB now! ${name}`);
})('Roshan');