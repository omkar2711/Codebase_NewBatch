import java.util.LinkedList;


public class linkedList1 {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();

        //10 20 

        list.add(10);
        list.add(20);
        list.addFirst(30);

        System.out.println(list);

        list.removeFirst();

        System.out.println(list);

        list.removeLast();

        System.out.println(list);
    }
}
