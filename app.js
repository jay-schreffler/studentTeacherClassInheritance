// User Class

class User {
    constructor(firstName,lastName,email,location,wifiNetwork) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._location = location;
        this._wifiNetwork = wifiNetwork;
        this._domain = 'GMSD';
    }

    get userInfo() {
        return `${this._firstName} ${this._lastName} - ${this._email} - Location: ${this._location}`
    }
}

class Teacher extends User {
    constructor(firstName,lastName,email,location,wifiNetwork,classList,phoneExtension,roomNumber){
        super(firstName,lastName,email,location,wifiNetwork)
        this._classList = classList;
        this._phoneExtension = phoneExtension;
        this._roomNumber = roomNumber;
        this._vmAccess = true;
    }

    get roster(){
        return this._classList;
    }

    set vmAccess(input) {
        if(typeof input === "boolean") {
            this._vmAccess = input
        } else {
            console.log('Must be set to True or False.')
        }
    }
}

//Users

const tim = new User('Tim','G','timg@gm.edu','High School');

console.log(tim.userInfo)

//Teachers 

const hoge = new Teacher('Bridget','Hoge','bridgeHoge@gm.org','Mckean','Facutly',['Mary Poppins','Carrie Spooner'],2020)

console.log(hoge.userInfo)
console.log(hoge.roster)
console.log(hoge._vmAccess)
hoge.vmAccess = false;
console.log(hoge._vmAccess)

//Students
