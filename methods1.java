import java.util.Scanner;

public class methods1 {    

    static int add(int a, int b){
        int sum = a + b;
        return sum;
    }

    int sub(int a, int b){
        int ans = a - b;
        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int ans = add(a , b);
        System.out.println(ans);
    }
}



// returnType methodName (Parameters){
//     //method body
// }


// methodName(arguments);
