import { Cars1 } from "./Inheritance";

export class Competition {
    private cars: Cars1[];
    private distance: number;
    private ranks: any[];

    constructor(cars:Cars1[],distance: number) {
        this.cars = cars;
        this.distance = distance;
        this.ranks = this.cars
    }

    setCars(cars:Cars1[]):void{
        this.cars = cars
    }

    getCars():void{
        console.log('Mobil yang terdaftar: ');
        for (let i in this.cars) {
            console.log(`${ Number(i) + 1}.${this.cars[i].getName()} : ${this.cars[i].getSpeed()} MPH`);
        }
        
    }
    setDistance(distance:number):void {
        this.distance = distance
    }
    getDistance():number {
        return this.distance
    }
    setRaceTime():void{
        for (let car of this.ranks) {
            car.times = this.distance / car.getSpeed()
        }
    }
    race():void {
        console.log('Lomba balap mobil dimulai !!');
        for (let car of this.cars) {
            car.move()
        }
        this.setRaceTime();
        this.ranks.sort((obj1,obj2) => {
            if (obj1.times < obj2.times) {
                return -1
            } else if (obj1.times>obj2.times) {
                return 1
            }else {
                return 0
            }
        })
        console.log('Lomba balap mobil talah berakhir');
        
    }

    winner():string {
        return `Pemenang untuk lomba balap mobil kali ini ialah ${this.ranks[0].getName()} dengan waktu ${this.ranks[0].times} jam`
    }
}
