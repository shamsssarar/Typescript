function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    } 
    else {
        return !value;
    }
}
// console.log(formatValue('watch'));
// console.log(formatValue(5));     
// console.log(formatValue(true));




function getLength(input: string | any[]): number {
    if (typeof input === 'string') {
        return input.length;
    }
       if (Array.isArray(input)) {
        return input.length;
    }
    return 0;
}
// console.log(getLength("deadpool"));
// console.log(getLength([10, 20, 30, 40]));




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);

// console.log(person1.getDetails()); 
// console.log(person2.getDetails());




interface Item {
    title: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}

const books: Item[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 2.2 },
    { title: 'Book C', rating: 5.0 }
];

const highRatings = filterByRating(books);

// console.log(highRatings)




interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

const users: User[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true }
];

const activeUsers = filterActiveUsers(users);

// console.log(activeUsers);




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    const details=`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`

    // console.log(details);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true
};

printBookDetails(myBook); 




type SN = string | number;

function getUniqueValues(array1: SN[], array2: SN[]): SN[] {
    const seen: { [key: string | number]: boolean } = {};
    const result: SN[] = [];

    function process(arr: SN[]): void {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            
            if (!(value in seen)) {
                result[result.length] = value; 
                seen[value] = true;
            }
        }
    }

    process(array1);
    process(array2);

    return result;
}

const array1: SN[] = [1, 2, 3, 4, 5];
const array2: SN[] = [3, 4, 5, 6, 7];
const uniqueArray = JSON.stringify (getUniqueValues(array1,array2))

// console.log(uniqueArray);




interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {

    if (products.length === 0) {
        return 0;
    }

    const totalPrice = products.reduce((accumulator, product) => {

        const baseCost = product.price * product.quantity;
        
        if (product.discount && product.discount > 0) {
            const discountAmount = baseCost * (product.discount / 100);
            
            const discountedCost = baseCost - discountAmount;
            
            return accumulator + discountedCost;
        }

        return accumulator + baseCost;
        
    }, 0);

    return totalPrice;
}

const cart: Product[] = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2, discount: 10 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

// console.log(calculateTotalPrice(cart)); 
