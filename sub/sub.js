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

/* full_menu*/
$(function () {
  const lnbLi = $(".lnb>li");

  const ul = $(".lnb>li>ul");

  const headerMin = $(".innerHeader").height();

  const headerMax = ul.innerHeight() + headerMin + 150;

  let state = false;

  lnbLi.mouseenter(function () {
    if (!state) {
      $(".innerHeader")
        .stop()
        .animate(
          {
            height: headerMax,
          },
          150,

          function () {
            ul.stop().fadeIn(150);
          }
        );

      state = true;
    }

    $(this).find("ul").addClass("on");
  }); //mouseenter_event

  lnbLi.mouseleave(function () {
    $(this).find("ul").removeClass("on");
  }); //mouseleave_event

  $(".header").mouseleave(function () {
    ul.stop().fadeOut(150, function () {
      $(".innerHeader").stop().animate(
        {
          height: headerMin,
        },
        150
      );
    });

    state = false;
  }); //header_mouseleave

  $(".lnb li a")
    .focus(function () {
      $(".innerHeader").stop().animate(
        {
          height: headerMax,
        },
        150
      );

      ul.stop().fadeIn(150);
    })
    .blur(function () {
      $(".innerHeader").stop().animate(
        {
          height: headerMin,
        },
        150
      );

      ul.stop().fadeOut(150);
    }); //focus_event
});
