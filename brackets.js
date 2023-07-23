/* Write a function that is passed a string which can contain any text, including different kinds of brackets: `{} [] ()`.

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are 
properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets. */


let exp = "{#}${%{}"


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class Deque{
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

    pop(){
        const pop = this.last.val
        this.last = this.last.prev
        return pop
    }

    shift(){
        const shift = this.first.val
        this.first = this.first.next
        return shift
    }

    unshift(val){
        let node = new Node(val)
        node.next = this.first
        this.first = node
        return node
    }
}

const deck = new Deque()

for(let char of exp){
    deck.push(char)
}

