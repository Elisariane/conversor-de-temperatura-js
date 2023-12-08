const celsiusField = document.getElementById("celsius");
const fahrenheitField = document.getElementById("fahrenheit");
const kelvinField = document.getElementById("kelvin");

function converterTemperatura(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      fahrenheitField.value = (currentValue * 9) / 5 + 32;
      kelvinField.value = currentValue + 273.15;
      break;

    case "fahrenheit":
      celsiusField.value = ((currentValue - 32) * 5) / 9;
      kelvinField.value = ((currentValue - 32) * 5) / 9 + 273.15;
      break;

    case "kelvin":
      celsiusField.value = currentValue - 273.15;
      fahrenheitField.value = ((currentValue - 273.15) * 9) / 5 + 32;

      break;
    default:
      alert("Não foi possível fazer a conversão!");
      break;
  }
}

function limpar() {
  celsiusField.value = "";
  fahrenheitField.value = "";
  kelvinField.value = "";
}
