class Valid {
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.isValid = false;
        this.validate();
    }

    validate (){
        if(this.password.length > 6) this.isValid = true;
        else this.isValid = false;
    }
}