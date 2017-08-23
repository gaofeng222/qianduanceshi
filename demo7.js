/**
 * Created by Administrator on 2017/8/23 0023.
 */


function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear =clear;
}


function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function count(){
    var n=0;
    for(var key in this.datastore){
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}

function showAll() {
    for(var key in this.datastore) {  //pdf教程此处是错误的 Object.keys(this.datastore)
        console.log(key + " -> " + this.datastore[key]);
    }
}

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Baidu", "789");
console.log(pbook.count())
console.log("baidu's extension: " + pbook.find("Baidu"));
pbook.remove("David");
pbook.showAll();















