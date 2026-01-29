import java.util.Scanner;

public class PairSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(); //Input the lenght of the array

        int[] arr = new int[n]; //Decleration of the array

        for(int i = 0;i<n;i++){
            arr[i] = sc.nextInt();
        }

        int target = sc.nextInt();

        for(int i = 0;i<n-1;i++){
            for(int j = i+1; j<n;j++){
                if(arr[i] + arr[j] == target){
                    System.out.println("The indexs are " + i + ", " + j);
                    break;
                }
            }
        }

    }
}
