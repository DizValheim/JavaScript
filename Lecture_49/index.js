// console.log("Hello World")


let src = {
    age: 20,
    ht: 170,
    wt: 75
};

let dest = {}

//cloning using for loop
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest[key] = newValue;
}

// let src2 = {
//     value: 101,
//     name: "Dishant"
// };

// let dest = {...src};
// let dest = Object.assign({}, src);
// let dest = Object.assign({}, src, src2);

src.age = 22;

console.log(src);
console.log(dest);

