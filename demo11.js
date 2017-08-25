/**
 * Created by Administrator on 2017/8/25 0024.
 */

function Vertxt(label){
    this.label = label;
}

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(var i=0;i<this.vertices;i++){
        this.adj[i] =[];
        this.adj[i].push("")
    }
    this.addEdge = addEdge;
    this.marked = [];
    for(var i=0;i<this.vertices;++i){
        this.marked[i] = false;
    }
    //this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    for(var i=0;i < this.vertices;i++){
        console.log( i + "->" )
        for (var j = 0; j < this.vertices; ++j ) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }

    }
}

//深度优先搜索

function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log("Visited vertex:" + v)
    }
    for(var w in this.adj[v]){
        if(!this.marked[w]){
            this.dfs(w)
        }
    }
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);













































































