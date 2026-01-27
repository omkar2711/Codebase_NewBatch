import java.util.ArrayList;
import java.util.Arrays;

public class arrayImplementation {
    public static void main(String[] args) {
        

        //Static 

        int[] arr = {10,2,13,40,5,1};

        System.out.println(arr[2]);  //3

        arr[2] = 13;

        System.out.println(arr[2]); //13

        //traversing

        int n = arr.length;

        boolean isFound = false;
        int target = 2;

        for(int i = n-1;i>=0;i--){
            if(arr[i] == target){
                isFound = true;
                break;
            }else{
                isFound = false;
            }
        }

        if(isFound == true){
            System.out.println(target + " is present in the array");
        }
        else{
            System.out.println(target + " is not present in the array");
        }

        System.out.println("Before Sorting: ");
         for(int i = 0;i<n;i++){
            
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        Arrays.sort(arr);

        System.out.println("After Sorting: ");
        for(int i = 0;i<n;i++){
            System.out.print(arr[i] + " ");
        }


        //2d array

        int[][] array2d = {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };

        //Arraylist : Dynamic Array

        ArrayList<ArrayList<Integer>> arrList = new ArrayList<>();

       

        //{1,2,3}


        //Maximum Element : {10,2,13,40,5,1};


        System.out.println();
        int maxElement = arr[0];
        int minElement = arr[0];

        for(int i = 1;i<n;i++ ){
            if(maxElement < arr[i]){
                maxElement = arr[i];
            }

            if(minElement > arr[i]){
                minElement = arr[i];
            }
        }

        System.out.println("Maximum element is " + maxElement);
        System.out.println("Minimum element is " + minElement);
    }
}
