interface Geo {
    lat: string;
    lng: string;
}
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export async function getJson(): Promise<User> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await response.json() as User;
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data.name);
    console.log(data.address.geo.lat);
})();
