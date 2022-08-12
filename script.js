/* .js files add interaction to your website */

var quotelist = [
  "People of color are disproportionately affected by higher risk of hunger. 22.5% of Black households and 18.5% of Latinx/Hispanic households experienced food insecurity in 2018.", 
  "15% of families living in rural areas experience food insecurity, compared with 11.8% living in suburban and metropolitan areas.", 
  "45 million Americans rely on stipends from the Supplemental Nutrition Assistance Program (SNAP) to buy food each month, according to the USDA. 2/3 of these benefits go to households with children."
];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote)

function displayQuote() {
  quote.innerHTML = quotelist[count];
  count++;
  if (count == quotelist.length) {
    count = 0;
  }
}
