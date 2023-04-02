const Node = (input)=>{
    return {
        value: input || null, 
        nextNode:null,
    };
};

const LinkedList = ()=>{
    let HEAD=null;
    let length=0;

    const append=(value)=>{
        const newNode=Node(value);
        length++;
        if(HEAD===null) return HEAD=newNode;
        let pointer=HEAD;
        while(pointer.nextNode !== null) pointer=pointer.nextNode;
        pointer.nextNode=newNode;
    };
    const prepend=(value)=>{
        const newNode=Node(value);
        length++;
        if(HEAD===null) return HEAD=newNode;
        newNode.nextNode=HEAD;
        HEAD=newNode;
    };

    const size=()=>{
        if(HEAD===null) return console.log("List is empty");
        console.log(length);
    };

    const head=()=>{
        if(HEAD===null) return console.log("List is empty");
        console.log(HEAD.value);
    };

    const tail=()=>{
        if(HEAD===null) return console.log("List is empty");
        let pointer=HEAD;
        while(pointer.nextNode!==null) pointer=pointer.nextNode;
        console.log(pointer.value);
    };

    const at=(index)=>{
        if(isNaN(index) || index<1) return console.log("Input must be a number and greater than 0");
        if(HEAD===null) return console.log("List is empty");
        let pointer=HEAD;
        for(let i=1;i<index;i++){
            pointer=pointer.nextNode;
        };
        console.log(pointer);
    };

    return { append, prepend, size, head, tail, at };
};

const list=LinkedList();

list.append("node3");
list.append("node4");
list.append("node5");
list.prepend("node2");
list.prepend("node1");

list.size();
list.head();
list.tail();

list.at("satu");
list.at(-1);
list.at(3);