package Java.ThirtyDaysCodeJava;

import java.util.*;
import java.io.*;
class Node{
    Node left,right;
    int data;
    Node(int data){
        this.data=data;
        left=right=null;
    }
}
class Day22BinarySearchTrees{

    public static int getHeight(Node root){
        //Write your code here
        int rigthNodeHeight = 0;
        int leftNodeHeight = 0;

        if(root == null){
            return -1;
        }

        rigthNodeHeight = getHeight(root.right);
        rigthNodeHeight++;
        leftNodeHeight = getHeight(root.left);
        leftNodeHeight++;
        if (rigthNodeHeight > leftNodeHeight) {
            return rigthNodeHeight;
        } else {
            return leftNodeHeight;
        }

    }

    public static Node insert(Node root,int data){
        if(root==null){
            return new Node(data);
        }
        else{
            Node cur;
            if(data<=root.data){
                cur=insert(root.left,data);
                root.left=cur;
            }
            else{
                cur=insert(root.right,data);
                root.right=cur;
            }
            return root;
        }
    }
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int T=sc.nextInt();
        Node root=null;
        while(T-->0){
            int data=sc.nextInt();
            root=insert(root,data);
        }
        int height=getHeight(root);
        System.out.println(height);
    }
}