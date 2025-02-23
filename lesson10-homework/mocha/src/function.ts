import { User } from './class';
import { User3 } from './interface';

export async function getJson(): Promise<User> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await response.json();
    return json;
}

export async function getJson3(): Promise<User3> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await response.json() as User3;
    return json;
}
