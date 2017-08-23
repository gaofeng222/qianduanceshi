/**
 * Created by Administrator on 2017/8/20 0020.
 */

function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display =display;
    this.findPrevious = findPrevious;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function display(){
    var currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var preNode = this.findPrevious(item);
    if(!(preNode.next == null)){
        preNode.next = preNode.next.next;
    }
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");


cities.display()
console.log("--------------")
cities.remove("Carlisle")

cities.display()



















