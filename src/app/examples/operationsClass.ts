export class OperationsClass {
    public titleResult = '';
    public sumaResult: number | undefined;
    public suma(number1: number, number2: number){
        if(number1 == undefined && number2 == undefined){
            alert("Debes completar los campos")
        } else {
            this.titleResult='Resultado de Suma'
            this.sumaResult = number1 + number2;
        }
        
    }
}