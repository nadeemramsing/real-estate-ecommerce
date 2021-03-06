/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Building = db.model('building')
var Cart = db.model('cart')
var Order = db.model('order')
var Review = db.model('review');
var PurchasedBuilding = db.model('purchasedBuilding');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            name: 'test ing',
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            name: 'Barak Obama',
            email: 'obama@gmail.com',
            password: 'potus'
        },
        {
            name: 'admin',
            email: 'admin@gmail.com',
            password: 'a',
            isAdmin: true
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedReviews = function(){
    var reviews = [
    {
     headline: "this building is so so-so",
     review:"This string should probably be over 250 characters just to be safe, so we know that it definetly works, and is not broken. To confirm that this string can be over 250 characters, this paragaph is going to continue on and on, till it reaches 250 characters, I am going to guess this is not over 250 characters.",
     numOfStars:"1",
     buildingId:"2",
     userId:"2"
    },{
        headline: "this is the nickleback of buildings",
        review:"Second Review this building is just aiiiittteeee",
     numOfStars:"2",
     buildingId:"2",
     userId:"1"
    },
    {
        headline: "this building is missing a roof",
        review:"this building is not so good",
     numOfStars:"3",
     buildingId:"2",
     userId:"1"
    },
    {
        headline: "HEADLINES@@@@!!!!",
        review:"REVIEW FOR BUILDING 3!!!!",
     numOfStars:"3",
     buildingId:"2",
     userId:"3"
    }
    ]
   var creatingReviews = reviews.map(function (reviewObj) {
        return Review.create(reviewObj);
    });

    return Promise.all(creatingReviews);

};

var seedCarts = function(){
    var carts = [
    {
     userId: "2"
    },
    {
     userId:"3"
    }
    ]
   var creatingCarts = carts.map(function (cartObj) {
        return Cart.create(cartObj);
    });

    return Promise.all(creatingCarts);

};

// create getter method for total price
var seedOrders = function() {
     var orders = [
         {
             userId: "2",
             cartId: "1",
             email: "example@email.com",
             creditCard: "1234 5678 9012 3456",
             name: "Name",
             address1: "123 Address Lane",
             city: "Fake City",
             state: "Fake State",
             zipCode: "10000",
             orderStatus: 'Created'
         },
         {
             userId:"3",
             cartId:"2",
             email: "example@email.com",
             creditCard: "1234 5678 9012 3456",
             name: "Fake Name",
             address1: "123 Address Lane",
             city: "Fake City",
             state: "Fake State",
             zipCode: "10000",
             orderStatus: 'Processing'
         },
         {
             userId:"3",
             cartId:"2",
             email: "example@email.com",
             creditCard: "1234 5678 9012 3456",
             name: "Name",
             address1: "123 Address Lane",
             city: "Fake City",
             state: "Fake State",
             zipCode: "10000",
             orderStatus: 'Cancelled'
         },
         {
             userId:"3",
             cartId:"1",
             email: "example@email.com",
             creditCard: "1234 5678 9012 3456",
             name: "Name",
             address1: "123 Address Lane",
             city: "Fake City",
             state: "Fake State",
             zipCode: "10000",
             orderStatus: 'Completed'
         }
     ]

    var creatingOrders = orders.map(function (orderObj) {
         return Order.create(orderObj)
            .then(order => {
                order.setPurchasedBuildings([1,2]);
            });
     });

     return Promise.all(creatingOrders);
}

var seedPurchasedBuildings = function() {
    var purchasedBuilding = [
        {
            purchasePrice: "100",
            buildingId: "1"
        },
        {
            purchasePrice: "300",
            buildingId: "2"
        }
    ]

    var creatingPurchasedBuildings = purchasedBuilding.map(function(pBuilding) {
        return PurchasedBuilding.create(pBuilding);
    })

    return Promise.all(creatingPurchasedBuildings);

}

var seedBuildings = function (){
    var buildings = [
    {
        streetAddress: "123 Main Street",
        city: "New York City",
        state: "New York",
        zipCode: "10001",
        price: "123456",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://i2.cdn.turner.com/cnnnext/dam/assets/140218103215-sheraton-huzhou-hot-spring-resort-horizontal-large-gallery.jpg',
        description: "One of the first buildings ever added to the database"

    },
     {
        streetAddress: "345 Main Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://www.heltzelaia.com/portfolio/extra-portfolio/12_HeltzelAIA.jpg',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "789 Main Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://www.heltzelaia.com/portfolio/extra-portfolio/12_HeltzelAIA.jpg',
        description: 'Second building to ever be added to the databse'

    },  {
        streetAddress: "7 Newhouse Ave",
        city: "New York City",
        state: "New York",
        zipCode: "10007",
        price: "567856",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/31/1/1031/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303738',
        description: "4th building ever added to the database"

    },
     {
        streetAddress: "99 Inifinty Loop",
        city: "Manhattan",
        state: "New York",
        zipCode: "10003",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/33/1/1033/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303739',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "1 1st ave",
        city: "Manhattan",
        state: "New York",
        zipCode: "10004",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/34/1/1034/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409303739',
        description: 'Second building to ever be added to the databse'

    },  {
        streetAddress: "44 twisty Lane",
        city: "New York City",
        state: "New York",
        zipCode: "10001",
        price: "123456",
        propertyType: 'Commercial',
        lotSize: '7000 sq ft',
        stories: '25',
        numberOfUnits: '50',
        architecturalStyle: 'Modern',
        buildingAge: '7',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/39/1/1039/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304312',
        description: "One of the first buildings ever added to the database"

    },
     {
        streetAddress: "33 slanted road",
        city: "Manhattan",
        state: "New York",
        zipCode: "10002",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '2',
        numberOfUnits: '5',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/40/1/1040/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304313',
        description: 'Second building to ever be added to the databse'

    },
     {
        streetAddress: "66 Guitar Street",
        city: "Manhattan",
        state: "New York",
        zipCode: "10006",
        price: "223456",
        propertyType: 'Residential',
        lotSize: '2000 sq ft',
        stories: '100',
        numberOfUnits: '90',
        architecturalStyle: 'Modern',
        buildingAge: '2',
        photoURL: 'http://cdn.homesandhues.com/images/gallery/41/1/1041/211_11-Totally-Weird-Buildings-From-Around-the-World_0-f.jpg?v=1409304313',
        description: 'Second building to ever be added to the databse'

    }
    ];
       var creatingBuildings = buildings.map(function (buildingObj) {
        return Building.create(buildingObj);
    });

    return Promise.all(creatingBuildings);

}




db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function (){
        return seedBuildings();
    })
    .then(function(){
        return seedCarts();
    })
    .then(function(){
        return seedOrders();
    })
    .then(function(){
        return seedPurchasedBuildings();
    })
    .then(function(){
        return seedReviews();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
