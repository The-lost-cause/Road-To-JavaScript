// Static Method in a class


class User {
    
    static StaticMethod() {
        console.log('I\'m a Static Method');
    }
}

console.log(User.StaticMethod());

// Static Properties

class Article {

    static publisher = 'Karan';

}

console.log(Article.publisher);

// Instance of operator


class Bong { };
let bong = new Bong();

console.log(bong instanceof Bong);

// Custom Logic : Symbol.hasInstance

class Leenu {
    static [Symbol.hasInstance](obj) {
        if(obj.canEat) return true;
    }
}

let obj = { canEat: true };
console.log(obj instanceof Leenu);