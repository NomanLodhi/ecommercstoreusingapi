let rowMen=document.querySelector('#rowMen')
let rowWomen=document.querySelector('#rowWomen')
let rowJewelery=document.querySelector('#rowJewelery')
let rowElectronics=document.querySelector('#rowElectronics')
let cartList=document.querySelector('.list-group')
let loader=document.querySelector('#loader')
let cartCount=document.querySelector('#cartCount')
let emptyCartDiv=document.querySelector('#empty-cart-div')
let cartText=document.querySelector('.cart-text')
let cart='http://localhost:9000/cart'




let getProducts= async()=>{
await fetch('http://localhost:9000/products')
.then((res)=>res.json() )

.then((data)=>{
// Men Category
    let menCat=data.filter(products=>products.category=="men's clothing")
    menCat.filter((products)=>{
      let col= document.createElement('div');
      col.setAttribute('class','my-2 col-lg-4')
      let card= document.createElement('div')
      card.setAttribute('class','card')
      let productImg= document.createElement('img')
      productImg.setAttribute('class','card-img-top')
      productImg.setAttribute('src',products.image)
      let btn=document.createElement('button')
      btn.setAttribute('class','btn btn-warning m-3')
      btn.innerText='Add to Cart'
      let title=document.createElement('p');
      title.setAttribute('class','fw-bold p-2 fs-5')
      title.innerText=products.title
      let price=document.createElement('p');
      price.setAttribute('class','p-2 fs-5')
      price.innerText=`Rs. ${products.price}`
      
      
      rowMen.append(col)
      col.append(card)
      card.append(productImg)
      card.append(title)
      card.append(price)
      card.append(btn)

      btn.addEventListener('click',async(e)=>{
        // console.log(e)
        await fetch(`http://localhost:9000/cart`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                             image:products.image,
                title:products.title,
                price:products.price,
               
            })
        })
      })
    })

    // Women Category
    let womenCat=data.filter(products=>products.category=="women's clothing")
   
    womenCat.filter((products)=>{
      let col= document.createElement('div');
      col.setAttribute('class','my-2 col-lg-4')
      let card= document.createElement('div')
      card.setAttribute('class','card')
      let productImg= document.createElement('img')
      productImg.setAttribute('class','card-img-top')
      productImg.setAttribute('src',products.image)
      let btn=document.createElement('button')
      btn.setAttribute('class','btn btn-warning m-3')
      btn.innerText='Add to Cart'
      let title=document.createElement('p');
      title.setAttribute('class','fw-bold p-2 fs-5')
      title.innerText=products.title
      let price=document.createElement('p');
      price.setAttribute('class','p-2 fs-5')
      price.innerText=`Rs. ${products.price}`
      
      
      rowWomen.append(col)
      col.append(card)
      card.append(productImg)
      card.append(title)
      card.append(price)
      card.append(btn)

      btn.addEventListener('click',async(e)=>{
        // console.log(e)
        await fetch(`http://localhost:9000/cart`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                             image:products.image,
                title:products.title,
                price:products.price
            })
        })
        
      })
    })
     // Jewelery Category
     let jeweleryCat=data.filter(products=>products.category=="jewelery")
    jeweleryCat.filter((products)=>{
      let col= document.createElement('div');
      col.setAttribute('class','my-2 col-lg-4')
      let card= document.createElement('div')
      card.setAttribute('class','card')
      let productImg= document.createElement('img')
      productImg.setAttribute('class','card-img-top')
      productImg.setAttribute('src',products.image)
      let btn=document.createElement('button')
      btn.setAttribute('class','btn btn-warning m-3')
      btn.innerText='Add to Cart'
      let title=document.createElement('p');
      title.setAttribute('class','fw-bold p-2 fs-5')
      title.innerText=products.title
      let price=document.createElement('p');
      price.setAttribute('class','p-2 fs-5')
      price.innerText=`Rs. ${products.price}`
      
      
      rowJewelery.append(col)
      col.append(card)
      card.append(productImg)
      card.append(title)
      card.append(price)
      card.append(btn)

      btn.addEventListener('click',async(e)=>{
        // console.log(e)
        await fetch(`http://localhost:9000/cart`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                             image:products.image,
                title:products.title,
                price:products.price
            })
        })
      })
    })

    // Jewelery Category
    let electronicsCat=data.filter(products=>products.category=="electronics")
    electronicsCat.filter((products)=>{
      let col= document.createElement('div');
      col.setAttribute('class','my-2 col-lg-4')
      let card= document.createElement('div')
      card.setAttribute('class','card')
      let productImg= document.createElement('img')
      productImg.setAttribute('class','card-img-top')
      productImg.setAttribute('src',products.image)
      let btn=document.createElement('button')
      btn.setAttribute('class','btn btn-warning m-3')
      btn.innerText='Add to Cart'
      let title=document.createElement('p');
      title.setAttribute('class','fw-bold p-2 fs-5')
      title.innerText=products.title
      let price=document.createElement('p');
      price.setAttribute('class','p-2 fs-5')
      price.innerText=`Rs. ${products.price}`
      
      
      rowElectronics.append(col)
      col.append(card)
      card.append(productImg)
      card.append(title)
      card.append(price)
      card.append(btn)

      btn.addEventListener('click',async(e)=>{
        // console.log(e)
        await fetch(`http://localhost:9000/cart`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                             image:products.image,
                title:products.title,
                price:products.price
            })
        })
      })
    })
} )
}
getProducts()

let addtoCart=async()=>{
   
   
    await fetch(cart)
    .then((res)=>{
        return res.json()
        
    })
    
    .then((data)=>{
        if(data.length==0){
            cartText.innerHTML='Your cart is empty'
            emptyCartDiv.style.display='block'
        }
        
        else{
           cartText.innerHTML='Your cart products'
        data.forEach((product)=>{
            let li=document.createElement('li');
            li.setAttribute('class','list-group-item position-relative')
            let delBtn=document.createElement('button')
            let delIcon=document.createElement('i')
            delIcon.setAttribute('class','bi bi-trash-fill')
            delBtn.setAttribute('class','btn btn-warning position-absolute end-0 top-0 m-1')
            delBtn.append(delIcon)
            let title=document.createElement('p')
            title.innerText=product.title
            let price=document.createElement('p')
            price.innerText=product.price
            let img=document.createElement('img')
            img.setAttribute('class','w-25')
            img.setAttribute('src',product.image)
            cartList.append(li)
            li.append(img)
            li.append(title)
            li.append(price)
            li.append(delBtn)

            

            delBtn.addEventListener('click',()=>{
            let id=`http://localhost:9000/cart/${product.id}`
            fetch(id,{
                method:'DELETE' })
            })
        })
       }
       
     

 
})
}
addtoCart()

let cartAmount=async ()=>{
await fetch(cart)
.then(res=>res.json())
.then(data=>cartCount.innerHTML=data.length)
}
cartAmount()
