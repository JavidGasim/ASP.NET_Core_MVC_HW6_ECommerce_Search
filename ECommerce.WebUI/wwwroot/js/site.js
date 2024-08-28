// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

console.log(modelValue);

var search = document.getElementById("search-input");
var body = document.getElementById("t-body");

search.addEventListener('input', function () {
    var txt = search.value;

    if (txt.trim() === "") {
        modelValue.forEach(product => {
            body.innerHTML += `
             <tr>
               <td>
                  ${product.productName}
               </td>
                   <td>
                       ${product.unitPrice}
                    </td>
                    <td>
                    ${product.unitsInStock}
                    </td>
                    <td>
                        <a href="/Cart/AddToCart?productId=${modelValue.ProductId} & page= ${modelValue.CurrentPage} & category= ${modelValue.CurrentCategory}"
                           class="btn btn-xs btn-success">Add To Cart</a>
                    </td>
                </tr>
            `
        })
    }

    else {
        body.innerHTML = "";
        modelValue.forEach(product => {
            if (product.productName.includes(txt)) {
                body.innerHTML += `
             <tr>
               <td>
                  ${product.productName}
               </td>
                   <td>
                       ${product.unitPrice}
                    </td>
                    <td>
                    ${product.unitsInStock}
                    </td>
                    <td>
                        <a href="/Cart/AddToCart?productId=${modelValue.ProductId} & page= ${modelValue.CurrentPage} & category= ${modelValue.CurrentCategory}"
                           class="btn btn-xs btn-success">Add To Cart</a>
                    </td>
                </tr>
            `
            }
        })
    }
})

document.addEventListener('DOMContentLoaded', function () {
    var txt = search.value;

    if (txt.trim() === "") {
        modelValue.forEach(product => {
            body.innerHTML += `
             <tr>
               <td>
                  ${product.productName}
               </td>
                   <td>
                       ${product.unitPrice}
                    </td>
                    <td>
                    ${product.unitsInStock}
                    </td>
                    <td>
                        <a href="/Cart/AddToCart?productId=${modelValue.ProductId} & page= ${modelValue.CurrentPage} & category= ${modelValue.CurrentCategory}"
                           class="btn btn-xs btn-success">Add To Cart</a>
                    </td>
                </tr>
            `
        })
    }
})