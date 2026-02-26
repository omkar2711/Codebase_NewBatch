public class fiboRec {

    public static int fibo(int n, int[] dp) {
        if(n <= 1 ){
            return n;
        }

        if(dp[n] != 0){
            return dp[n];
        }

        dp[n] = fibo(n-1, dp) + fibo(n-2, dp);
        return dp[n];
    }
    public static void main(String[] args) {
        int[] dp = new int[10];
        System.out.println(fibo(5, dp));
    }
}
