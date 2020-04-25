"use strict";

class LinkedListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }

    add(key) {

        const newNode = new LinkedListNode(key);                
        if (this[head] === null) {
            this[head] = newNode;
        } 
        else {
            let current = this[head];
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;            
        }
    }

    get(index) {
        if (index > -1) {
            let current = this[head];
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            
            if (current !== null)
                return current.data;
        } 
        return undefined;
    }

    find(key){
        let current = this[head];
        while (current !== null){
            if (current.key === key)
                return true;
        }
        return false;
    }

    remove(index) {
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }
 
        if (index === 0) {
            const key = this[head].key;
            this[head] = this[head].next;
            return key;
        }

        let current = this[head];
        let previous = null;
        let i = 0;

        while ((current !== null) && (i < index)) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) {

            previous.next = current.next;
            return current.key;
        }
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
}


let list = new LinkedList();
