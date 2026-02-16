public class linearSearch {
    public static void main(String[] args) {
        int[] arr = {4,1,52,18,30,45};

        int target = 27;

        int index = LinearSearchAlgo(arr, target);

        if(index == -1){
            System.out.println("Element not found");
        }
        else{
            System.out.println("Element found at index: " + index);
        }
    }


    public static int LinearSearchAlgo(int[] arr, int target){

        for(int i = 0;i<arr.length;i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
}
