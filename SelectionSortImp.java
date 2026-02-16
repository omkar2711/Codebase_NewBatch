import java.util.*;
public class SelectionSortImp {

    //4 7 13 23 56 89

    public static void selectionSort(int[] arr){
        int n = arr.length;

        for(int i = 0;i<n-1;i++){
            int minIndex = i;

            for(int j = i+1;j<n;j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }

            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;

        }

    }
    public static void main(String[] args) {
        int[] arr = {13, 4, 56, 7, 89, 23};

        System.out.println("Array before sorting: " + Arrays.toString(arr));
        
        selectionSort(arr);

        System.out.println("Array After sorting: " + Arrays.toString(arr));
    }
}
