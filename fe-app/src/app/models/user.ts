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

export interface JwtSession {
    token: string;
    user: UserSession
}
export interface UserSession {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: "admin" | "staff";
}
