export class Car {
    name: string
    ports: number
    model: string
    constructor(name:string, ports:number, model:string){
        this.name=name;
        this.ports=ports;
        this.model=model;
    }
    public fullDescription() {
        let description = `Car ${this.name} model ${this.model} has ${this.ports} ports.`;
        return description;
    }
}