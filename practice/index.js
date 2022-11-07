//declaring variables
let problem = "nigeria";
const solution = "20 million dollars";
console.log(problem);
console.log(solution);
//objects
let person = {
  name: "rasheedat",
  age: 17,
  adress:{
    street:'adebayo',
    city:'ado'
  },
  hobbies:['reading','sports','coding']

};
person.age = 19;
person["name"] = "ike";
console.log(person.hobbies[2]);

//arrays
let names = ["jinadu", "Rasheedat", "ikeoluwa"];
names[3] = 49;
console.log(names.length);
names.pop()
names.unshift('mint')
names.shift()
names.push(20)
console.log(names)

//task funtion
function nationalty(tribe, age) {
  let glass = 'recommended'
  console.log(' hello i"m Nigerian and my tribe is ' + tribe + age);
}

nationalty("yoruba", 19);

function space(decision){
  if(decision == 'interested'){
    return 'positive vote'
  }else if(decision == 'not sure'){return 'invalid vote'}
  else {return 'negative vote'}
}

console.log(space('interested'))

function compare(val){
  if(val > 10 && val <20){
    return 'between 10 and 20'
  }else{return 'below 10'}
}
console.log(compare(12))

//calculating funtion
function square(number) {
  return number * number;
}
console.log(square(5));

let pen = "19" + 19;
console.log(pen);


// concatenation
let vibe = 'negative';
let name = 'Ade'
const taiwo = `He has a ${vibe} vibe says ${name}`
console.log(taiwo);

// compound argument
let fig1 = 30;
fig1 *= 5;
console.log(fig1);


let color = 'neon';
let fave = 'purple';
let faveColor = 'my favourite color is ';
faveColor += fave;
faveColor += 'but adeola\' is '
faveColor += color
console.log(faveColor)

// length
const area = 'adebayo';
console.log(area[2]);

