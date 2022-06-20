        // Add your code here
        if(!root){
            return -1;
         } else {
            // getHeight: In JavaScript, you can use the clientHeight property, which returns an element's height, including its vertical padding. Basically, it returns the actual space used by the displayed content.
            let l = this.getHeight(root.left);
            let r = this.getHeight(root.right);
            return (l>r?l:r)+1;
         }