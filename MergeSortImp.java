



public class MergeSortImp {

    public static void mergeSort(int[] arr, int left, int right){
        if(left >= right) return;

        int mid = left + (right - left)/2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);

        merge(arr,left,mid,right);

    }

    public static void merge(int[] arr, int left, int mid, int right){
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for(int i = 0;i<n1;i++){
            L[i] = arr[left + i];
        }

        for(int i = 0;i<n2;i++){
            R[i] = arr[mid + 1 + i];
        }

        int i = 0;
        int j = 0;
        int k = left;

        while(i < n1 && j < n2){
            if(L[i] < R[j]){
                arr[k] = L[i];
                i++;
                k++;
            }
            else{
                arr[k] = R[j];
                j++;
                k++;
            }
        }
        while(j<n2){
            arr[k] = R[j];
            k++;
            j++;
        }

        while(i < n1){
            arr[k] = L[i];
            k++;
            i++;
        }

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

        mergeSort(arr, 0 , n-1);


        System.out.println("Array after sorting: ");
        displayArray(arr);
    }
}
