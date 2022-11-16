        // Add your code here
        if(!root){
            return -1;
         } else {
            // getHeight: In JavaScript, you can use the clientHeight property, which returns an element's height, including its vertical padding. Basically, it returns the actual space used by the displayed content.

            // For example, the following code returns 120, which is equal to the original height plus the vertical padding. 
            let l = this.getHeight(root.left);
            let r = this.getHeight(root.right);
            // return: The return statement ends the execution of the function and specifies a value to be returned to the caller of the function.
            return (l>r?l:r)+1;
         }