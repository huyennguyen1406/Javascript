let productList = ["Iphone 12", "Iphone 13", "Iphone X", "Ipad", "Airpod Pro", "Iphone 11"];

function showAllProduct() {
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '            <td>'+productList[i] + ' </td>\n' +
            '            <td><button onclick="editProduct('+i+')">Sửa</button></td>\n' +
            '            <td><button onclick="deleteProduct('+i+')">Xóa</button></td>\n' +
            '        </tr>'

    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sumProduct").innerText = productList.length + " sản phẩm";
}
showAllProduct();
function createrNewProduct() {
    // let newPr = prompt("Nhập sản phẩm mới ");
    let newPr = document.getElementById("newPr").value;
    productList.push(newPr);
    showAllProduct();
    document.getElementById("newPr").value = "";
}

function deleteProduct(index) {
    productList.splice(index, 1);
    showAllProduct()
}

function editProduct(index) {
    let newValue = prompt("Nhập vào tên mới");
    productList[index] = newValue;
    showAllProduct();
}