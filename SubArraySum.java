public class SubArraySum {
    public static void main(String[] args) {
        int[] arr = {12,4,5,1,10,30,6,14,26};
        int n = arr.length;
        int r = 4;
        int maxSum;

        int windowSum = 0;
        for(int i = 0;i<r;i++){
            windowSum += arr[i]; //windowSum = windowSum + arr[i];
        }

        maxSum = windowSum;
        int i = 0;
        int j = i+r-1;

        while(i < (n-r)+1 && j < n-1){ 
            windowSum += arr[++j];
            windowSum -= arr[i++];

            maxSum = Math.max(windowSum , maxSum);
        }

        System.out.println("Maximum sum of a subArray with size " + r  + " is " + maxSum);
        

    }
}
