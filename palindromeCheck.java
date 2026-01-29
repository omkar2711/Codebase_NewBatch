public class palindromeCheck {
    public static void main(String[] args) {
        int[] arr = {1,2,2,3,4,2,2,1};

        int n = arr.length;
        int i = 0;
        int j = n - 1;

        boolean isPalindrome = true;

        while(i < j){
            if(arr[i] == arr[j]){
                i++;
                j--;
            }
            else{
                isPalindrome = false;
                break;
            }
        }

        if(isPalindrome == true){
            System.out.println("Array is palindrome");
        }
        else{
            System.out.println("Array is not a palindrome");
        }
    }
}
