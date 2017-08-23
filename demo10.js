/**
 * Created by Administrator on 2017/8/23 0023.
 */


function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}


function show(){
    return this.data;
}


function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data){
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }else{
        var current = this.root;
        while(true){
            parent = current;
            if(data < current.data){

            }
        }
    }
}

function a(){

}




















