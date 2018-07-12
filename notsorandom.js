function random(name){
    const decimal = Math.random();
    const timesrandom = decimal *name;
    const final = Math.floor(timesrandom);
    console.log(final);

}
random(100000000);

function randomletter(name){
    const decimal = Math.random()* name.length;
     const final = Math.floor(decimal);
     const rand = name[final];
    console.log(rand);

}
randomletter("sam");

myguy("can you chill?");
console.log(myguy);




