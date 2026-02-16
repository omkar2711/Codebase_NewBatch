import java.util.*;

public class StackImpUsingQueue {

    Queue<Integer> q;
    public StackImpUsingQueue() {
        q = new LinkedList<>();
    }
    void push(int val){
        q.add(val);

        // Rotate the queue to make the last added element to be at the front
        int size = q.size(); //2
        for (int i = 0; i < size - 1; i++) {
            q.add(q.remove());
        }
    }
    int pop(){
        if(q.isEmpty()){
            System.out.println("Stack Underflow");
            return -1;
        }
        return q.remove();
    }
    int peek(){
        if(q.isEmpty()){
            System.out.println("Stack Underflow");
            return -1;
        }
        return q.peek();
    }
    public static void main(String[] args) {

        StackImpUsingQueue stack = new StackImpUsingQueue();
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack.pop());   // Output: 30
        System.out.println(stack.peek());  // Output: 20
        System.out.println(stack.pop());   // Output: 20
        System.out.println(stack.pop());   // Output: 10
        System.out.println(stack.pop());   // Output: Stack Underflow, -1
    }
}
