// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

const calculateFactorial = (a) => {
    let x = 1;
    for (let i = 1; i <= a; i++) {
        x *= i;
    }
    return x;
}
console.log(calculateFactorial(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh
const ToString = (str) => {
    let newString = ""; 
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString; 
}

console.log(ToString("hello"));
// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó
const translate = (str) => {
    switch (str) {
        case "vi":
          console.log("Xin chao")
          break;
        case "en":
          console.log("Hello")
          break;
        case "fra":
            console.log("Bonjour")
          break;
        case "ita":
          console.log ("Ciao");
          break;
      }
    return
}
translate("vi")

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
const subString = (str) => {
 if (str.length >= 15){
    let part = str.substr(0,10)
    console.log(part+"...")
 }else{
    console.log("Chuoi phai dai hon 15 ky tu!!")
 }
 return part;
}
subString("“xinchaocacbandenvoiTechmaster”")