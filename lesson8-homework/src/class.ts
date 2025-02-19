class Geo {
    public constructor(
        public lat: string,
        public lng: string
    ) {}
}

class Address {
    public constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string,
        public geo: Geo
    ) {}
}

class Company {
    public constructor(
        public name: string,
        public catchPhrase: string,
        public bs: string
    ) {}
}

class User {
    public constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company
    ) {}

    // Реалізація методу в класі
    public displayInfo(): void {
        console.log(`User: ${this.name} (${this.username})`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}`);
        console.log(`Company: ${this.company.name}`);
    }
}

async function getJson(): Promise<User> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await response.json();
    return json;
}
/*
(async () => {
    const data = await getJson();
    console.log(data.name);
    console.log(data.address.geo.lat);
    console.log('--------------');
})();
*/


(async () => {
    const data = await getJson();
    console.log(data.name);
    console.log(data.address.geo.lat);
    console.log('--------------');
    const geo = new Geo("-37.3159", "81.1496");
    const address = new Address("Kulas Light", "Apt. 556", "Gwenborough", "92998-3874", geo);
    const company = new Company("Delasport", "Multi-layered client-server neural-net", "harness real-time e-markets");
    const user = new User(1, "Volodymyr", "Sport", "Sincere@april.biz", address, "1-770-736-8031 x56442", "hildegard.org", company);
    user.displayInfo();
    const geo2 = new Geo("-37", "81");
    console.log(geo2);
})();
