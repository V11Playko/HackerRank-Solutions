package Java.ThirtyDaysCodeJava;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



public class Day10BinaryNumbers {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        int binaryNums = 0;
        int count =0;


        while(n > 0){

            int i = n%2;

            if(i == 0){
                count=0;
            }
            else {
                count++;
                binaryNums = Math.max(binaryNums, count);
            }
            n/=2;
        }
        System.out.println(binaryNums);
        bufferedReader.close();
    }
}
