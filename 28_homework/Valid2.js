class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = "";
        this.passwordError = "";
        this.validate();
    }

    validate(){
        let eValid = false;
        if(this.email.length > 0){
            eValid = true;
            this.emaiError = "";
        } else {
            eValid = false;
            this.emaiError = "email empty";
        }

        let pValid = false;
        if(this.password.length > 6){
            pValid = true;
            this.passwordError = "";
        } else {
            pValid = false;
            this.passwordError = "min length 6";
        }

        this.isValid = eValid && pValid;
    }
}