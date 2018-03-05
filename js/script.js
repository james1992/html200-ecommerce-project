// Form handler for email sign up

console.log("loaded script.js");

function logEmail() {
  event.preventDefault();
  var custEmail = document.emailSignup.email.value
  console.log("Thanks for signing up for our mailing list!  You will receive promotions and discounts at " + custEmail)
  document.getElementById("afterSubmit").innerHTML = "Thanks for Signing up!";
  
}

var cart = []

function addToCart(productName, productPrice) {
  if(cart.length == 0) {
    var productSubArray = [productName, productPrice, 1];
    cart.push(productSubArray);
  } else {
    var alreadyInCart = 'No';

    for (i = 0; i < cart.length; i++) {
      console.log(cart[i][0] == 'Reversible Plaid')
      if(cart[i][0] == productName){
        orderCount = cart[i][2] + 1
        console.log(orderCount)
        var productSubArray = [productName, productPrice, orderCount];
        console.log(i)
        cart.splice(0, 1)
        cart.push(productSubArray);
        alreadyInCart = 'Yes';
      }
    }
    if(alreadyInCart == 'No') {
      console.log("second")
      var productSubArray = [productName, productPrice, 1];
      cart.push(productSubArray);
    }
  }
  console.log(cart)
  console.log("Currently you have the following items in your cart:");
  for (i = 0; i < cart.length; i++) {
    console.log(cart[i][2]+ ": " + cart[i][0])
  }
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

