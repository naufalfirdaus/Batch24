export class Cars1 {
    protected brand: string;
    protected speed: number;
    protected price: number;

    constructor (brand:string, speed:number, price: number) {
        this.brand = brand;
        this.price = price;
        this.speed = speed;
    }

    setBrand(brand:string):void {
        this.brand = brand
    }
    setSpeed(speed:number):void {
        this.speed = speed
    }
    setPrice(price:number):void {
        this.price = price
    }
    getBrand(): string {
    return this.brand;
    };
    getSpeed(): number {
    return this.speed;
    }
    getPrice(): string {
    return `${ this.price }`;
    }
    getName(): string {
    return this.brand;
    };
    move(): void {
    console.log(`${ this.brand } berjalan
    dengan kencang`);
    };
    }

export class Hennessey extends Cars1 {
    private model: string;

    constructor(brand:string,speed:number,price:number,model:string){
        super(brand,speed,price);
        this.model = model
    }

    move():void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName():string {
        return `${this.brand} ${this.model}`
    }
}
export class Koenigsegg extends Cars1 {
    private model:string; 
    constructor(brand:string,speed:number,price:number,model:string){
        super(brand,speed,price);
        this.model = model
    }

    move():void {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }

    getName():string {
        return `${this.brand} ${this.model}`
    }
}

const venom = new Hennessey('Hennessey',270,1200000,'Venom GT')
const agera = new Koenigsegg('Koenigsegg',273,2500000,'Agera RS')


venom.move()
agera.move()