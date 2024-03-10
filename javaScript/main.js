import { apiData } from "./api.js";
import {createEle ,create_text_node} from "./createNode.js";
import { details } from "./details.js";
// import {categoryData} from "./category.js";
const gridCard = document.getElementById("gridCard")
const categorys = document.getElementById("category")

async function main() {
    const data = await apiData();
    // let categoryArray = [];
       
    
    data.forEach((value,index)=>{         
         const {image,title,id,price,description, category} = value;      
              
         let categoryDiv = createEle("div")
         let categoryValue = create_text_node("Category")
         categoryDiv.appendChild(categoryValue)
         categorys.appendChild(categoryDiv)

         let card = createEle("div")// main card
         card.classList.add("card") 
         let cardimage = createEle("img"); // card images      
         cardimage.src = image
         cardimage.id = id
         cardimage.alt = title.slice(0,15)

         let cardDetails = createEle("div")// creating elements for card-details
         cardDetails.classList.add("card-details")
         let titles = createEle("div")
         let titleText =create_text_node(title)
         titles.appendChild(titleText)         
         titles.classList.add("card-title")

         let cardMoney = createEle("div")// creating card for  money
         let currencyEl = createEle("span")
         let currencyType = create_text_node("Rs")
         currencyEl.appendChild(currencyType)
         let priceEl = createEle("span")
         let priceAmount = create_text_node(price)
         priceEl.appendChild(priceAmount)         
         cardMoney.appendChild(currencyEl)
         cardMoney.appendChild(priceEl)         
         priceEl.classList.add("card-money")


         let cardOrginalPrice = createEle("div")// creating elements for orginal price of product
         let currency = createEle("span")
         let currencyOrginal = create_text_node("Rs") 
         currency.appendChild(currencyOrginal)
         let currencyPrice = createEle("span")
         let currencyOrginalPrice = create_text_node(price + 400) 
         currencyPrice.appendChild(currencyOrginalPrice)
         cardOrginalPrice.appendChild(currency)  
         cardOrginalPrice.appendChild(currencyPrice)
         cardOrginalPrice.classList.add("card-origin-price")

        cardDetails.appendChild(titles)
        cardDetails.appendChild(cardMoney)
        cardDetails.appendChild(cardOrginalPrice)
        card.appendChild(cardimage)   // appending card image in card      
        card.appendChild(cardDetails)// appending card details in card
        gridCard.appendChild(card)
       
       card.addEventListener("click",(event)=>{
          event.preventDefault()
          details(id,title,description,image,price)
       })

    })    

}

main();