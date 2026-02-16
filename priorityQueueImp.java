
import java.util.PriorityQueue;


public class priorityQueueImp {
    public static void main(String[] args) {
        PriorityQueue<Character> pq = new PriorityQueue<>();

        pq.add('z'); //O(log(n))
        pq.add('m');
        pq.add('l');
        pq.add('e');
        pq.add('m');
        pq.add('y');

        //insert : add/offer -> O(log(n))
        //remove : poll -> O(log(n))
        //peek -> O(1)
        //search -> O(log(n))

        //characteristics
        //1. no null values
        //2. not thread-safe
        //3. no specific iteration order unless using poll


        System.out.println("Head of the queue " + pq.peek()); //O(1)
        
        while(!pq.isEmpty()){
            System.out.println(pq.poll()); //O(log(n))
        }
    }
}
