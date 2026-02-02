

public class StringsImplementation {
    public static void main(String[] args) {
        
        //String
        String name = "Pranshu";

        //StringBuilder
        StringBuilder str1 = new StringBuilder("Prasanna");

        //StringBuffer
        StringBuffer str2 = new StringBuffer("Aditya");

        System.out.println(name);

        System.out.println(str1);
        System.out.println(str2);


        name.length();
        name.charAt(1);

        str1.append(" ");
        str1.toString();
       
        char[] arr = name.toCharArray();


    }
}
