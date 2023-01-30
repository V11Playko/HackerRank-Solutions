package Java.ThirtyDaysCodeJava;

import java.io.*;
import java.util.*;
class Nodee{
    int data;
    Nodee next;
    Nodee(int d){
        data=d;
        next=null;
    }

}
class Day24MoreLinkedLists
{

    public static Nodee removeDuplicates(Nodee head) {
        //Write your code here
        Nodee node = head;
        while (node.next != null) {
            if (node.data == node.next.data) {
                node.next = node.next.next;
            }
            else{
                node = node.next;
            }
        }
        return head;
    }

    public static  Nodee insert(Nodee head,int data)
    {
        Nodee p=new Nodee(data);
        if(head==null)
            head=p;
        else if(head.next==null)
            head.next=p;
        else
        {
            Nodee start=head;
            while(start.next!=null)
                start=start.next;
            start.next=p;

        }
        return head;
    }
    public static void display(Nodee head)
    {
        Nodee start=head;
        while(start!=null)
        {
            System.out.print(start.data+" ");
            start=start.next;
        }
    }
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        Nodee head=null;
        int T=sc.nextInt();
        while(T-->0){
            int ele=sc.nextInt();
            head=insert(head,ele);
        }
        head=removeDuplicates(head);
        display(head);

    }
}
