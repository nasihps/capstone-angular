export class UserRegister{

    id : number;
    username : string;
    password : string;
    name : string;
    timezone : string;
    organization : string;

    constructor (id:number, username:string, password:string, name: string, timezone : string, organization : string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.timezone = timezone;
        this.organization = organization;
    }

}