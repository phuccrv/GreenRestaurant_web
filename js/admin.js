//render user
const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
renderAccount(accounts)
function renderAccount (data){
  const accountElement = document.querySelector(".content-user tbody")
  console.log(accountElement);
  let contentAccount =``;
  data.forEach((userList) => {
    contentAccount += `
          <tr>
              <td>${userList.user}</td>
              <td>${userList.email}</td>
              <td>Hoạt động</td>
              <td>
                  <button onclick="deleteUser()"><i class="fa-solid fa-trash-can"></i></button>
              </td>
          </tr>
        `
  });
  accountElement.innerHTML = contentAccount;//<button><i class="fa-solid fa-pen-to-square"></i></button>
}
// tìm kiếm user
function searchtAccount() {
  const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
  const valueSearch = document.querySelector("#inputSearchUser").value;
  const dataSearch = [];
  accounts.forEach((item) => {
    if (
      item.email.toLowerCase().includes(valueSearch.toLowerCase()) ||
      item.user == valueSearch
    ) {
      dataSearch.push(item);
    }
  });
  renderSearchUser(dataSearch); //show sản phẩm tìm kiếm
}
// render user ra màn hình khi tìm kiếm
function renderSearchUser(data){
  const accountElement = document.querySelector(".content-user tbody")
  console.log(accountElement);
  let contentAccount =``;
  data.forEach((userList) => {
    contentAccount += `
          <tr>
              <td>${userList.user}</td>
              <td>${userList.email}</td>
              <td>Hoạt động</td>
              <td>
                  <button onclick="deleteUser()"><i class="fa-solid fa-xmark"></i></button>
              </td>
          </tr>
        `
  });
  accountElement.innerHTML = contentAccount;
}
// render product
const products = JSON.parse(localStorage.getItem("product")) ?? [];
renderProduct()
function renderProduct() {
  const products = JSON.parse(localStorage.getItem("product")) ?? [];
    const productElement = document.querySelector(".content-item-product tbody");
    let contentProduct = ``;
    products.forEach((product, index)=>{
        contentProduct += `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${product.imgFood}" alt=""></td>
            <td>${product.titleFood}</td>
            <td>${product.price}$</td>
            <td>
                <button onclick="editItem(${product.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteItem(${product.id})"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
        `
    });
    productElement.innerHTML = contentProduct
}
// thêm sản phẩm
function handleAdd() {

  const valueIdAdd = document.querySelector("#id-product").value;
  const valueImageUrlAdd = document.querySelector("#image");
  const valueNameAdd = document.querySelector("#product-name").value;
  const valuePriceAdd = document.querySelector("#price").value;
  
  let isDulicate = false;
  products.forEach((product) => {
    if (product.id === valueIdAdd) {
      isDulicate = true;
      // Kết thúc vòng lặp forEach()
      return;
    }
  });
  // Kiểm tra name được tạo có trùng với name trong dữ liệu hay không, name không đưọc trống
  if (isDulicate || !valueIdAdd) {
    return alert("id sản phẩm trống, hoặc trùng");
  }
  const newProductLocal = {
    id: valueIdAdd,
    imgFood: fomatSrcImage(valueImageUrlAdd.value), // Chỉ sử dụng được các ảnh có trong thư mục images
    titleFood: valueNameAdd,
    price: Number(valuePriceAdd),//valueImageUrlAdd.slice(12)
  };
  console.log(valueImageUrlAdd);
  //   Thêm sản phẩm vào db
  products.push(newProductLocal);
  //   render lại sản phẩm sau khi obj được update
  renderProduct(products)
  localStorage.setItem("product", JSON.stringify(products));
  // dùng để tắt form thêm sản phẩm khi bấm vào nút thêm sản phẩm
  // const formItem = document.querySelector(".form-add");
  // if ((formItem.style.display = "block")) {
  //   formItem.style.display = "none";
  // }
}
// sửa sản phẩm
function editItem(id){
  const products = JSON.parse(localStorage.getItem("product")) ?? [];
  console.log(111,id);//kiểm tra id
  let productEdit = {};
  products.forEach((product)=>{
    if(product.id === id){
      productEdit = product;
    }
  });
  console.log(2222,productEdit.imgFood);
// lấy thẻ input
  const idElement = document.querySelector("#idInput");
  const imageElement = document.querySelector("#imageInput");
  const nameElement = document.querySelector("#nameInput");
  const priceElement = document.querySelector("#priceInput");
// gán lại giá trị cho form
  idElement.value = productEdit.id;
  imageElement.value = productEdit.imgFood;
  nameElement.value = productEdit.titleFood;
  priceElement.value = productEdit.price;
  localStorage.setItem("product", JSON.stringify(products));
}
// cập nhật từ form
const formEdit = document.querySelector(".form-edit form")
formEdit.addEventListener("submit", (e)=>{
  e.preventDefault()//chặn không cho load
  const products = JSON.parse(localStorage.getItem("product")) ?? [];
  // lấy giá trị từ form
  const idValue = document.querySelector("#idInput").value;
  const imageValue = document.querySelector("#imageInput");
  const nameValue = document.querySelector("#nameInput").value;
  const priceValue = document.querySelector("#priceInput").value;
  // tạo biến lưu đối tượng
  let updateProduct = {
    id:idValue,
    imgFood: fomatSrcImage(imageValue.value),
    titleFood:nameValue,
    price:priceValue,
  };
  console.log(333,updateProduct);
  products.forEach((item, index)=>{
    if(item.id == updateProduct.id){
      products.splice(index,1,updateProduct)
      console.log(555,products);
      console.log(444,updateProduct);//kiểm tra
      localStorage.setItem("product", JSON.stringify(products));// cập nhật lên local
    }
  });
  // render product
  renderProduct()
})
// xoá sản phẩm
function deleteItem(id) {
console.log(id);
  const products = JSON.parse(localStorage.getItem("product")) ?? [];
  console.log(111,products);
  products.forEach((e, index) => {
    if (e.id == id) {
      products.splice(index, 1);
      console.log(products);
      localStorage.setItem("product", JSON.stringify(products));
    }
    
  });
  renderProduct(products)
}
// chức năng tìm kiếm "search" product
function search() {
  const products = JSON.parse(localStorage.getItem("product")) ?? [];
  const valueSearch = document.querySelector("#inputSearch").value;
  const dataSearch = [];
  products.forEach((item) => {
    if (
      item.titleFood.toLowerCase().includes(valueSearch.toLowerCase()) ||
      item.price == valueSearch
    ) {
      dataSearch.push(item);
    }
  });
  renderSearch(dataSearch); //show sản phẩm tìm kiếm
}
// phần render sản phẩm khi search
function renderSearch(data){
  {
      const productElement = document.querySelector(".content-item-product tbody");
      let contentProduct = ``;
      data.forEach((product, index)=>{
          contentProduct += `
          <tr>
              <td>${index + 1}</td>
              <td><img src="${product.imgFood}" alt=""></td>
              <td>${product.titleFood}</td>
              <td>${product.price}$</td>
              <td>
                  <button><i class="fa-solid fa-pen-to-square"></i></button>
                  <button onclick="deleteItem(${product.id})"><i class="fa-solid fa-trash-can"></i></button>
              </td>
          </tr>
          `
      });
      productElement.innerHTML = contentProduct
  }
}
// xoá tài khoản người dùng
function deleteUser(id) {
  const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
  accounts.forEach((e, index) => {
    if (e.id === id) {
      accounts.splice(index, 1);
    }
  });
  renderAccount(accounts)
  localStorage.setItem("accounts", JSON.stringify(accounts));
}
// mở box thêm mới
function Create() {
  const formAdd = document.querySelector(".form-add");
  if (!formAdd.style.display || formAdd.style.display === "none") {
      formAdd.style.display = "block";
  } else {
      formAdd.style.display = "none";
  }

}   
// khi bấm nút cancel sẽ tắt form
function cancelBtn(){
  const cancelBtn = document.querySelector(".form-add");
  if (!cancelBtn.style.display || cancelBtn.style.display === "none") {
      cancelBtn.style.display = "block";
  } else {
      cancelBtn.style.display = "none";
  }
}
// mở section product
function showProduct(){
  const contentProduct = document.querySelector(".content-product");
  const contentUser = document.querySelector(".content-user");
  const contentOrder = document.querySelector(".content-order");
  if (!contentProduct.style.display || contentProduct.style.display === "none") {
      contentProduct.style.display = "block"
      contentUser.style.display= "none"
      contentOrder.style.display = "none"
  }else{
      contentProduct.style.display = "none"
      contentUser.style.display = "block"
      contentOrder.style.display = "none"
  }
}
// mở section user
function showUser(){
  const contentProduct = document.querySelector(".content-product");
  const contentUser = document.querySelector(".content-user");
  const contentOrder = document.querySelector(".content-order");
  if (!contentUser.style.display || contentUser.style.display === "none") {
      contentUser.style.display = "block"
      contentProduct.style.display = "none"
      contentOrder.style.display = "none"
  }else{
      contentUser.style.display = "none"
      contentProduct.style.display ="block"
      contentOrder.style.display = "none"
  }
}
// mở section order
function showOrder(){
  const contentOrder = document.querySelector(".content-order");
  const contentProduct = document.querySelector(".content-product");
  const contentUser = document.querySelector(".content-user");
  if (!contentOrder.style.display || contentOrder.style.display === "none") {
    contentUser.style.display = "none"
    contentProduct.style.display = "none"
    contentOrder.style.display = "block"
}else{
    contentUser.style.display = "block"
    contentProduct.style.display ="none"
    contentOrder.style.display = "none"
}
}
// hàm cắt ký tự link ảnh
function fomatSrcImage(src)
{
    const array = src.split('\\');
    const string = './img/' + array[2];
    return string;
}
