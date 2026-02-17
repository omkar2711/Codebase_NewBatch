import java.util.*;

public class hashingMap {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();

        //add / update
        map.put("abc" , 92);
        map.put("efg" , 94);
        map.put("xyz" , 89);
        map.put("ijk" , 44);

        //Get
        int marks = map.get("abc");
        int score = map.getOrDefault("abc", 80);
        
        //Check
        boolean hasMarks = map.containsKey("abc");
        boolean hasMarks1 = map.containsValue(92);

        //remove
        map.remove("abc");
        map.clear();
    }
}
