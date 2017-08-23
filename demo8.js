/**
 * Created by Administrator on 2017/8/23 0023.
 */


function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.union = union;
    this.contains = contains;
    this.subset =subset;
    this.size = size;
}

function add(data){
    if(this.dataStore.indexOf(data)<0){
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
}

function remove(data){
    var pos = this.dataStore.indexOf(data);
    if(pos>-1){
        this.dataStore.splice(pos,1);
        return true;
    }else{
        return false;
    }
}

function show(){
    return this.dataStore;
}

function contains(data){
    if(this.dataStore.indexOf(data)){
        return true;
    }else{
        return false;
    }
}

function union(set){
    var tempSet = new Set();
    for( var i=0; i <this.dataStore.length;i++ ){
        tempSet.add(this.dataStore[i])
    };
    for(var i=0;i< set.dataStore.length;i++){
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i])
        }
    }
    return tempSet;
}

function show(){
    return this.dataStore;
}
function subset(set){
    if(this.size() > set.size()){
        return false;
    }else{
        for(var member in this.dataStore){
            if(!set.contains(member)){
                return false;
            }
        }
    }
    return true;
}

function size(){
    return this.dataStore.length;
}


var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");


if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}
else {
    console.log("DMP is not a subset of IT.");
}




