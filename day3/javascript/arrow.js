function add(a,b){
    return a + b;
}
const add1=(a,b) => {
    return a * b;
}
console.log(add(8,15));
console.log(add1(5,3));

const num=[1,2,3,4,5]
const mapnum=num.map((n)=>n*3)
console.log(mapnum)

const postnum=num.filter((n)=>n%2!=0)
console.log(postnum)

const reducer=num.reduce((num,n)=>num+n,0)
console.log(reducer)

const person=[
    {name:"John",age:30},
    {name:"Jane",age:25},
    {name:"Doe",age:40},
    {name:"Smith",age:35}
]

const filte=person.filter((p)=>p.age>30)
console.log(filte)


//spread
const num1= [1,2,3,4,5,6];
const [first,second,third,...spread]=num1
console.log(third);

const user ={uname:'CR7',password:'12345'}
const {uname,password}=user
console.log(password);
console.log(spread);

function add2(...arguments){
    /////////////////////return arguments;
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,10))


""

//callback---function as a parameter

function fun1(){
    console.log("Hello from fun1111");
}

function fun2(name,callback){
    callback();
    console.log(name);
    console.log("Hello from fun2");
    
}

console.log(fun2("John",fun1));


//////async-await

// async function fetchUsers() {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUsers();

async function fetchUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = await response.json();
    data.map((a)=>console.log(a.name));
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

