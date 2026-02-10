public class QueueImpUsingArray {

    int[] arrQueue;
    int capacity;
    int front;
    int rear;
    int size;

    public QueueImpUsingArray(int capacity){
        this.capacity = capacity;
        arrQueue = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    boolean isEmpty(){
        return size == 0;
    }

    boolean isFull(){
        return size == capacity;
    }

    void enqueue(int val){
        if(isFull()){
            System.out.println("Queue is full");
            return;
        }
       
        rear = (rear + 1) % capacity;
        arrQueue[rear] = val;
        size++;
        System.out.println(val + " enqueued to the queue");
    }

    int deQueue(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return -1;
        }
        
        int ele = arrQueue[front];
        front = (front + 1) % capacity;
        size--;
        return ele;
    }

    int peek(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return -1;
        }
        return arrQueue[front];
    }

    void displayQueue(){
        if(isEmpty()){
            System.out.println("Queue is empty");
            return;
        }

        for(int i=0; i<size; i++){
            int index = (front + i) % capacity;
            System.out.print(arrQueue[index] + " ");
        }
        System.out.println();
    }

    
    public static void main(String[] args) {
        QueueImpUsingArray queue = new QueueImpUsingArray(5);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        queue.displayQueue();

        System.out.println("Dequeued element: " + queue.deQueue());
        System.out.println("Front element: " + queue.peek());

        queue.displayQueue();
    }
}
