public class leapYear {
    public static void main(String[] args) {
        int year = 1800;

        if((year % 400 == 0) || ((year % 4 == 0 ) && (year % 100 != 0))){
            System.out.println("Leap year");
        }
        else{
            System.out.println("This is not a leap year");
        }
    }
}
