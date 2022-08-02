/* main_banner */
const visualElements = document.querySelectorAll(
  ".sub_page01>div,.sub_page02>div"
);

visualElements.forEach((visualElement, index) => {
  gsap.to(visualElement, 2, {
    delay: index * 0.5,
    opacity: 1,
  });
});

/* top_btn */
const topBtn = document.querySelector(".top_btn");

topBtn.addEventListener("click", () => {
  gsap.to(window, 0.5, {
    scrollTo: 0,
  });
});

/* family_site */
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("select");
  select.addEventListener("change", (event) => {
    const options = event.currentTarget.options;
    const index = options.selectedIndex;
    location.href = options[index].value;
  });
});

/* img hover */
document.addEventListener("DOMContentLoaded", () => {
  let img = document.querySelector(".main_recomm_list01_img img");

  img.onmouseover = over;
  img.onmouseout = out;

  // img.onmouseover = function() {
  //   img.src = 'img/new01_on.jpg'
  // }

  function over() {
    img.src = "img/new01_on.jpg";
  }

  function out() {
    img.src = "img/new01_off.jpg";
  }

  // img.addEventListener('mouseover', function () {
  //     img.setAttribute('src', 'img/new01_on.jpg')
  // })
  // img.addEventListener('mouseout', function () {
  //     img.setAttribute('src', 'img/new01_off.jpg')
  // })
});

/* popup */
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close_btn");
  const PopUp = document.querySelector(".popup");
  closeBtn.addEventListener("click", function () {
    PopUp.style.display = "none";
  });
});

/* main_banner*/
new Swiper(".main_banner .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".main_banner .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".main_banner .swiper-button-next",
    prevEl: ".main_banner .swiper-button-prev",
  },
});

/* promotion_swiper*/
new Swiper(".main_recomm .swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".main_recomm .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".main_recomm .swiper-button-next",
    prevEl: ".main_recomm .swiper-button-prev",
  },
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

/* additional_discount */
const tabList = document.querySelectorAll(".tab_menu .list li");
for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
    }
    this.parentNode.classList.add("is_on");
  });
}

/* recommend_style_swiper*/
new Swiper(".recommend_style .swiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".recommend_style .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".recommend_style .swiper-button-next",
    prevEl: ".recommend_style .swiper-button-prev",
  },
});

/* main_recomm mouseover */

const more = document.querySelectorAll(".more");
const contents = document.querySelectorAll(".contents");
const button = document.querySelectorAll(".main_recomm_list");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function () {
    more[i].classList.remove("hidden");
    contents[i].classList.add("opacity");
  });
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseout", function () {
    more[i].classList.add("hidden");
    contents[i].classList.remove("opacity");
  });
}

/* additional_discount mouseover */
