let products = {
    data: [
      {
        productName: "Boys PG for rent in DIVINE PG",
        category: "Dehli",
        price: "5000 per month",
        image: "images/br1.jpg",
      },
      {
        productName: "Boys PG for rent in Yashas Gents PG",
        category: "Bangalore",
        price: "7000 per month",
        image: "images/br2.jpg",
      },
      {
        productName: "Boys PG for rent in Sion",
        category: "Mumbai",
        price: "7500 per month",
        image: "images/br3.jpg",
      },
      {
        productName: "Boys PG for rent in ANITA BHAWAN",
        category: "Dehradun",
        price: "5500 per month",
        image: "images/br4.jpg",
      },
      {
        productName: "Boys PG for rent in Youth Vally",
        category: "Mumbai",
        price: "12500 per month",
        image: "images/br5.jpg",
      },
      {
        productName: "Boys PG for rent in Dharampur",
        category: "Dehradun",
        price: "8000 per month",
        image: "images/br6.jpg",
      },
      {
        productName: "Boys PG for rent in ONSLA LUXURY ",
        category: "Dehli",
        price: "7000 per month",
        image: "images/br7.jpg",
      },
      {
        productName: "Boys PG for rent in Rahul",
        category: "Dehli",
        price: "12000 per month",
        image: "images/br8.jpg",
      },
      {
        productName: "Boys PG for rent in DIVINE PG",
        category: "Private",
        price: "5000 per month",
        image: "images/br1.jpg",
      },
      {
        productName: "Boys PG for rent in Yashas Gents PG",
        category: "Double",
        price: "7000 per month",
        image: "images/br2.jpg",
      },
      {
        productName: "Boys PG for rent in Sion",
        category: "Triple",
        price: "7500 per month",
        image: "images/br3.jpg",
      },
      {
        productName: "Boys PG for rent in ANITA BHAWAN",
        category: "Private",
        price: "5500 per month",
        image: "images/br4.jpg",
      },
      {
        productName: "Boys PG for rent in Youth Vally",
        category: "Double",
        price: "12500 per month",
        image: "images/br5.jpg",
      },
      {
        productName: "Boys PG for rent in Dharampur",
        category: "Triple",
        price: "8000 per month",
        image: "images/br6.jpg",
      },
      {
        productName: "Boys PG for rent in ONSLA LUXURY ",
        category: "Private",
        price: "7000 per month",
        image: "images/br7.jpg",
      },
      {
        productName: "Boys PG for rent in Rahul",
        category: "Double",
        price: "12000 per month",
        image: "images/br8.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "₹" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };