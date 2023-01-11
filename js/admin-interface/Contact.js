
class Contact {
    constructor(_userType,_email, _msg, _subject) {
        this.userType = _userType;
        this.email = _email;
        this.msg = _msg;
        this.subject = _subject;
    }

        addToHtml()
        {
            
            let msgList = document.querySelector(".msgList");
            this.newBox = document.createElement("div");
            
            msgList.appendChild(this.newBox);
            this.newBox.innerHTML = `
            <div id="mess">
                <div class="messBox">
                    <div class="sections">
                        סוג&nbsp;משתמש:
                        <br>
                        אימייל:
                        <br>
                        נושא:
                        <br>
                        <br>
                        פירוט:
                        <br>
                        <br>
                    </div>
                    <div class="info">
                        <!--פרטים אישיים עדכניים-->
                        <div class="userName">${this.userType}</div>
                        <div class="email">${this.email}</div>
                        <div class="subject">${this.subject}</div>
                        <br>
                        <div class="details">
                            <p>${this.msg}</p>
            </div>`
        }

    }