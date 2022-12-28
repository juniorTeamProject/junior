class Job {
    constructor(_img, _name, _location, _scope, _type,_information) {
        this.img = _img;
        this.name = _name;
        this.location = _location;
        this.scope = _scope;
        this.type = _type;
        this.information = _information
    }

        addToHtml()
        {
            
            let jobList = document.querySelector(".joblist");
            this.newBox = document.createElement("div");
            
            jobList.appendChild(this.newBox);
            this.newBox.innerHTML = `<div class="first">
            <div class="right-side">
                <div class="number"><i id = "iconJob" class="fa fa-circle" aria-hidden="true"></i></div>
            </div>
            <div class="left-side">
                <div class="top">
                    <!-- picture -->
                    <div class="picture">
                        <img src="${this.img}" height="70" width="70">
                    </div>
                    <!-- information -->
                    <div class="info">
                        
                        <h1 style="color:#281158"> ${this.name} </h1>
                        <section>
                            <p> מיקום: <p2 class = "location"> ${this.location}</p2>
                            </p>
                            <p> משרה: <p2 class = "type"> ${this.type}  </p2>
                            </p>
                            <p> סוג: <p2 class = "scope"> ${this.scope} </p2>
                            </p>
                        </section>
                        <div class="icons">
                            <p3>
                                <i onclick = "likeBttn(e)" class="fa fa-heart" aria-hidden="true"></i>
                                <button class="appley"> הגש </button>
                            </p3>
                        </div>
                    </div>
                </div>
                <!-- the explanation of the job -->
                <div class="bottom">
                    <p>
                    ${this.information}
                    </p>
                </div>
            </div>
        </div>`
        }
    
   
}

