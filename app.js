//Dummy Text list Array:
const dummyText = [
  "Biscuit icing biscuit bonbon jelly marshmallow brownie topping. Cake liquorice apple pie tootsie roll jujubes cupcake. Halvah jelly icing apple pie danish bear claw. Liquorice tart bear claw powder halvah sesame snaps brownie cupcake bonbon.",
  "Ice cream croissant tootsie roll cheesecake macaroon dessert. Gummi bears icing biscuit jelly beans candy. Chocolate biscuit halvah jelly icing jujubes halvah fruitcake gummies. Topping candy canes apple pie cake jelly tiramisu.",
  "Cotton candy gummies cheesecake shortbread ice cream donut. Sweet biscuit icing chocolate bar cookie bonbon cake jelly beans tart. Liquorice chocolate bar cookie cupcake soufflé sesame snaps. Candy danish candy cake gingerbread gummies powder topping cookie.",
  "Sugar plum jelly chocolate bar lollipop cake. Chupa chups ice cream jelly beans wafer sweet chupa chups pastry chocolate bar tart. Cookie tiramisu marzipan soufflé tart. Chupa chups dessert apple pie sugar plum carrot cake fruitcake.",
  "Oat cake jujubes icing dessert fruitcake chocolate chocolate bar tart. Pudding muffin toffee tart cotton candy shortbread carrot cake pie pastry. Gingerbread cake cotton candy jujubes fruitcake shortbread. Gingerbread bear claw dessert brownie jelly fruitcake chupa chups candy.",
  "Gummi bears cookie wafer liquorice soufflé lemon drops powder sesame snaps. Icing powder tootsie roll jelly beans donut powder cheesecake chupa chups liquorice. Lemon drops chocolate bonbon tiramisu shortbread danish oat cake bear claw gummi bears.",
  "Soufflé muffin icing biscuit sweet carrot cake danish. Marshmallow powder oat cake soufflé macaroon brownie liquorice. Soufflé lollipop toffee cotton candy chocolate marzipan.",
  "Carrot cake marshmallow pudding pastry wafer. Apple pie tiramisu tiramisu sesame snaps gingerbread oat cake tiramisu. Bear claw shortbread sugar plum lemon drops jelly beans pudding toffee carrot cake.",
  "Jelly-o candy topping sweet roll pudding chocolate caramels jelly-o candy canes. Pastry gummies cotton candy donut candy canes pie pastry. Fruitcake ice cream dessert jelly-o icing. Wafer pudding sesame snaps candy canes chocolate cake cotton candy caramels cake toffee.",
];

//Select all Elements & Assign them to variables:
const form = document.querySelector("#form");
const inputNumber = document.querySelector("#input-number");
const textContainer = document.querySelector("#text-container");

//Event Listener:
form.addEventListener("submit", dummyTextGenerator);

//Dummy Text Generator Function:
function dummyTextGenerator(event) {
  event.preventDefault();

  const value = parseInt(inputNumber.value);
  const randomNum = Math.floor(Math.random() * dummyText.length);

  if (isNaN(value) || value <= 0 || value > 10) {
    textContainer.innerHTML = `<p>${dummyText[randomNum]}</p>`;
  } else {
    const slicedArr = dummyText.slice(0, value);
    const finalArr = slicedArr
      .map((singleText) => {
        return `<p>${singleText}</p>`;
      })
      .join("");
    textContainer.innerHTML = finalArr;
  }
}
