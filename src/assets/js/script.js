//filter range
document.addEventListener('DOMContentLoaded', function () {
  let inputMin = document.querySelector('.min');
  let inputMax = document.querySelector('.max');
  let Filter_main = document.querySelector('.filter-range-left');
  let items = document.querySelectorAll('.items');
  let item_list = document.querySelectorAll('.item-list');
  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('mousemove', function () {
      document.querySelector('.low').textContent = inputMin.value;
      document.querySelector('.high').textContent = inputMax.value;
      if (parseInt(inputMin.value) + 7 > parseInt(inputMax.value)) {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    });
  });

  document
    .querySelector('.click-filter')
    .addEventListener('click', function () {
      if (Filter_main.children.length === 2) {
        Filter_main.removeChild(Filter_main.lastChild);
      }
      let minVal = parseInt(inputMin.value);
      let maxVal = parseInt(inputMax.value);
      let foundResult = false;

      items.forEach(function (element) {
        element.style.display = 'none'; // Hide all shoes initially
        let price_string = element.children[2].innerHTML;
        let price = parseInt(price_string.slice(1));
        if (price >= minVal && price <= maxVal) {
          element.style.display = 'flex'; // Show matching shoes
          foundResult = true;
        }
      });

      if (!foundResult) {
        let Div = document.createElement('div');
        Div.classList.add('no-result');
        Div.textContent = 'No Result Found';
        Filter_main.appendChild(Div);
      }
    });

  //show all
  document.querySelector('.show-all').addEventListener('click', function () {
    items.forEach(function (element) {
      element.style.display = 'flex';
    });
  });

  //sorting buttons
  document.querySelectorAll('.sort-button').forEach((element) => {
    element.addEventListener('click', function () {
      let itemList = document.querySelector('.item-list');
      let items1 = Array.from(items);

      // Function to sort item by price low to high
      function sortByPriceLowToHigh() {
        items1.sort((a, b) => {
          let priceA = parseInt(a.children[2].innerHTML.slice(1));
          let priceB = parseInt(b.children[2].innerHTML.slice(1));
          return priceA - priceB;
        });

        itemList.innerHTML = '';
        items1.forEach((item) => {
          itemList.appendChild(item);
        });
      }

      // Function to sort item by price high to low
      function sortByPriceHighToLow() {
        items1.sort((a, b) => {
          let priceA = parseInt(a.children[2].innerHTML.slice(1));
          let priceB = parseInt(b.children[2].innerHTML.slice(1));
          return priceB - priceA;
        });

        itemList.innerHTML = '';
        items1.forEach((item) => {
          itemList.appendChild(item);
        });
      }

      // Function to revert to default order
      function revertToDefaultOrder() {
        itemList.innerHTML = '';
        items1.forEach((shoe) => {
          itemList.appendChild(shoe);
        });
        // Reset shoes array to default order
        items1 = Array.from(items1);
      }

      if (element.classList.contains('default-sort')) {
        revertToDefaultOrder();
      }
      if (element.classList.contains('sort-low-high')) {
        sortByPriceLowToHigh();
      }
      if (element.classList.contains('sort-high-low')) {
        sortByPriceHighToLow();
      }
    });
  });

  //couter function

  function startCountdown() {
    let endTime = new Date(); // Get current time
    endTime.setDate(endTime.getDate() + 4); // Set end time 4 days from now

    let count_list = document.querySelector('.count-list');
    Array.from(count_list.children).forEach((element) => {
      // Update the timer every second
      let timerInterval = setInterval(function () {
        let currentTime = new Date(); // Get current time
        let timeDifference = endTime - currentTime; // Calculate time difference in milliseconds

        if (timeDifference <= 0) {
          clearInterval(timerInterval);
          document.getElementById('timer').textContent = 'Countdown Complete!';
          return;
        }

        // Calculate remaining time in days, hours, minutes, and seconds
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        if (element.classList.contains('days')) {
          element.children[0].innerHTML = days;
        }
        if (element.classList.contains('hours')) {
          element.children[0].innerHTML = hours;
        }
        if (element.classList.contains('minutes')) {
          element.children[0].innerHTML = minutes;
        }
        if (element.classList.contains('seconds')) {
          element.children[0].innerHTML = seconds;
        }
      }, 1000);
    });
  }
  startCountdown();
});
