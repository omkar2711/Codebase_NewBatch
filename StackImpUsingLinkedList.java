

class Node {
    int data;
    Node next;

    Node(int val){
        this.data = val;
        this.next = null;
    }
}

public class StackImpUsingLinkedList {
    Node top;


    void push(int val){
        Node newNode = new Node(val);

        if(top == null){
            top = newNode;
            System.out.println(newNode.data + " pushed to the stack");
            return;
        }

        newNode.next = top;
        top = newNode;
        System.out.println(newNode.data + " pushed to the stack");
    }

    int pop(){
        if(top == null){
            System.out.println("Stack Underflow");
            return -1;
        }

        int ele = top.data;

        top = top.next;
        return ele;
    }

    int peek(){
        if(top == null){
            System.out.println("Stack UnderFlow");
            return -1;
        }
        return top.data;
    }

    boolean isEmpty(){
        return top == null;
    }

    void displayStack(){
        Node curr = top;

        while(curr!=null){
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        StackImpUsingLinkedList st = new StackImpUsingLinkedList();
        st.push(10);
        st.push(20);
        st.push(30);

        st.displayStack();

        System.out.println(st.pop() + " element pop ");

        st.displayStack();
    }
}
