//Clase Product: Clase con atributos de los productos de Donburi
class Product{
    constructor(name, code, price, imageSource) {

        this.productName  = name;
        this.productCode  = code;
        this.productPrice = price;
        this.img = imageSource;
        this.details = "Utamur hendrerit cu est. Nihil torquatos qui ut. Mollis malorum perfecto vix ne. " +
            "Quo id tritani discere dolores, noster eirmod ancillae an sea, ut cum debet delenit accusamus. " +
            "Duo ex oporteat imperdiet urbanitas.";
        this.inCart = false;
        this.count = 0;
        this.total = 0;

    }
}
export default Product;

