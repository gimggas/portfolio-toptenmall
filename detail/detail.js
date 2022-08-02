document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector("#search_box");

  searchBox.addEventListener("focus", () => {
    searchBox.setAttribute("placeholder", "검색어 입력");
  });

  searchBox.addEventListener("blur", () => {
    searchBox.setAttribute("placeholder", "");
  });
});

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

/* image_replacement */
document.addEventListener("DOMContentLoaded", () => {
  let mainImg = document.querySelector(".product_img >img");
  let thumImg = document.querySelectorAll(".product_list li img");

  for (let i = 0; i < thumImg.length; i++) {
    thumImg[i].onclick = mainBox;
  }

  function mainBox() {
    let newImg = this.src;
    mainImg.setAttribute("src", newImg);
  }
});

/* size click */
var div2 = document.querySelectorAll(".size ul li");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}
init();

document.addEventListener("DOMContentLoaded", () => {
  let price = 7900;
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let total = document.querySelector("#total");
  const resultElement = document.getElementById("result");
  let number = resultElement.innerText;

  plus.addEventListener("click", () => {
    price += 7900;
    total.value = price;
    number = parseInt(number) + 1;
    resultElement.innerText = number;
  });

  minus.addEventListener("click", () => {
    if (number > 1) {
      price -= 7900;
      total.value = price;
      number = parseInt(number) - 1;
      resultElement.innerText = number;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let isOpen = false;
  let btn = document.querySelector(".detailed_description");
  btn.addEventListener("click", function () {
    if (isOpen == false) {
      this.innerText = "상세정보 닫기";
      document.querySelector(".detailed").style.display = "block";
      isOpen = true;
    } else {
      this.innerText = "상세정보 더보기";
      document.querySelector(".detailed").style.display = "none";
      isOpen = false;
    }
  });
});
