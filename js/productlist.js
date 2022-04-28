let products = {
    data:[{
        productname:"Túi nhỏ thân xếp",
        category: "tuinho",
        price:"741.000",
        img: "../assets/img/product_list/tui_nho/1.webp",
        img1:"../assets/img/product_list/tui_nho/1b.webp",
    },
    {
        productname:"Túi nhỏ khoá trang trí",
        category: "tuinho",
        price:"682.000",
        img:"../assets/img/product_list/tui_nho/2.webp",
        img1:"../assets/img/product_list/tui_nho/2b.webp",
    },
    {
        productname:"Túi xách nhỏ đeo chéo khoá bấm",
        category: "tuinho",
        price:"695.000",
        img:"../assets/img/product_list/tui_nho/3.webp",
        img1:"../assets/img/product_list/tui_nho/3b.webp",
    },
    {
        productname:"Túi xách nhỏ nắp dập nổi 3D",
        category: "tuinho",
        price:"695.000",
        img:"../assets/img/product_list/tui_nho/4.webp",
        img1:"../assets/img/product_list/tui_nho/4b.webp",
    },
    {
        productname:"Túi Xách Nhỏ Top Handle Dáng Hộp",
        category: "tuinho",
        price:"780.000",
        img:"../assets/img/product_list/tui_nho/5.webp",
        img1:"../assets/img/product_list/tui_nho/5b.webp",
    },
    {
        productname:"Túi Xách Nhỏ Top Handle Khóa Sun Moon",
        category: "tuinho",
        price:"839.000",
        img:"../assets/img/product_list/tui_nho/6.webp",
        img1:"../assets/img/product_list/tui_nho/6b.webp",
    },
    {
        productname:"Túi Xách Nhỏ Khóa Trang Trí",
        category: "tuinho",
        price:"741.000",
        img:"../assets/img/product_list/tui_nho/7.webp",
        img1:"../assets/img/product_list/tui_nho/7b.webp",
    },
    {
        productname:"Túi Xách Nhỏ Laser Cut Nhỏ",
        category: "tuinho",
        price:"682.000",
        img:"../assets/img/product_list/tui_nho/8.webp",
        img1:"../assets/img/product_list/tui_nho/8b.webp",
    },
    {
        productname:"Túi Xách Nhỏ Nắp Gập Phối Màu",
        category: "tuinho",
        price:"643.000",
        img:"../assets/img/product_list/tui_nho/9.webp",
        img1:"../assets/img/product_list/tui_nho/9b.webp",
    },
]
}
for(let b  of products.data){
    //tạo thẻ 
    let col = document.createElement("div");
    col.className="col-4";
    col.classList.add("my-2");
    let card = document.createElement("div")
    card.className="card";
    card.classList.add(b.category);
    let image_link = document.createElement("A")
    image_link.className = "img-link";
    image_link.setAttribute("href","#");
    let image =document.createElement("img");
    image.className="card-img-top";
    image.setAttribute("src",b.img);
    image.setAttribute("onmouseover","this.src='"+b.img1+"'");
    image.setAttribute("onmouseout","this.src='"+b.img+"'");
    let card_body = document.createElement("div");
    card_body.className="card-body";
    card.classList.add("d-flex");
    let title = document.createElement("H4");
    title.className="card-title";
    title.classList.add("text-truncate");
    title.innerText= b.productname;
    title.setAttribute("title",b.productname);
    let prices = document.createElement("b");
    prices.className="card-text";
    prices.innerText= b.price +" "+ "VNĐ";
    let footer= document.createElement("div");
    footer.className = "card-footer";
    footer.classList.add("d-flex","justify-content-center");
    let detail = document.createElement("a");
    detail.className="btn btn-primary text_btn";
    detail.innerText= "Chi tiết";
    let add = document.createElement("a");
    add.className="btn btn-success text_btn";
    add.innerText= "Thêm vào giỏ";
    add.classList.add("mx-2")
    footer.appendChild(detail);
    footer.appendChild(add);
    card_body.appendChild(title);
    card_body.appendChild(prices);
    image_link.appendChild(image);
    card.appendChild(image_link);
    card.appendChild(card_body);
    card.appendChild(footer);
    col.appendChild(card);
    document.getElementById("products").appendChild(col);
}
