async function fetchProducts(){
    try{
        let response = await fetch('https://dummyjson.com/products');
        let translatedData = await response.json();
        let actualProductData = translatedData.products

        return actualProductData;
    } catch (error){
        console.error(error);
    
    }
}

async function renderProducts(){
    let prodContainer = document.getElementById("product-container")
    let myProducts = await fetchProducts();

    for(let i = 0; i < myProducts.length; i++){
        let currProducts = myProducts[i]
        let newProductEle = document.createElement("p");

        newProductEle.innerText = currProducts.title;
        newProductEle.style.color= "pink";
        newProductEle.style.border= "3px solid black"
        prodContainer.appendChild(newProductEle);
    }
}

async function fetchPoData(){
    try{
        let response = await fetch('https://dummyjson.com/posts');
        let translatedPoData = await response.json();
        let actualPoData = translatedPoData.posts;
        console.log(actualPoData);
        return actualPoData;
    } catch (error) {
        console.error(error);
    }
}

async function renderPoData(){
    let poContainer = document.getElementById("posts-container");
    let myposts = await fetchPoData();

    for(let i = 0; i < myposts.length; i++){
        let currPost = myposts[i];
        let newPoEle = document.createElement("p");
        newPoEle.innerText = currPost.title;
        newPoEle.style.border = "2px solid black";
        poContainer.appendChild(newPoEle);
    };
      
}

renderProducts();
renderPoData();