let str = 'reverse this string'

class Node{
    constructor(val){
        this.val = val;
        this.next = null
        this.prev = null
    }
}

class DLL{
    constructor(){
        this.first = null;
        this.last = null;
    }

    push(val){
        let node = new Node(val)
        if(!this.first){
            this.first = node;
            this.last = node;
            node.next = null;
            node.prev = null
        }
        this.last.next = node;
        node.prev = this.last;
        this.last = node
    }
}

class backStack{
    constructor(){
        this.first = dll.first;
        this.last = dll.last;
        this.current = dll.last
    }

    back(){
        this.current = this.current.prev;
        return this.current
    }
}

const dll = new DLL()
let bs = new backStack()

for(let char of str){
    dll.push(char)
}

function reverse(str){
    let newStr = ''
    for(let char in str){
        newStr+= bs.current.val;
        bs.back();
    }
    return newStr
}

reverse(str)