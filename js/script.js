// Form handler for email sign up

console.log("loaded script.js");

function logEmail() {
  event.preventDefault();
  var custEmail = document.emailSignup.email.value
  console.log("Thanks for signing up for our mailing list!  You will receive promotions and discounts at " + custEmail)
  document.getElementById("afterSubmit").innerHTML = "Thanks for Signing up!";
  
}

// Add to and remove items from the cart.  Then calculate the total cost of all items in the cart

var cart = []

function addToCart(productName, productPrice) {
  //put a space in between function calls to improve console readability
  console.log(" ")
  
  //if the cart is empty add the new element exactly as it is provided by the onClick
  if(cart.length == 0) {
    var productSubArray = [productName, productPrice, 1];
    cart.push(productSubArray);
  } else {
    //inititate a new variable to keep track if the product was previously added to the cart
    var alreadyInCart = 'No';

    for (i = 0; i < cart.length; i++) {
      //if the item is already in the cart increment the orderCount by 1 (the value at index 2)
      if(cart[i][0] == productName){
        orderCount = cart[i][2] + 1
        var productSubArray = [productName, productPrice, orderCount];
        cart.splice(i, 1)
        cart.push(productSubArray);
        alreadyInCart = 'Yes';
      }
    }
    //if the item was not already in the cart add a new entry to the array
    if(alreadyInCart == 'No') {
      var productSubArray = [productName, productPrice, 1];
      cart.push(productSubArray);
    }
  }
  //call a function to calculate the current cost of all items in the cart
  calculateCartValue(productPrice, cart)
  //console log all of the items in the cart and print each product plus the quantity on seperate lines
  console.log("Currently you have the following items in your cart:");
  for (i = 0; i < cart.length; i++) {
    console.log(cart[i][2]+ ": " + cart[i][0])
  }
}

function removeFromCart(productName, productPrice) {
  //put a space in between function calls to improve console readability
  console.log(" ")
  
  //if the cart is empty let the user know that there is nothing to remove.
  if(cart.length == 0) {
    console.log("You do not have anything in your cart! So, there is nothing to remove!");
  }else {
    //inititate a new variable to keep track if the product was previously added to the cart
    var alreadyInCart = 'No';
    for (i = 0; i < cart.length; i++) {
      if (cart[i][0] == productName){
        //if there is only one item in the nested product array then remove the entire array from the cart
        if(cart[i][2] == 1) {
          cart.splice(i, 1)
          alreadyInCart = 'Yes';
        //if the order count is greater than 1 then subtract from that value by 1
        } else {
          orderCount = cart[i][2] - 1;
          var productSubArray = [productName, productPrice, orderCount];
          cart.splice(i, 1)
          cart.push(productSubArray);
          alreadyInCart = 'Yes';
        }
      }
    }
    //if the cart has items but not this product inform the user
    if(alreadyInCart == 'No') {
      console.log("You do not have a " + productName + " in your cart! So, there is nothing to remove!");
    }
    //call a function to calculate the current cost of all items in the cart
    calculateCartValue(productPrice, cart)
    //console log all of the items in the cart and print each product plus the quantity on seperate lines
    console.log("Currently you have the following items in your cart:");
    for (i = 0; i < cart.length; i++) {
      console.log(cart[i][2]+ ": " + cart[i][0])
    }
  } 
}

function calculateCartValue(productPrice, cart){
  //always start with a blank cost and recalculate after each onClick
  var cartPrice = 0.0
  for (i = 0; i < cart.length; i++) {
    cartPrice = cartPrice + cart[i][1] * cart[i][2]
  }
  console.log("The price of all the items currently in your cart is $" + cartPrice)
}

// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

