public class resursion1 {


    public static void print(int n){

        //base case
        if(n == 100){
            return;
        }

        System.out.println(n);
        
        print(n + 2); //Recursive case
    }


    public static void main(String[] args) {
        print(0);
    }
}
