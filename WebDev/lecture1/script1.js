// function createCounter(){
//     let count = 0;
//     return function(){
//         // count++;
//         return "ID " + ++count;
//     }
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());


// setTimeout(() => {
//    console.log("First Set timeout executed");
// }, 3000);

// setTimeout(() => {
//     console.log("Second Set timeout executed");
// }, 1000);

// console.log("Script Ended");


function delayGreetings(greetings){
    setTimeout(()=>{
       const data = { id: 1, name: "John Doe" };
       greetings(data);
    }, 3000);
}

function greetings(data){
    console.log(" Good Morning, " + data.name + "!");
}

delayGreetings(greetings);