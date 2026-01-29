public class arrayImplementation1 {
    public static void main(String[] args) {
        
        //Static
        int[] arr = {1,2,3,4,5};


        //Dynamic
        int[] arr1 = new int[5]; 

        
        arr[2] = 30;

        //traversing
        int n = arr.length;
        for(int i = 0;i<n;i++){
            System.out.print(arr[i] + " ");
        }

        System.out.println();

        for(int num : arr){
            System.out.print(num + " ");
        }

        System.out.println();

        //Searching
        //    - Linear Search
        int target = 3;
        boolean isFound = false;

        for(int i = 0;i<n;i++){
            if(arr[i] == target){
               isFound = true;
               break;
            }
        }

        if(isFound == true){
            System.out.println(target + " Element is found in the array");
        }
        else{
            System.out.println("not found");
        }

        //sorting
       




        
    }
}
