public class binarySearch {

// Preq : Array should always be sorted
    public static int binarySearchAlgo(int[] arr, int target){
        int low = 0;
        int high = arr.length-1;

        while(low <= high){
            int mid = low + (high - low)/2;

            if(arr[mid] == target){
                return mid;
            }
            else if(target > arr[mid]){
                low = mid+1;
            }
            else{
                high = mid - 1;
            }
        }

        return -1;

    }
    public static void main(String[] args) {
        int[] arr = {1,4,18,30,45,52};

        int target = 27;

        int index = binarySearchAlgo(arr, target);

         if(index == -1){
            System.out.println("Element not found");
        }
        else{
            System.out.println("Element found at index: " + index);
        }

    
    }
}
