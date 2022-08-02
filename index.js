let array = []
let output = document.getElementById("output")

let tabsLabel = document.querySelectorAll(".tab p")

tabsLabel.forEach(tabLabel => {
    tabLabel.onclick = function () {
        let tabParrent = tabLabel.parentElement;
        tabParrent.classList.toggle("active");

        tabsLabel.forEach(tabLabel => {
            let tab = tabLabel.parentElement;
            if (tab !== tabParrent)
                tab.classList.remove('active')
        })
    }
})


function resetArray() {
    array = [];
    output.innerText = ""
}
function addNumber() {
    let numberEl = document.getElementById("number");
    let number = numberEl.value * 1;
    if (isNaN(number)) {
        alert("Yêu cầu nhập số hợp lệ")
        return
    }
    //Thêm số vào mảng
    array.push(number);
    numberEl.value = "";
    numberEl.focus();
    output.innerText = "Mảng nhập vào: [" + array.join(", ") + "]"
}

//================ TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG=============
function calcSum() {
    let output = document.getElementById("output1");

    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có số nào trong mảng để tính toán"
        return;
    }

    let total = array.reduce((init, number) => {
        return number > 0 ? init + number : init
    }, 0)
    output.innerText = "👉 Tổng các số dương: " + total;
}

//================ Đếm số dương TRONG MẢNG=============
function calcPositive() {
    let output = document.getElementById("output2");

    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có số nào trong mảng"
        return
    }

    let sum = array.reduce((init, number) => {
        return number >= 0 ? init + 1 : init
    }, 0)
    output.innerText = "👉 Số dương: " + sum;
}

//================ TÌM SỐ NHỎ NHẤT TRONG MẢNG=============
function findSmallest() {
    let output = document.getElementById("output3");

    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có số trong mảng";
        return
    }

    let smallestNum = array.reduce((init, number) => {
        return init > number ? number : init
    })
    output.innerText = "👉 Số nhỏ nhất: " + smallestNum;
}

//================ TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG=============
function findSmallestPositive() {
    let output = document.getElementById("output4");

    //Tạo mảng mới chứa các số dương
    let newArr = array.reduce((init, number) => {
        return number >= 0 ? [...init, number] : init;
    }, [])
    //sort mảng tăng dần
    newArr.sort((a, b) => a - b);

    if (newArr.length === 0) {
        output.innerText = "👉 Không có số dương nào trong mảng"
    } else {
        output.innerText = "👉 Số dương nhỏ nhất trong mảng: " + newArr[0];
    }
}

//================ TÌM SỐ CHẲN CUỐI CỦNG TRONG MẢNG=============
function findLastEven() {
    let output = document.getElementById("output5");

    //kiểm tra xem mảng có số chẳn không
    let isValidNum = array.some(number => number % 2 === 0)
    if (!isValidNum) {
        output.innerText = "👉 Không có số chẵn trong mảng"
        return
    }

    let number = array.reduce((init, number) => {
        return number % 2 === 0 ? number : init
    }, 0)
    output.innerText = "👉 Số chẵn cuối cùng trong mảng: " + number
}
//================ ĐỔI VỊ TRÍ PHẦN TỬ TRONG MẢNG TRONG MẢNG=============
function swapPosition() {
    let output = document.getElementById("output6");
    let index1 = document.getElementById('index1').value * 1;
    let index2 = document.getElementById('index2').value * 1;
    if (index1 <= 0 || index2 <= 0 || !Number.isInteger(index1) || !Number.isInteger(index2)) {
        output.innerText = "👉 vui lòng nhập vị trí từ 1,2...";
        return
    }
    if (index1 > array.length || index2 > array.length) {
        output.innerText = "👉 Mảng hiện tại chỉ có: " + array.length + " phần tử"
        return
    }
    index1 -= 1;
    index2 -= 1;

    let temp = array[index1]
    array[index1] = array[index2];
    array[index2] = temp;
    output.innerText = "👉 Mảng sau khi đổi vị trí: " + array;
}

//================ SẮP XẾP PHẦN TỬ THEO THỨ TỰ TĂNG DẦN TRONG MẢNG TRONG MẢNG=============
function sortUp() {
    let output = document.getElementById("output7");

    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có giá trị nào trong mảng"
    } else {
        output.innerText = "👉 Mảng sau khi sắp xếp: " + array.sort((a, b) => a - b)
    }
}


//================ TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG=============
function findFirstPrime() {
    let output = document.getElementById("output8");

    let newArr = array.reduce((init, number) => {
        return Number.isInteger(number) && number > 0 ? [...init, number] : init
    }, [])

    let isHasPrime = newArr.find(number => isPrime(number))
    if (isHasPrime) {
        output.innerText = "👉 Số nguyên tố đầu tiên trong mảng: " + isHasPrime;
    }
    else {
        output.innerText = "👉 Không có số nguyên tố trong mảng";
    }
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//================ ĐẾM SỐ NGUYÊN TRONG MẢNG=============
function calcInteger() {
    let output = document.getElementById("output9");

    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có số nào trong mảng";
        return
    }

    let sumInteger = array.filter(number => Number.isInteger(number)).length
    output.innerText = "👉 Số nguyên trong mảng: " + sumInteger

}
//================ SO SÁNH SỐ ÂM VÀ DƯƠNG TRONG MẢNG=============
function comparePositiveNegative() {
    let output = document.getElementById("output10");


    //Kiểm tra mảng có phần tử hay không
    if (array.length === 0) {
        output.innerText = "👉 Không có số nào trong mảng";
        return
    }

    let sumPositive = 0;
    let sumNegative = 0;
    array.forEach(number => {
        if (number >= 0) {
            sumPositive++;
        }
        else {
            sumNegative++;
        }
    })

    if (sumPositive > sumNegative) {
        output.innerText = "👉 Số dương > số âm";
    }
    else if (sumPositive === sumNegative) {
        output.innerText = "👉 Số dương = số âm";
    }
    else {
        output.innerText = "👉 Số dương < số âm";
    }
}