export interface User {
    username: string;
    password: string;
    firstName: string;
    lastname: string;
    role: string;
}

export interface UserLogin {
    username: string;
    password: string;
}