var colors = ['yellow', 'blue', 'red', 'orange'];

var i = 0;
while(i < colors.length) {
    console.log(colors[i]);
    i++;
}


for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(color){
    console.log(color)
})

/*  1.  for loop 3 regels (5 incl array)
        while loop 5 regels (7 incl array)
    2.  forEach ook 3 regels (5 incl array)
    3.  Ik vind de For Loop makkelijker leesbaar, 
*/   
//  4.  Looping through the properties of an object

const user = {
    name: "Remco",
    age: 42,
    hometown: "IJsselstein",
    occupation: "Designer",
    future: "Frontend Developer"
};

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} => ${value}`);
}