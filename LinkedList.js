const Node = (input) => {
  return {
    value: input || null,
    nextNode: null,
  };
};

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) return (HEAD = newNode);
    let pointer = HEAD;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    pointer.nextNode = newNode;
  };
  const prepend = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) return (HEAD = newNode);
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  const size = () => {
    if (HEAD === null) return console.log("List is empty");
    console.log(length);
  };

  const head = () => {
    if (HEAD === null) return console.log("List is empty");
    console.log(HEAD.value);
  };

  const tail = () => {
    if (HEAD === null) return console.log("List is empty");
    let pointer = HEAD;
    while (pointer.nextNode !== null) pointer = pointer.nextNode;
    console.log(pointer.value);
  };

  const at = (index) => {
    if (isNaN(index) || index < 1)
      return console.log("Input must be a number and greater than 0");
    if (HEAD === null) return console.log("List is empty");
    let pointer = HEAD;
    for (let i = 1; i < index; i++) pointer = pointer.nextNode;
    console.log(pointer);
    return pointer;
  };

  const pop = () => {
    if (HEAD === null) return console.log("List is empty");
    if (HEAD.nextNode === null) HEAD = null;
    let pointer = HEAD;
    for (let i = 1; i < length - 1; i++) pointer = pointer.nextNode;
    pointer.nextNode = null;
    length--;
    console.log(`Success delete the last node`);
  };

  const contains = (value) => {
    if (HEAD === null) return console.log("List is empty");
    let pointer = HEAD;
    for (let i = 1; i <= length; i++) {
      if (pointer.value == value) {
        return console.log(true);
      } else {
        pointer = pointer.nextNode;
      }
    }
    console.log(false);
  };

  const find = (value) => {
    if (HEAD === null) return console.log("List is empty");
    let pointer = HEAD;
    let total = 0;
    for (let i = 1; i <= length; i++) {
      if (pointer.value == value) {
        console.log(`value found in index ${i}`);
        total += 1;
      }
      pointer = pointer.nextNode;
    }
    if (total === 0) console.log(null);
  };

  const toString = () => {
    if (HEAD === null) return console.log("List is empty");
    let pointer = HEAD;
    let result = "";
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
  };

  const insertAt = (value, index) => {
    if (HEAD === null) return console.log("List is empty");
    const newNode = Node(value);
    length++;
    let pointer = HEAD;
    for (let i = 1; i < index; i++) {
      pointer = pointer.nextNode;
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  const removeAt = (index) => {
    if (HEAD === null) return console.log("List is empty");
    if (index > length || index < 0) return;
    if (index === 0) HEAD = HEAD.nextNode;
    else {
      const prePointer = at(index - 1);
      prePointer.nextNode = prePointer.nextNode.nextNode;
    }
    length--;
  };

  return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt };
};

const list = LinkedList();

list.append("node3");
list.append("node4");
list.append("node5");
list.prepend("node2");
list.prepend("node1");

// list.size();
// list.head();
// list.tail();

// list.at("satu");
// list.at(-1);
// list.at(3);

// list.pop();

// list.contains("node5");
// list.contains("node4");
// list.contains("node3");
// list.contains("node2");
// list.contains("node1");

// list.find("node5");
// list.find("node4");
// list.find("node3");
// list.find("node2");
// list.find("node1");


list.toString();

list.insertAt("nodeXXX",1);
list.toString();

list.removeAt(2);
list.toString();