const plusBtn = document.querySelector(".plusBtn");
const val = document.querySelector("#inputVal");
const Input = document.querySelector("#inputVal");
const tasks = document.querySelector(".texts > #tasks");

let plusCnt = 0;
let liCnt = 0;


// 날짜 데이터
window.onload = () => {
    let date = new Date();
    let dateDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const date_ID = document.querySelector("#date");
    date_ID.innerHTML = (dateDays[date.getDate() - 1]) + ",&nbsp;&nbsp; " + (date.getDay() + 1) + " " + monthArr[date.getMonth()].substr(0, 3);  
    console.log(dateDays[date.getDate() - 1]);            
}
// 추가
val.addEventListener('keydown', (e) => {
    if(window.event.keyCode == 13) {
        let ul = document.querySelector(".list-form");

        ul.innerHTML +=`
        <li class="li${liCnt}" id="checkForm${liCnt}">
            <input type="checkbox" id="checkCircle${liCnt}">
            <div class="check">
                <label for="checkCircle${liCnt}" id="${liCnt}"; onclick="Check(this)"">
                    <div></div>
                </label>
            </div>
            <div class="line">
                <p>${val.value}</p>
                <div></div>
            </div>
            <div class="Xbtn Xbtn${liCnt}" onclick="Del(this)">
                <div></div>
                <div></div>
            </div>
        </li>
        `;

        tasks.innerHTML = `${liCnt+1} tasks`;

        liCnt++

        Input.style.visibility = "hidden";

        plusBtn.style.transform = "rotate(0deg)";
        plusBtn.style.backgroundColor = "#617ae6";
        val.value = "";
    }
})
// 삽입
function Plus() {
    plusCnt++
    if(plusCnt%2 == 1) {
        Input.style.visibility = "visible";

        plusBtn.style.transform = "rotate(45deg)";
        plusBtn.style.backgroundColor = "red";
    }
    else {
        Input.style.visibility = "hidden";

        plusBtn.style.transform = "rotate(0deg)";
        plusBtn.style.backgroundColor = "#617ae6";
        val.value = "";
    }
}
// 삭제
function Del(e) {
    let liNum = e.classList[1].split("Xbtn")[1];

    let removeLi = document.querySelector(`.li${liNum}`);
    removeLi.remove();
    plusCnt--
    liCnt--
    tasks.innerHTML = `${liCnt} tasks`;
}
// 갯수 체크
function Check(e) {
    let checkMinus = document.querySelector(`#checkCircle${e.id}`);
    if(checkMinus.checked == true) {
        liCnt++
        tasks.innerHTML = `${liCnt} tasks`;
    }
    else {
        liCnt--
        tasks.innerHTML = `${liCnt} tasks`;
    }
}