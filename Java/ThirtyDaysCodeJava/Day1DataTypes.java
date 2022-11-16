package Java.ThirtyDaysCodeJava;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Day1DataTypes {

    public static void main(String[] args) {
        int i = 4;
        double d = 4.0;
        String s = "HackerRank ";

        Scanner scan = new Scanner(System.in);

        /* Declare second integer, double, and String variables. */
        int i2 = scan.nextInt();
        double d2 = scan.nextDouble();
        scan.nextLine();
        String s2 =scan.nextLine();

        /* Print the sum of both integer variables on a new line. */
        System.out.println(i + i2);
        /* Print the sum of the double variables on a new line. */
        System.out.println(d + d2);
                /* Concatenate and print the String variables on a new line;
        	    the 's' variable above should be printed first. */
        System.out.println(s + s2);

        scan.close();
    }
}