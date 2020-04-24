//Array Class: Implementada porque los arreglos por defecto de JS son dinámicos y no nos sirven para este ejercicio
class GenericArray {
  constructor(size) {
    this.size = size;
    this.data = {};
  }

  push(element) {
    this.data[this.size] = element;
    this.size++;
    return this.data;
  }

  pop() {
    let item = this.data[this.size-1];
    delete this.data[this.size-1];
    this.size--;
    return this.data;
  }

  insertAt(item, index) {
    for(let i=this.size;i>=index;i--) {
      this.data[i]=this.data[i-1];
    }
    this.data[index]=item;
    this.size++;
    return this.data;
  }

  getElementAtIndex(index) {
    return this.data[index];
  }
}


//ArrayList Class
class GenericArrayList{

  constructor(size){
    this.size = size;
    this.count = 0;
    this.position = 0;
    this.array = new GenericArray(this.size);
  }

  empty() {
    return this.count<=0;
  }

  full() {
    return this.count >= this.size;
  }

  insert(item) {
    let inserted = true;
    if(!this.full()) {
      if (!this.search(item)) {
        for (let j = this.count; j > this.position; j--) {
          this.array.insertAt(this.array.getElementAtIndex(j-1),j);
        }
        this.array.insertAt(item, this.position);
        this.count++;
        return inserted;
      } else {
        console.log("List is Full");
        return !inserted;
      }
    }
  }

  delete(item) {
    let deleted = true;
    if(!this.empty()) {
      if (this.search(item)) {
        for (let j = this.position; j < this.count - 1; j++) {
          this.array.insertAt(this.array.getElementAtIndex(j + 1), j);
        }
        this.count--;
        return deleted;
      } else {
        console.log("List is Empty");
        return !deleted;
      }
    }
  }

  search(item) {
    let found = false;
    let stop = false;
    this.position = 0;
    while(this.position < this.count && !stop)
      if(((this.array.getElementAtIndex(this.position).productName).localeCompare(item.productName)) <= 0) {
        stop = true;
        if((this.array.getElementAtIndex(this.position).productName) === item.productName){
          found = true;
        }
      }else{
        this.position++;
        return found;
      }
  }

  //Solo está imprimiendo el precio de los productos, por conveniencia para probar
  output() {
    console.log('List: ');
    let j = 0;
    while(j != this.count) {
      console.log(this.array.getElementAtIndex(j).productPrice+" ");
      j++;
    }
  }

}


//Product Class
class Product{
  constructor(name, code, price) {
    this.productName  = name;
    this.productCode  = code;
    this.productPrice = price;
  }
}

//Funcion que crea Pruductos "aleatoriamente"
function make_attribute(length, attribute) {
  let result           = '';
  let numbers          = '0123456789';
  let code             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    if(attribute=='name'){
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } else if (attribute=='code'){
      result += code.charAt(Math.floor(Math.random() * charactersLength));
    } else if (attribute=='price'){
      result += numbers.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}

function insert_products(){
  for (let i=0; i<product_array_list.size+1; i++){
    let name = make_attribute(15,'name');
    let code = make_attribute(10,'code');
    let price_length = Math.round(Math.random()*100);
    let price = make_attribute(price_length,'price');
    let product = new Product(name, code, price);
    product_array_list.insert(product);
  }
}

let product_array_list = new GenericArrayList(15);

insert_products();

//Imprime el tiempo de ejecución
let start = new Date()
let hrstart = process.hrtime()
let simulateTime = 5

setTimeout(function(argument) {
  let end = new Date() - start,
    hrend = process.hrtime(hrstart)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, simulateTime)

//Imprime el listado de objetos. Solo imprimirá el precio de los productos. Revise la función output de GenericArrayList
product_array_list.output();




