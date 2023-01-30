package Java.ThirtyDaysCodeJava;

import java.io.*;
import java.util.*;

public class Day25RunningTimeandComplexity {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int contador = 0;

        for (int i = 1; i < n; i++) {
            if ((n%i) == 0) {
                contador++;
            }
        }

        if (contador == 2) {
            System.out.println("Prime");
        } else {
            System.out.println("Not prime");
        }

    }
}