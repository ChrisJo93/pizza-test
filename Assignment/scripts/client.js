const pizzaArray = [];
$(document).ready(onReady);

function onReady() {
  $('.pizza-btn-submit').on('click', submitPizza);
  $('.renderDisplay').on('click', '.deleteButton', deletePizza);
}

function submitPizza() {
  dough = $('.dough').val();
  firstTopping = $('.firstTopping').val();
  secondTopping = $('.secondTopping').val();
  sauce = $('.sauce').val();
  numberOfPizzas = $('.numberOfPizzas').val();
  price = $('.price').val();

  const pizza = {
    dough,
    firstTopping,
    secondTopping,
    sauce,
    numberOfPizzas,
    price,
  };

  pizzaArray.push(pizza);
  console.log(pizzaArray);
  pizzaRender();
}

function pizzaRender() {
  let totalCost = 0;
  $('.renderDisplay').empty();
  $('.empty').val('');
  for (let i = 0; i < pizzaArray.length; i++) {
    const pizzas = pizzaArray[i];
    totalCost += Number(pizzas.price);
    let display = $('.renderDisplay');
    display.append(
      `<tr>
      <td>${pizzas.dough}</td>
      <td>${pizzas.firstTopping}</td>
      <td>${pizzas.secondTopping}</td>
      <td>${pizzas.sauce}</td>
      <td>${pizzas.numberOfPizzas}</td>
      <td>${pizzas.price}</td>
      <td><button class="deleteButton" data-delete=${i}>delete</button></td>
      </tr>`
    );
  }
  let priceChange = $('.pizzaCost');
  priceChange.text(totalCost);
}

function deletePizza() {
  let toBeDeleted = $(this).data('delete');
  pizzaArray.splice(toBeDeleted, 1);

  pizzaRender();
}
