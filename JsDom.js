let Data = [
    {
      products: "Apricot",
      img: "./images/img2.png",
      prices: 20,
      qte:1
    },
    {
      products: "Cantaloupe",
      img: "./images/img2.png",
      prices: 30,
      qte:1
    },
    {
      products: "Cheeto",
      img: "./images/img3.png",
      prices: 35,
      qte:1
    },
  ];
  
  let container1 = document.createElement("div");
  container1.style.textAlign = "center";
  document.body.appendChild(container1);
   let totalValue=0;
   let totalText = document.createTextNode("Total: 0$");
  
  for (let i = 0; i < Data.length; i++) {
    elements(Data[i].products, Data[i].prices, Data[i].img,Data[i].qte);
  }
  
  let totalBlock = document.createElement("div");
  totalBlock.setAttribute('id','total');
  console.log(totalBlock)
  totalBlock.style.cssText = `
    background-color: orange;
    width: 200px;
    padding: 10px;
    // margin-top:10px;
    margin: auto;
    margin-top:10px;
  `;
  
  totalBlock.appendChild(totalText);
  container1.appendChild(totalBlock);
  function elements(products, prices, img,qte) {
    let card = document.createElement("div");
    let title = document.createElement("h1");
    let priceText = document.createElement("p");
    let quantityInput = document.createElement("input");
    quantityInput.value = parseInt(qte)
  
    let icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa fa-heart");
    let icon4 = document.createElement("i");
    icon4.setAttribute("class", "fa fa-trash");
    let imgEl = document.createElement("img");
    let titleText = document.createTextNode(products);
    let pricesContent = document.createTextNode(prices + "$");
    imgEl.src = img;
    title.appendChild(titleText);
    priceText.appendChild(pricesContent);
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.style.outline = "none";
    totalValue += qte * prices;
    totalText.nodeValue = "Total: " + totalValue  + "$";
    quantityInput.addEventListener("input", function () {
      let quantity = parseInt(quantityInput.value);
      console.log(quantity)
      totalValue += quantity * prices;
      totalText.nodeValue = "Total: " + totalValue + "$";
    });
    card.appendChild(title);
    card.appendChild(priceText);
    card.appendChild(quantityInput);
    card.appendChild(imgEl);
    card.appendChild(icon1);
    card.appendChild(icon4);
    card.style.cssText = `
      width:200px;
      padding:10px;
      margin-bottom:2px;
      margin-left:2px;
      display:inline-block;
    `;
    imgEl.style.cssText = `
      width:100px;
    `;
    icon1.style.cssText = `
      color:black;
      margin-right:15px;
      cursor:pointer;
    `;
    icon4.style.cssText = `
      color:black;
      margin-right:10px;
      cursor:pointer;
    `;
    icon1.onclick = function () {
      if (icon1.style.color === "red") {
        icon1.style.color = "black";
      } else {
        icon1.style.color = "red";
      }
    };
    icon4.onclick = function () {
      let price = parseInt(priceText.textContent);
      totalValue -= price;
      totalText.nodeValue = "Total: " + totalValue + "$";
      container1.removeChild(card);
      if (icon4.style.color === "red") {
        icon4.style.color = "black";
      } else {
        icon4.style.color = "red";
      }
    };
    container1.appendChild(card);
  }
  

