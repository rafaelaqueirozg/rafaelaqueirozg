export namespace UserInterfaces {
  export namespace Send {
    export class Login {
      email: string;
      password: string;
    }
  }
  export namespace Receive {
    export class User {
      name: string;
      email: string;
      token: string;
      password: string;
    }
  }
}
