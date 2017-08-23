/**
 * Created by Administrator on 2017/8/18 0018.
 */
/*
var numbers = [];
console.log(numbers.length)
*/

/*
var numbers = [1,2,3,4,5,6];
console.log(numbers.length)
*/


/*
var numbers = new Array(10)
console.log(numbers.length);
*/

/*
var numbers = new Array(1,2,3,4,5)
console.log(numbers.length)
*/

/*
var numbers = 3;
var arr =[1,2,3,4];
console.log(Array.isArray(numbers))
console.log(Array.isArray(arr))
*/

/*
var nums = [];
for(var i = 0;i<100;i++){
    nums[i] = i + 1;
}

console.log(nums)

*/




 /*function sum(array){
    var result = 0;
    for(var i=0;i<array.length;i++){
        if(array.length == 0){
            return false;
        }else{
            result += array[i];
        }
    }
    return result;
}


console.log(sum([1,2,3,4,5]))
console.log(sum([]))
*/

/*
var sentence = "the quick brown fox jumped over the lazy dog";

var words = sentence.split(' ')

for(var i=0;i<words.length;i++){
    console.log( i + " : " +words[i] )
}
*/


var nums = [];
for(var i = 0;i<10;i++){
    nums[i] = i+1;
}
/*
var samenums = nums;
console.log(nums)
console.log(samenums)
nums[0] = 110;
console.log(nums)
console.log(samenums)

*/

/*
function copy(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2[i] = arr1[i]
    }
}

var arr1 = [];
for(var i=0;i<10;++i){
    arr1[i] = i+1;
}
var samearr =[]
copy(arr1,samearr)

console.log(arr1)
console.log(samearr)

arr1[0] = 201;
console.log(arr1)
console.log(samearr)
*/

/*var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];

var name = 'Mike';

var firstPos = names.indexOf(name);

console.log("First found " + firstPos)

console.log(names.lastIndexOf(name))

*/

//var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
//
//console.log(names.join())
//
//console.log(names.toString())
//



/*var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];

var itDiv = cisDept.concat(dmpDept)

console.log(itDiv)

var itDiv2 = dmpDept.concat(cisDept)

console.log(itDiv2)*/

/*var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];

var dmpDept = itDiv.splice(3,1,'a','b')

console.log(itDiv)
console.log(dmpDept)*/


/*
var nums = [1,2,3,4,5,6]
console.log(nums)

nums.push(7)
console.log(nums)

*/

/*var nums = [2,3,4,5]

var newnum = 1;
var len = nums.length;

for(var i=len;i>=0;--i){
    nums[i] = nums[i-1]
}

nums[0] = newnum;
console.log(nums)*/

/*
var nums = [2,3,4,5];
console.log(nums)

var newnum = 1;
console.log(nums.unshift(newnum))

var nums1 = [3,4,5]
nums.unshift(newnum,1,2)
console.log(nums)
*/

/*var nums = [9,1,2,3,4,5,6];
nums.pop();
console.log(nums)*/

/*for(var i=0;i<nums.length;++i){
    nums[i] = nums[i+1]
}

console.log(nums)

console.log( nums.reverse() )*/


/*
function square(num){
    console.log(num,num*num)
}

var nums = [1,2,3,4,5,6];
nums.forEach( square )
*/

/*
function isEven(num){
    return num % 2 == 0;
}

var nums =[2,4,6,8]

var even = nums.every(isEven)
if(even){
    console.log("All num is even")
}else{
    console.log("Not all even")
}
*/


/*
function add(running,currying){
    return running + currying;
}

var nums =[1,2,3,4,5,6]
var sum = nums.reduce(add)
console.log(sum)
*/


/*function curve(grade){
    return grade += 5;
}*/

/*
function first(word){
    return word[0]
}

var grades = ["for","your","information"];
var newgrades = grades.map(first);
console.log(newgrades.join(""))
*/

//var twod = [];
//var rows = 5;
//for(var i=0;i < rows;++i){
//    twod[i] =[];
//}
//console.log(twod)
//

/*
Array.matrix = function(numrows,numcols,initial){
    var arr =[];
    for(var i=0;i < numrows;++i){
        var colmns = [];
        for( var j =0;j < numcols;++j ){
            colmns[j] = initial;
        }
        arr[i] = colmns;
    }
    return arr;
}

var nums = Array.matrix(5,5,1);
console.log(nums[1][1])
*/


/*var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var row = 0;row < grades.length;++row){
    for(var col = 0;col < grades[row].length;++col){
        total += grades[row][col]
    }
    average = total / grades[row].length;
    console.log(average)
}*/


/*var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var col=0;col < grades.length;++col){
    for(var row = 0;row < grades[col].length;++row){
        total += grades[row][col];
    }
    average = total / grades[col].length;

    console.log(average.toFixed(2))
    total = 0;
    average = 0.0;

}*/

/*
var grades = [[89, 77],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var row = 0;row < grades.length;++row){
    for(var col = 0;col < grades[row].length;++col){
        total += grades[row][col]
    }
    average = total / grades[row].length;
    console.log(average.toFixed(2))
    total = 0;
    average = 0;
}
*/

function Point(x,y){
    this.x = x;
    this.y = y;
}

function displayPts(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].x + " : " + arr[i].y)
    }
}

/*
var p1 = new Point(1,2)
var p2 = new Point(3,4)
var p3 = new Point(5,6)
var p3 = new Point(4,4)

var point = [p1,p2,p3]

for(var i=0;i<point.length;i++){
    console.log(point[i].x + ' : ' + point[i].y)
}

var p5 = new Point(12,-3);
point.push(p5);

for(var i=0;i<point.length;i++){
    console.log(point[i].x + ' : ' + point[i].y)
}
*/





function weekTemps(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp){
    this.dataStore.push(temp)
}

function average(){
    var total = 0;
    for(var i=0;i<this.dataStore.length;i++){
        total += this.dataStore[i];
    }
    return total/this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(61)
thisWeek.add(65)
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);


console.log(thisWeek.average())