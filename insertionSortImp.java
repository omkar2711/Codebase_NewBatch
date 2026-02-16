import java.util.*;

public class insertionSortImp {


    public static void insertionSort(int[] arr){

        //13 4 7 56 89 23 // 4 7 13 23 56 89 // 89 56 23 13 7 4
        //key = 23, i = 5, arr[i] = 23
        //j = 2, arr[j] = 56

        int n = arr.length;

        for(int i = 1;i<n;i++){
            int key = arr[i];
            int j = i-1;

            while(j>=0 && arr[j]> key){
                arr[j+1] = arr[j];
                j = j - 1;
            }

            arr[j+1] = key;
        }

    }
    public static void main(String[] args) {
        int[] arr = {13,4,7,56,89,23};

        System.out.println("Array before sorting: " + Arrays.toString(arr));

        System.out.println(Arrays.toString(arr));

        insertionSort(arr);

        System.out.println("Array after sorting: " + Arrays.toString(arr));
    }
}
