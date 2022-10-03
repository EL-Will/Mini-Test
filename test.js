// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
// ●	Đầu vào: str 
// ●	Đầu ra: đảo ngược chuỗi và in ra kết quả
// ●	Ví dụ:
// ○	Cho: str = "program"; in ra: "margorp"
// ○	Cho: str = "data"; in ra: "atad"
// ●	Lưu ý: không sử dụng hàm reverse()

// let str ="program";
// let newStr=""
// for(let i=str.length-1; i>=0; i--){
//     newStr=newStr+str[i];
// }
// console.log(newStr);
////........................................................................

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (1đ)
// ●	Đầu vào: str
// ●	Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ●	Ví dụ
// ○	Cho "this is A Test"; In ra "This Is A Test"
// ○	Cho "hello rikkei academy"; In ra "Hello Rikkei Academy”

// let str ="hello rikkei academy"
// let newStr = "";
// newStr = newStr + str[0].toUpperCase();
// for(let i =1; i<str.length;i++){
//     if(str[i] ===" "){
//         newStr = newStr + str[i] + str[i+1].toUpperCase();
//         i++;
//     }
//     else{
//         newStr = newStr + str[i];
//     }
// }
// console.log(newStr);

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (1đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ●	Ví dụ
// ○	Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○	Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let Arr=[1,2,3,3,4,5,4,4,4,5,5];
// for(let i=0; i<Arr.length; i++){
//     for(let j=i+1; j<Arr.length;j++){
//         if(Arr[i]===Arr[j]){
//             Arr.splice(j,1);
//             j=j-1;
//         }
//     }
// }
// console.log(Arr);

// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần. (2đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ●	Ví dụ
// ○	Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ●	Lưu ý: Không dùng hàm sort()

// let Arr=[5, 2, 3, 4, 1];
// for(let i =0; i<Arr.length;i++){
//     for(let j =i+1; j<Arr.length;j++){
//         if(Arr[i] > Arr[j]){
//             let a;
//             a=Arr[i];
//             Arr[i]=Arr[j];
//             Arr[j]=a;

//         }
//     }
// }
// console.log(Arr);

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// let nameArr=["Tuan","Manh","Duc"]
// let check=true;
// while(check){
//     let request =prompt(`Moi nhap yeu cau "\n"C: Create "\n"R:Read "\n"U:Update "\n"D:Delete`)
//     if(request === "C" || request === "R" || request === "U" || request === "D"){
//         if(request === "C"){
//             let firstName=prompt("Moi ban nhap ten");
//             nameArr.push(firstName);
//             console.log(nameArr);
//         }
//         if(request === "R"){
//             for(let i=0; i<nameArr.length;i++){
//                 console.log(`name ${i}: ${nameArr[i]}`);
//             }
//         }
//         if(request === "U"){
//             let checkNum = true;
//             while(checkNum){
//                 let num = +prompt("Moi ban nhap vi tri can Update");
//                 if(Number.isInteger(num)===true && num<nameArr.length){
//                     let firstName=prompt("Moi ban nhap ten");
//                     nameArr[num]= firstName;
//                     console.log(nameArr);
//                     checkNum=false;
//                 }
//                 else{
//                     alert("Vi tri khong ton tai, moi ban nhap lai")
//                 }
//             }  
//         }
//         if(request ==="D"){
//             let num = +prompt("Moi ban nhap vi tri can xoa");
//             if(Number.isInteger(num)===true && num<nameArr.length){
//                 nameArr.splice(num,1);
//                 console.log(nameArr);
//                 checkNum=false;
//             }
//             else{
//                 alert("Vi tri khong ton tai, moi ban nhap lai")
//             }
//         }
//         check=false;
//     }
//     else{
//         alert("Ban da nhap sai. Moi ban nhap lai");
//     }
// }
////......................................................

// Bài 6 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (3đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ●	Ví dụ
// ○	Ngày 30/4/2019 là ngày hợp lệ
// ○	Ngày 29/2/2019 là ngày không hợp lệ
// ●	Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ●	Ví dụ
// ○	Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○	Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


// let check = true;
// while (check) {
//     let inputDate = prompt("Moi ban nhap vao ngay thang nam phan cach nhau bang dau (/)");
//     let _count = 0;
//     for (let i = 0; i < inputDate.length; i++) {
//         if (inputDate[i] === "/") {
//             _count++;
//         }
//     }
//     if (_count === 2) {
//         let arrDate = inputDate.split("/");
//         let date = Number(arrDate[0]);
//         let month = Number(arrDate[1]);
//         let year = Number(arrDate[2]);
//         if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             if (date >= 1 && date <= 31) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (month < 12 && date === 31) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else if (month === 12 && date === 31) {
//                     console.log(`Ngay tiep theo la${1}/${1}/${year + 1}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else if (month === 4 || month === 6 || month === 9 || month === 11) {
//             if (date >= 1 && date <= 30) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (date === 30) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else if (month === 2) {
//             if (date >= 1 && date <= 28) {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay hop le`);
//                 if (date === 28) {
//                     console.log(`Ngay tiep theo la${1}/${month + 1}/${year}`);
//                 }
//                 else {
//                     console.log(`Ngay tiep theo la${date + 1}/${month}/${year}`);
//                 }
//             }
//             else {
//                 console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//             }
//         }
//         else {
//             console.log(`Ngay ${date}/${month}/${year} la ngay khong hop le`);
//         }
//         check = false;
//     } else {
//         alert("Dinh dang ban nhap vao khong chinh xac. Moi ban nhap lai")
//     }
// }
/////..................................................................

// Bài 7 : Cho hai array:
// bookStore = [“Tôi thấy hoa vàng trên cỏ xanh”, “Đắc nhân tâm”]
// cart = []
// Viết một chương trình mô phỏng quá trình mua hàng của người dùng tại cửa hàng sách book store (Create/Read/Update/Delete).

let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
let cart = [];
let checkRequest = true;
let checkRequest2 = true;
let index = 0;
let check;
let count = 1;
let buy = true;
let fname;
let fcount;
let nameBook;
let countBook;
while (buy) {
    buy = confirm("Ban co muon mua sach khong?")
    if (buy = true) {
        while (checkRequest) {
            let request = prompt(`Moi nhap yeu cau "\n"C: Mua sach "\n"R:Kiem tra gio hang "\n"U:Thay sach "\n"D:Bo sach ra khoi gio hang "\n"E: Thoát khỏi cửa hàng`)
            if (request === "C" || request === "R" || request === "U" || request === "D") {
                if (request === "C") {
                    while (checkRequest2) {
                        let nameSach = prompt("Moi nhap ten sach");
                        if (nameSach === "Tôi thấy hoa vàng trên cỏ xanh" || nameSach === "Đắc nhân tâm") {
                            if (cart.length === 0) {
                                cart.push(`${nameSach},${count}`);
                            }
                            else {
                                nameBook = [];
                                countBook = [];
                                check = false;

                                for (let i = 0; i < cart.length; i++) {
                                    fname = "";
                                    fcount = "";

                                    let beginName = cart[i];
                                    let checkQoute = true;
                                    for (let j = 0; j < beginName.length; j++) {
                                        if (beginName[j] !== "," && checkQoute === true) {
                                            fname = fname + beginName[j];

                                        }
                                        else {
                                            checkQoute = false;
                                            j = j + 1;
                                            fcount = fcount + beginName[j];

                                        }

                                    }
                                    nameBook.push(fname);
                                    countBook.push(Number(fcount));
                                }

                                for (let i = 0; i < nameBook.length; i++) {
                                    if (nameSach === nameBook[i]) {

                                        check = true;
                                        index = i;
                                        break;
                                    }
                                }
                                if (check === true) {
                                    cart.splice(index, 1, `${nameSach},${countBook[index] + 1}`);

                                }
                                else {
                                    cart.push(`${nameSach},${count}`);
                                }

                            }
                            let question = prompt("Do you want to buying more? (yes/no)")
                            if (question !== "yes") {
                                buy = false;
                                checkRequest2 = false;
                            }

                        }
                        else {
                            console.log("We don't have that item");
                        }
                    }
                }
                if (request === "R") {
                    console.log(cart);
                    checkRequest=false;
                }
                if (request === "U") {
                    let checkNum = true;
                    while (checkNum) {
                        let num = +prompt("Moi ban nhap vi tri can Update");
                        if (cart.length === 0) {
                            checkNum = false;
                            alert("Ban chua co sach trong gio hang");
                        }
                        else {
                            if (Number.isInteger(num) === true && num < cart.length) {
                                cart.splice(num,1);
                                let checkname = true;
                                while (checkname) {
                                    let firstName = prompt("Moi ban nhap ten");
                                    if (firstName === "Tôi thấy hoa vàng trên cỏ xanh" || firstName === "Đắc nhân tâm") {
                                        if (cart.length === 0) {
                                            cart.push(`${firstName},${count}`);
                                        }
                                        else {
                                            nameBook = [];
                                            countBook = [];
                                            check = false;
            
                                            for (let i = 0; i < cart.length; i++) {
                                                fname = "";
                                                fcount = "";
            
                                                let beginName = cart[i];
                                                let checkQoute = true;
                                                for (let j = 0; j < beginName.length; j++) {
                                                    if (beginName[j] !== "," && checkQoute === true) {
                                                        fname = fname + beginName[j];
            
                                                    }
                                                    else {
                                                        checkQoute = false;
                                                        j = j + 1;
                                                        fcount = fcount + beginName[j];
            
                                                    }
            
                                                }
                                                nameBook.push(fname);
                                                countBook.push(Number(fcount));
                                            }
            
                                            for (let i = 0; i < nameBook.length; i++) {
                                                if (firstName === nameBook[i]) {
            
                                                    check = true;
                                                    index = i;
                                                    break;
                                                }
                                            }
                                            if (check === true) {
                                                cart.splice(index, 1, `${firstName},${countBook[index] + 1}`);
            
                                            }
                                            else {
                                                cart.push(`${firstName},${count}`);
                                            }
            
                                        }
                                        console.log(cart);
                                        checkname = false;
                        
                                    }
                                    else {
                                        console.log("We don't have that item");
                                    }
                                }
                                checkNum = false;
                            }
                            else {
                                alert("Vi tri khong ton tai, moi ban nhap lai")
                            }
                        }
                    }
                }
                if (request === "D") {
                    let checkNum = true;
                    while (checkNum) {
                        let num = +prompt("Moi ban nhap vi tri can Xoa");
                        if (cart.length === 0) {
                            checkNum = false;
                            alert("Ban chua co sach trong gio hang");
                        }
                        else {
                            if (Number.isInteger(num) === true && num < cart.length) {
                                cart.splice(num, 1);
                                console.log(cart);
                                checkNum = false;
                            }
                            else {
                                alert("Vi tri khong ton tai, moi ban nhap lai")
                            }
                        }
                    }
                }
                if(request === "E"){
                    checkRequest=false;
                    buy=false;
                }
            }
            else {
                alert("Ban da nhap sai. Moi ban nhap lai");
            }
        }
    }
    else {
        alert("Tam biet quy khach. Hen gap lai lan sau");
    }
}
console.log(cart);