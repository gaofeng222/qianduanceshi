/**
 * Created by Administrator on 2017/8/23 0023.
 */


function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
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
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}


//中序遍历
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right)
    }
}

var nums = new BST();
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log("Ionder traversal: ")
inOrder(nums.root)














