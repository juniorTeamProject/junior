class Junior extends User{
    #scopeJob; // היקף משרה
    #typeJob   // סוג משרה
    #education // השכלה
    #jobField // תחום משרה
    
    constructor({name, email ,password,scopeJob,typeJob,education,jobField}){
        super(name,email,password)
        this.scopeJob =scopeJob;
        this.#typeJob = typeJob;
        this.#education = education;
        this.#jobField = jobField;

    }
}


