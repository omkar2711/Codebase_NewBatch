public class StackImpUsingArray {

    int[] arr;
    int top;
    int capacity;

    StackImpUsingArray(int capacity){
        this.capacity = capacity;
        this.arr = new int[capacity];
        this.top = -1;
    }


    void push(int val){
        if(top == capacity - 1){
            System.out.println("Stack Overflow");
        }

        top++;
        arr[top] = val;
        System.out.println(val + " pushed to stack");
    }

    int peek(){
        if(isEmpty()){
            System.out.println("Stack Underflow");
        }
        return arr[top];
    }

    int pop(){
        if(isEmpty()){
            System.out.println("Stack Underflow");
        }
        int ele = arr[top];
        top--;
        return ele;
    }

    boolean isEmpty(){
        return top == -1;
    }

    void displayStack(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return;
        }

        System.out.print("Stack elements: ");
        for(int i = 0; i <= top; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }


    public static void main(String[] args) {
        StackImpUsingArray st = new StackImpUsingArray(5);

        st.push(10);
        st.push(20);
        st.push(30);
        st.displayStack();
        System.out.println(st.pop() + " popped from stack");
        System.out.println("Top element is: " + st.peek());
        st.displayStack();
        st.push(40);
        st.push(50);
        st.push(60);
        // st.push(70);
        st.displayStack();

    }
}
