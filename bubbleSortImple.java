import java.util.*;
public class bubbleSortImple {

    public static void bubbleSort(int[] arr){
        int n = arr.length;

        boolean swapped;

        for(int i = 0;i<n-1;i++){
            swapped = false;


            for(int j = 0;j < n- i - 1;j++){

                // System.out.println( "{" + i + "," + j + "}" );
                if(arr[j] > arr[j+1]){

                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }

            if(!swapped) break;
        }
    }


    public static void main(String[] args) {
        int[] arr = {13, 4, 56, 7, 89, 23};

        System.out.println("Original Array: " + Arrays.toString(arr));

        bubbleSort(arr);

        System.out.println("Array after sorting: " + Arrays.toString(arr));

    }

}
