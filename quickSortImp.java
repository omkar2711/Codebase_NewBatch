public class quickSortImp {

    public static void quickSort(int[] arr, int low, int high){
        
        if(low < high){
            
            int pi = partition(arr,low, high);
            

            quickSort(arr, low, pi - 1); //Left
            quickSort(arr, pi+1, high); //Right
        }
    }

    public static int partition(int[] arr, int low, int high) {
        
        int pivot = arr[high];
        
        int i = low - 1;
        

        for(int j = low; j< high;j++){

            if(arr[j] < pivot){
                i++;
                swap(arr,i,j); //swap the elements smaller than pivot  
            }
        }

        swap(arr,i+1,high); // swap the pivot element to its correct position
        
        return i+1;
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; 
    }

      public static void displayArray(int[] arr){
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int[] arr = {31,5,1,56,456,60,-23,0,87,90};
        int n = arr.length;

        System.out.println("Array before sorting: ");
        displayArray(arr);

        quickSort(arr,0 , n-1);


        System.out.println("Array after sorting: ");
        displayArray(arr);
    }
}
