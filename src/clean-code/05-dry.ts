type size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: size = '',
    ) {}

    toString() {
        for( const key in this){
            switch (typeof this[key]) {
                case 'string':
                    console.log(`${key}: ${this[key]}`);
                    break;
                case 'number':
                    console.log(`${key}: ${this[key]}`);
                    break;
                default:
                    break;
            }
            // console.log( typeof this[key])
        }

        return `${this.name} - ${this.price} - ${this.size}`;
    }
}

( () => {
    const bluePants = new Product('Blue large pants');
    console.log(bluePants.toString());
})();