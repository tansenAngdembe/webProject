import { createEle, create_text_node } from "./createNode.js";

const cardContent = document.querySelector(".card-content")
const categoryCard = document.getElementById("category")
const gridCard = document.getElementById("gridCard")
// const detailsDiv = document.getElementsByName

export const details = (id, title, description, image, price) => {
    cardContent.removeChild(categoryCard)
    cardContent.removeChild(gridCard)

    let detailsCard = createEle("div")
    detailsCard.classList.add("detailCards")

    let imageEle = createEle("img")
    imageEle.classList.add("imageCard")
    imageEle.id = id
    imageEle.src = image
    detailsCard.appendChild(imageEle)

    let cardDetails = createEle("div") // this is div for details  
    cardDetails.classList.add("details-card") 
    let cardTitle = createEle("div")
    let titleContent = create_text_node(title)
    cardTitle.appendChild(titleContent)
    cardDetails.appendChild(cardTitle)

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

    //add to cart dutton
    let addTocart = createEle("button")
    let addTocart_Value = create_text_node("Add To Cart")
    addTocart.classList.add("add_cart")
    addTocart.appendChild(addTocart_Value)
   
    



    let descriptionCard = createEle("div")
    let descriptionData  = create_text_node(description)
    descriptionCard.appendChild(descriptionData)
    descriptionCard.classList.add("description")


    cardContent.appendChild(detailsCard)
    detailsCard.appendChild(cardDetails)
    detailsCard.appendChild(descriptionCard)
    cardDetails.appendChild(cardMoney)
    cardDetails.appendChild(cardOrginalPrice)
    cardDetails.appendChild(addTocart)

}