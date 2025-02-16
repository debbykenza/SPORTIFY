
export class User {
   constructor(
    public first_name: string,
    public last_name: string,
    public username: string,
    public password: string,
    public role?: string,
    public id?: number,

   ){

   }
  }

// export interface User {
//   first_name: string;
//   last_name: string;
//   username: string;
//   password: string;
//   role?: string;
//   id?: number;
// }
