import java.util.*;
public class hashingSet {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();


        //Add (ignores duplicate)
        set.add(10);
        set.add(20);
        set.add(30);


        set.addAll(List.of(40,50));

        //check
        set.contains(10);
        set.size();
        set.isEmpty();


        //remove
        set.remove(10);
        set.clear();


        for(Integer num : set){
            System.out.println(num);
        }




    }
}
