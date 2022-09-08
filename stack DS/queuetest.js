class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
       this.items.push(element);
    }

    dequeue() {
            return this.items.shift();
        }

     peek(){ 
            return this.items[this.items.length - 1];
        }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        this.items.length
    }
}

const line = new Queue();

line.enqueue(0),
line.enqueue(4),
line.enqueue(8),
line.enqueue(12),
line.enqueue(16),
console.log(line)

line.dequeue(),
console.log(line.dequeue())

console.log(line.peek())

console.log(line.isEmpty())

console.log(line.size())