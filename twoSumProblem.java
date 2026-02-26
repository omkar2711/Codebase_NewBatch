import java.util.*;

public class twoSumProblem {



    public static int[] TwoSum(int[] arr, int target){
        int n = arr.length;
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i = 0;i<n;i++){
            int find = target - arr[i];
            if(map.containsKey(find)){
                return new int[]{i, map.get(find)};
            }
            map.put(arr[i],i);
        }
        
        return new int[]{-1,-1};
    }






    public static void main(String[] args) {
        int[] arr = {2,5,7,9,11};
       
        int target = 14;

        int[] ans = TwoSum(arr, target);

        System.out.println("Index found are " + ans[0] + ", " + ans[1]);

    }
}
