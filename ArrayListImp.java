import java.util.*;
public class ArrayListImp {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(10);

        //insertion
        list.add(10);
        list.add(1,20);

        //access 
        list.get(0);

        //update
        list.set(0,20);

        //remove
        list.remove(0);
        list.remove(Integer.valueOf(20));


        //size();
        list.size();
        list.isEmpty();
        list.contains(20);

        //traversing
        for(int i = 0;i<list.size();i++){
            System.out.println(list.get(i));
        }

        for( int num : list){
            System.out.println(num);
        }

        Iterator<Integer> it = list.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }


    }
}
