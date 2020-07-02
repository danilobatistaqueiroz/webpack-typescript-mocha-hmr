class Pickle {
    constructor(private picker: Element, private background: HTMLElement) {
        picker.addEventListener('change', this.colorChange.bind(this), false);
        this.background = background;
    }

    colorChange(event: Event): void {
        let input = <HTMLInputElement>event.target;
        this.background.style.backgroundColor = input.value;
    }
}

let picker = document.querySelector('#color-picker');
if (picker) {
    new Pickle(picker, document.body);
}

class Carro {
    nome: string
    rodas: number
    portas: number
    cor: string
    marca: string
    modelo: string
    constructor(nome:string, rodas:number, marca:string, modelo:string){
        this.nome=nome;
        this.rodas=rodas;
        this.marca=marca;
        this.modelo=modelo;
    }
    public descricaoCompleta() {
        let descricao = `Carro da marca ${this.marca} modelo ${this.modelo}.`;
        return descricao;
    }
}

let descricao1 = document.querySelector('#descricao-completa');
let btn = document.querySelector('#btnDescricao');
btn.addEventListener("click", descricao);
function descricao(){
    if((<HTMLInputElement>descricao1).value!=''){
        console.log('ja alterado');
    }
    let descricao = document.querySelector('#descricao-completa');
    let carro = new Carro('Gol',4,'Volks', 'New');
    let texto = carro.descricaoCompleta();
    (<HTMLInputElement>descricao).value = texto;
}