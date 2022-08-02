/* search_box */
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".search");
  const closeBtn = document.querySelector(".closeBtn");

  const textBox = document.querySelector(".search_detail");

  openBtn.addEventListener("click", function () {
    textBox.style.display = "block";
  });
  closeBtn.addEventListener("click", function () {
    textBox.style.display = "none";
  });
});

/* recend_search */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn").addEventListener("click", function () {
    let newP = document.createElement("p");
    let colorName = document.querySelector(".color_name");
    let newTxt = document.createTextNode(colorName.value);
    newP.appendChild(newTxt);

    let newSpan = document.createElement("span");

    let spanTxt = document.createTextNode("X");

    // spanTxt를 newSpan의 자식으로 등록

    newSpan.appendChild(spanTxt);

    // class='delete'

    newSpan.setAttribute("class", "delete");

    // newP의 자식으로 newSpan 등록

    newP.appendChild(newSpan);

    let colorList = document.querySelector(".color_list");

    // colorList.appendChild(newP)

    colorList.insertBefore(newP, colorList.childNodes[0]);

    colorName.value = "";

    let delBtns = document.querySelectorAll(".delete");

    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", function () {
        if (this.parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    }
  });
});

// user_id check
const userId = document.getElementById("user_id");
const idCheckBtn = document.getElementById("id_chk_btn");
const idDB = [
  "greencomputer",
  "whitecomputer",
  "blackcomputer",
  "bluecomputer",
  "redcomputer",
];

idCheckBtn.addEventListener("click", () => {
  if (userId.value.length < 6 || userId.value.length > 20) {
    alert("아이디는 6~20자로 해야 합니다.");
    userId.focus();
    userId.value = "";
  } else {
    alert("사용 가능한 아이디 입니다.");
    userPw.focus();
  }
});

// user_pw check
const userPw = document.getElementById("user_pw");
const userPwCheck = document.getElementById("user_pw_chk");
const pwCheckBtn = document.getElementById("pw_chk_btn");
const userName = document.getElementById("user_name");

userPw.addEventListener("change", () => {
  if (userPw.value.length < 8) {
    alert("비밀번호는 8자 이상이어야 합니다.");
    userPw.focus();
    userPw.value = "";
  }
});

pwCheckBtn.addEventListener("click", () => {
  if (userPw.value !== userPwCheck.value) {
    alert("비밀번호가 일치하지 않습니다.");
    userPwCheck.value = "";
    userPw.value = "";
    userPw.focus();
  } else {
    alert("비밀번호가 일치합니다.");
    userName.focus();
  }
});

// email check
const emailAddr = document.getElementById("email_addr");
const emailAddrGroup = document.getElementById("email_addr_group");

emailAddrGroup.addEventListener("change", (event) => {
  const options = event.currentTarget.options;
  const index = options.selectedIndex;

  emailAddr.value = options[index].value;
});

// address check
const userAddr = document.getElementById("user_addr");
const userAddrGroup = document.getElementById("user_addr_group");

userAddrGroup.addEventListener("change", (event) => {
  const options = event.currentTarget.options;
  const index = options.selectedIndex;
  userAddr.value = options[index].value;
});

//Tel_number
const userTel = document.getElementById("user_tel");
const telFirst = document.getElementById("tel_first");
const telLast = document.getElementById("tel_last");

userTel.addEventListener("change", (event) => {
  if (event != "선택") {
    telFirst.focus();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  telFirst.addEventListener("keyup", () => {
    const length = telFirst.value.length;
    if (length >= 4) {
      telLast.focus();
    }
  });
});

const totalTerms = document.getElementById("total_terms");
const termsEls = document.querySelectorAll(".terms_el");
const terms01 = document.getElementById("terms01");
const terms02 = document.getElementById("terms02");

totalTerms.addEventListener("click", () => {
  if (totalTerms.checked) {
    termsEls.forEach((termsEl) => {
      termsEl.checked = true;
    });
  } else {
    termsEls.forEach((termsEl) => {
      termsEl.checked = false;
    });
  }
});

terms01.addEventListener("click", termsCheck);
terms02.addEventListener("click", termsCheck);

function termsCheck() {
  if (terms01.checked == true && terms02.checked == true) {
    totalTerms.checked = true;
  } else {
    totalTerms.checked = false;
  }
}
