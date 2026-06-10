console.log("Hello")
const first=1;
const second=2;
console.log(first);
const str="Kaviya";
console.log(str)
const fruits=["Apple","Banana","Grapes"]
console.log(fruits[0])
fruits[1]="Orange"
console.log(fruits[1])
const arr=[1,"name",false,2.4]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth=document.getElementById("ptag")
fourth.innerHTML="This is my fourth class"
function newFunction(){
    console.log("I am writing something")
}
const input=document.getElementById("eventListener")
const output=document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
//create
const newvar=document.createElement("h1");
newvar.textContent="New paragraph";
document.body.appendChild(newvar);
//delete
newvar.remove()