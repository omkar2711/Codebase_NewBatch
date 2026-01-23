public class forloop1 {
    public static void main(String[] args) {
    
        // for(intitalization, condition, increment/decrement){

        // }

        //Nested For loop
        for(int i = 1 ;i < 10;i++){

            for(int j = 1;j<10;j++){
               System.out.println(i +" "+ j);
            }

        }



        for(int i = 6 ;i >= 1;i--){ //i = 2
           for(int j = 1; j <= i; j++){ //j = 1
                System.out.print("*");
           }
           System.out.println();
        }
    }
}
