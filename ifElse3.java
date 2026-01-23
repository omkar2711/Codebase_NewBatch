public class ifElse3 {
    public static void main(String[] args) {
        int temperature = 9;

        if(temperature >= 30){
            System.out.println("Hot Weather");
        }
        else if((temperature < 30) && (temperature >= 20)){
            System.out.println("Mild Weather");
        }
        else if((temperature < 20) && (temperature >= 10)){
            System.out.println("Cold Weather");
        }
        else{
            System.out.println("Extreme cold");
        }
    }
}
