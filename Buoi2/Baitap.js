// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
let newItem = {
    name: "Iphone 14 Pro Vip", // Tên sản phẩm
    price: 3500000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 6, // Số lượng sản phẩm trong giỏ hàng
}

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const getProducts = (arr) => {
    return arr.map(ele => {
        console.log(`${ele.name} - ${ele.price} - ${ele.brand} - ${ele.count}`)
    })
}
getProducts(products);

// 2. Tinh tong tien tat ca san pham trong gio hang.
const getTotalPrice = (arr) => {
    return arr.reduce((total,ele) => total + (ele.price +ele.count), 0)
}
console.log(getTotalPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

const getProductsByBrand = (arr, brand) =>{
    return arr.filter(item => item.brand == brand)
}
console.log(getProductsByBrand(products, "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000

const getProductsByPrice = (arr, price) =>{
    return arr.filter(item => item.price > price)
}
console.log(getProductsByPrice(products, 2000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
//Tim san pham thuong hieu apple
const getProductsByName = (arr, name) =>{
    return arr.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
}
console.log(getProductsByPrice(products, "pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

const addNewProduct = (arr) => {
     products.push(newItem)
     return products
}
console.log(addNewProduct(products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const getProductsRemove = (arr, name) =>{
    return arr.filter(item => item.brand !== name)
}
console.log(getProductsRemove(products, "Samsung"));

// 8. Sắp xếp giỏ hàng theo price tăng dần
const getProductsArrangeUp = (arr) => {
    return arr.sort(function(a, b){return a.price - b.price});
}
console.log(getProductsArrangeUp(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần
const getProductsArrangeDown = (arr) => {
    return arr.sort(function(a, b){return b.price - a.price});
}
console.log(getProductsArrangeDown(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const getProductsRandom = (arr, num) => {
    const newItem = [...arr].sort(() => 0.5 - Math.random());

    return newItem.slice(0, num);
}
console.log(getProductsRandom(products,2));