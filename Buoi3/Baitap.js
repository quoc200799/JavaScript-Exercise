// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const text = document.getElementById("text");
const changeToText = () => {
    text.style.color = "#777"
    text.style.fontSize = "2rem"
    text.innerHTML = `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript`
}
changeToText();
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

const li = document.getElementsByTagName("li")
const changeToUlLi = () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.color = "blue";
    }
}
changeToUlLi()

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html)
// Sử dụng javascript để thực hiện những công việc sau
// 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
// 2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
// 3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
// 4. Remove thẻ <li> 4
// 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const addUlLi = () => {
    const ul = document.createElement('ul');
    ul.setAttribute("id", "list")
    ul.innerHTML = `  
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>`;
    document.body.appendChild(ul);
    // 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
    const ulID = document.getElementById("list")
    const newli = `  
    <li>Item 8</li>
    <li>Item 9</li>
    <li>Item 10</li>`;
    ulID.insertAdjacentHTML("beforeend", newli);
    const liInNewUl = document.querySelectorAll("#list li")
    const li4 =document.createElement('li')
    li4.innerText = "Thẻ li thay thế thẻ <li> 4 trước đó"
    for (let i = 0; i < liInNewUl.length; i++) {
        // 2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
        liInNewUl[0].style.color = "red";
        // 3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
        liInNewUl[2].style.backgroundColor = "green";
        // 4. Remove thẻ <li> 4
        liInNewUl[3].parentNode.removeChild(liInNewUl[3]);
        // 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
        liInNewUl[2].insertAdjacentElement("afterend", li4)
    }
}
addUlLi()

