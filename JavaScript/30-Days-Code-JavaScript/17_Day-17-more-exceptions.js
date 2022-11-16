//Write your code here
function Calculator() {
    this.power = (n,p) => {
        try {
            if(n >= 0 && p >= 0){
                return Math.pow(n,p);
            } else{
                //throw: Throws a user-defined exception.
                throw("n and p should be non-negative")
            }
        } catch(error) {
            throw(error);
        }
    }
}