# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing

#### User base Description

The Winter Wear Warehouse is an ecommerce site that is geared towards a specific audience, in this case the target audience is women ranging in age from teenagers to women in their forties or fifties.  These women will predominantly be middle to upper middle class and they will live in colder climates.  These scarves are both warm and fashionable and at a reasonable price.  Women below middle class will be less likely to buy fashion items and women above upper middle class will look at buying clothes from designer stores.

So unlike, say Amazon, the Winter Wear Warehouse as a specific audience that it is targeting.  Does this mean that no one outside of the above demographic will ever use the site or buy scarves from the site? No, it is certainly possible that men could use the site to either buy scarves for themselves or as gifts.  Their needs should be taken into account but they should not be the focus of website design.

With a relatively broad age range of potential customers the Winter Wear Warehouse site will need to be both desktop and mobile friendly.  Those in their teens, twenties and thirties are more likely to access the site on their mobile device and if they cannot quickly and easily navigate the site to find the scarf they want they will go elsewhere to buy their clothes.  Women in their forties and fifties on the other hand are more likely to access the site on their desktop device.  For this reason the website must have robust designs for both desktop and mobile clients.  As far as internet connection goes we can assume that the majority of the target audience have relatively fast internet connections but we should ensure that images are appropriately sized and compressed where necessary to improve load times.

In addition, potential customers can come from the US and Canada so the site should be tested from the locations and devices in both nations.  At this time the website will not be regularly accessed outside of those two countries.  The website will need to be translated into other languages before it will be ready for use in other countries.

#### Device and location testing

##### Page Speed Insights (https://developers.google.com/speed/pagespeed/insights)

First I ran my page through the Google Developer Page Speed Insights to identify areas I could improve on my site.  The biggest improvement that Google identified was compressing the size of the images on the site.  So I removed the highest resolution copy of each image from the source set in order to reduce the amount of content transfering to the client.  This led to a significant improvement in the website score for mobile and desktop clients.

Next Google suggested that I minify my CSS and move the JS calls to the end of the HTML instead of in the header.  I ran the CSS through a minifier and updated the main and reset css files.  These two changes led to a more modest improvement in the website score.

Finally, Google also suggested that I alter the browser caching settings to all client devices to store the images for a longer period of time.  I attempted to do this but the instructions online were not totally clear to me on how to alter the caching settings.  I settled on adding a .htaccess file in the root directory of the site following a guide I found online but when I reran the site through page speed insights Google still said that I needed to update the cache settings.  I am not clear on how I am supposed to alter these settings.

##### Responsive Design Checker (http://responsivedesignchecker.com)

I ran my site through the responsive design checker and I tested the look of my site on all of the available desktop displays, tablets and mobile phones.  Ultimately, I was happy with the way the site responded to the changes in screen resolution.  I did not need to update these settings because I had already performed significant testing on mobile devices for the previous assignments.

##### https://www.webpagetest.org


##### Pingdom Speed Test (https://tools.pingdom.com)

I ran tests first from Toronto to check the load time of my website in the second biggest market I identified for scarves.  I ran tests on Chrome, Firefox and Opera from this location.  In all three browsers I received A ratings for everything except caching static content which the site received an F.  As I stated before I could not figure out how to update this setting on the site so I unfortunately had to ignore this issue for now.
