
class Car {

    //attributes
    String color;
    String model;
    int year;

    //constructor
    Car(String c, String m, int y){
        this.color = c;
        this.model = m;
        this.year = y;
    }
 
    //methods
    void start(){
        System.out.println("Car has started!");
    }
    void turnLeft(){
        System.out.println("Car turned left");
    }
    void turnRight(){
        System.out.println("Car turned right");
    }

    void details(){
        System.out.println("Color of the car is " + this.color + " model is " + this.model  + " year " + this.year );
    }
}



public class OOPS1 {
    public static void main(String[] args) {
        Car myCar =  new Car("Black","BMW", 2025);
        myCar.start();
        myCar.details();
        myCar.turnLeft();
        myCar.turnRight();

        System.out.println("Color: " + myCar.color);



        Car myCar1 = new Car("red","Tata",2024);
        myCar1.details();

    }
}
