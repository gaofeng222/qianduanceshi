/**
 * Created by Administrator on 2017/8/18 0018.
 */

/*

var names = [];
names.push('baidu');
names.push('jennifer');
console.log(names)

names.shift();
console.log(names)

*/



function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift()
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString(){
    var retStr = '';
    for(var i = 0; i<this.dataStore.length;++i) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
    }

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

//var q = new Queue();
//q.enqueue('baidu')
//q.enqueue('sogo')
//q.enqueue('cynthia')
//console.log(q.toString())
//console.log(q.front())
//console.log(q.back())



var names = [
    ["F", "Allison McMillan"],
    ["M" , "Frank Opitz"],
    ["M", "Mason McMillan"],
    ["M", "Clayton Ruff"],
    ["F" , "Cheryl Ferenback"],
    ["M" , "Raymond Williams"],
    ["F" , "Jennifer Ingram"],
    ["M" , "Bryan Frazer"],
    ["M" , "David Durr"],
    ["M" , "Danny Martin"],
    ["F" , "Aurora Adney"]
]

function Dancer(name,sex){
    this.name = name;
    this.sex = sex;
}

function getDancers(males,females){
    for(var i=0;i < names.length;++i){
        var sex = names[i][0]
        var name = names[i][1]
    }
    if(sex == "F"){
        females.enqueue( new Dancer(name,sex) );
    }else{
        males.enqueue( new Dancer(name,sex) )
    }
}


function dance(males,females){
    console.log("The dance partners are : \n");
    while(!females.empty() && !males.empty()){
        person = females.dequeue();
        console.log("Female dancer is:"+person.name);
        person = males.dequeue();
        console.log(" and the male dance is : " + person.name)
    }
}


var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers,femaleDancers)
dance(maleDancers,femaleDancers)

if(!femaleDancers.empty()){
    console.log(femaleDancers.front().name + "is waiting to dance")
}
if(!maleDancers.empty()){
    console.log(maleDancers.front().name + "is waiting to dance")
}




















