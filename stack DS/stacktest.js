class Stack{
    constructor(){
        this.items =[];
    }

//The following are stack methods used to structure data
    // Push is used to add elements into the array
    push(element){
        this.items.push(element);
    }
 
    //Pop is used to remove elements from the array
    pop(){
    return this.items.pop();
    }
    
    //Peek is used to check for the last element in the array
    peek(){ 
        return this.items[this.items.length - 1];
    }

    //isEmpty is used to check if the stack is empty using boolean 
    isEmpty(){
        return this.items.length===0;
    }

// size checks for the size of the stack or number of elements within the stack
    size(){
        this.items.length;
    }

// clear empties the stack
    clear(){
    this.items=[]
    }
}

//Create a new instance of the class "Stack"
const data = new Stack();

//Manipulate the data/elements using the methods
data.push(25);
data.push(50);
data.push(75);
data.push(100)
data.push(125);
console.log(data)

data.pop();
console.log(data.pop())

data.peek();
console.log(data.peek())

data.isEmpty();
console.log(data.isEmpty())

data.size();
console.log(data.size())

data.clear(),
console.log(data)


// to check for the popped item -> console.log(data.pop())
//Run it in the console to view hte results.
