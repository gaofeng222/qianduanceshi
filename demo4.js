/**
 * Created by Administrator on 2017/8/18 0018.
 */


function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top]
}

function peek(){
    return this.dataStore[this.top-1]
}

function length(){
    return this.top;
}

function clear(){
    this.top = 0;
}



/*var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");

console.log(s.length())
console.log(s.peek())
console.log(s.pop())
console.log(s.peek())*/


//function mulBase(num,base){
//    var s = new Stack();
//    do{
//        s.push( num % base );
//        num = Math.floor(num /= base)
//    }while(num >0);
//    var conerted = '';
//    while(s.length() > 0){
//        conerted += s.pop();
//    }
//    return conerted;
//}
//
//var num = 32;
//var base = 2;
//var newNum = mulBase(num,base);
//console.log(newNum)
//
//
//var num1 = 125;
//var base1 = 8;
//var newNum1 = mulBase(num1,base1);
//console.log(newNum1)
//


/*function isPalindrome(word){
    var s = new Stack();
    for(var i = 0; i < word.length;i++){
        s.push(word[i])
    }
    var rword = '';
    while( s.length() > 0 ){
        rword += s.pop();
    };
    if(word == rword){
        return true;
    }else{
        return false;
    }
}

var word = 'racar';
if(isPalindrome(word)){
    console.log(word + " is a palindrome")
}else{
    console.log(word + ' is not a palindrome')
}*/




function fact(n){
    var s = new Stack();
    while(n>1){
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0){
        product *= s.pop()
    }
    return product;
 }

console.log(fact(5))




























