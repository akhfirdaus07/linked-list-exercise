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


    return { append, prepend, size, head, tail };
};

const list=LinkedList();

list.append("node2");
list.prepend("node1");
list.size();
list.head();
list.tail();