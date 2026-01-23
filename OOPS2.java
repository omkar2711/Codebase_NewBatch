 class Student {
    //Attributes
    String name;
    int age;
    char grade;


    //constructor
    Student(String n, int a, char g){
        this.name = n;
        this.age = a;
        this.grade = g;
    }



    //methods
    void printInfo(){
        System.out.println("Student Name: " + this.name);
        System.out.println("Student Age: " + this.age);
        System.out.println("Student Grade: " + this.grade);
    }

    void printName(){
        System.out.println("Name is: " + this.name);
    }

    int printAge(){
        return this.age;
    }
}

public class OOPS2 {
   public static void main(String[] args) {
       Student student1 = new Student("Pranshu", 21, 'A');
       Student student2 = new Student("Aditya",22,'A');

        student1.printName();
        System.out.println(student1.name);

        demoMethod();

        System.out.println(student1.printAge());
   } 
}
