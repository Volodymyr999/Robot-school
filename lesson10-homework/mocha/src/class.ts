export class Geo {
    public constructor(
        public lat: string,
        public lng: string
    ) {}
}

export class Address {
    public constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string,
        public geo: Geo
    ) {}
}

export class Company {
    public constructor(
        public name: string,
        public catchPhrase: string,
        public bs: string
    ) {}
}

export class User {
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
