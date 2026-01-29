public class ReverseArray {

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};

        int n = arr.length;

        int i = 0;
        int j = n-1;

        System.out.println("Array before: ");
        for(int k = 0;k<n;k++){
            System.out.print(arr[k] + " ");
        }
        System.out.println();

        while( i < j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }

         System.out.println("Array After: ");
        for(int k = 0;k<n;k++){
            System.out.print(arr[k] + " ");
        }


    }
}
