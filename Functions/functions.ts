function square(num : number){
    return num*num
}
console.log(square(3));
console.log(square("3"));

function greet(person: string){
    
    return `Hi there, ${person}`
}

const doSomething=(person:string,age:number,isFunny:boolean)=>{

}

doSomething("Monkey D. Luffy",34,true)
doSomething("Monkey D. Luffy",34,"true")

greet(true);

function greetwithdefault(person:string ="stranger"){
    return `Hi there ${person}`
}

// Return type
greetwithdefault()
greetwithdefault("Ace")

function mystery(num:number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num
}
const add=(x:number,y:number) : number =>{
    return x+y;
}

const colors = ["red","yellow","orange"];
colors.map(color=>{
    color.toUpperCase()
})

// The void type
function printTwice(msg: string):void{
    console.log(msg);
    console.log(msg);
    // return "";
}

// Never
const makeError = (msg:string) :never =>{
    throw new Error(msg);
    
}
function gameLoop():never{
    while(true){
        console.log("GAME LOOP RUNNING");
        return 
    }
}
