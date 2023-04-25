//khi load form
var loadTitle = document.getElementById('home-content-scale-title');
var loadText = document.getElementById('home-content-scale-text');
let timerId;

window.addEventListener("load", () => {
    setTimeout(() => {
        loadText.style.transition = "scale 1s ease-out";
        loadText.style.scale = "1.5";
    }, 1000);
    loadTitle.style.transition = "scale 1s ease-out";
    loadTitle.style.scale = "1.7";
    setTimeout(() => {
        loadText.style.display = "block";
    }, 990);
})


//proces ẩn hiện
function hien() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 0) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien1");
    element.classList.toggle("hien");

}

function hien1() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 1) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien2");
    element.classList.toggle("hien");

}

function hien2() {
    let displayNone = document.getElementsByClassName("process-bottom-left-content");
    for (i = 0; i < displayNone.length; i++) {
        if (displayNone[i].classList.contains("hien")) {
            if (i != 2) displayNone[i].classList.remove("hien");
        }
    }
    const element = document.querySelector("p.hien3");
    element.classList.toggle("hien");

}


//lây kich thươc cua cua so dang mo
var w = window.innerWidth;
var h = window.innerHeight;
console.log(w);
window.addEventListener('resize', function () {
    w = window.innerWidth;
    h = window.innerHeight;
});


var list_about_slider = document.querySelector("div.list-about-right");
var item_about_slider = document.querySelector("div.about-right-item");
const widthItem_about = list_about_slider.offsetWidth / 2;
list_about_slider.addEventListener('mousedown', (event) => {
    list_about_slider.style.cursor = "grabbing";
    // Nếu chuột không được nhấn ở phần tử con của testimonialsWrap
    if (event.target.closest('.about-right-item') === null) {
        return;
    }

    // Ngăn chặn sự kiện mặc định để tránh việc kéo toàn bộ trang web
    event.preventDefault();

    // Lấy vị trí khởi đầu của sự kiện chuột
    const startX = event.pageX;

    list_about_slider.addEventListener('mousemove', onMouseMove);
    list_about_slider.addEventListener('mouseup', onMouseUp);
    let moveX;

    function onMouseMove(event) {
        // Tính toán khoảng cách di chuyển của chuột so với vị trí khởi đầu
        moveX = event.pageX - startX;
        list_about_slider.scrollLeft += moveX;
        // Di chuyển khung cuộn theo khoảng cách tính
    }

    function onMouseUp() {
        list_about_slider.style.cursor = "grab";
        list_about_slider.removeEventListener('mousemove', onMouseMove);
        list_about_slider.removeEventListener('mouseup', onMouseUp);
        if (moveX >= widthItem_about) {
            list_about_slider.scrollLeft -= (widthItem_about * 2);
        } else {
            list_about_slider.scrollLeft += (widthItem_about * 2);
        }
    }
});

var testimonialsWrap = document.querySelector('div.testimonials-left-content-wrap');
var testimonials_left_content = document.querySelector('div.testimonials-left-content');
const widthItem = testimonialsWrap.offsetWidth / 2;
testimonialsWrap.addEventListener('mousedown', (event) => {
    //KHI MUOSEDOWN THI CURSOR CHUYEN KIEU
    testimonialsWrap.style.cursor = "grabbing";
    // Nếu chuột không được nhấn ở phần tử con của testimonialsWrap
    if (event.target.closest('.testimonials-left-content') === null) {
        return;
    }

    // Ngăn chặn sự kiện mặc định để tránh việc kéo toàn bộ trang web
    event.preventDefault();

    // Lấy vị trí khởi đầu của sự kiện chuột
    const startX = event.pageX;

    testimonialsWrap.addEventListener('mousemove', onMouseMove);
    testimonialsWrap.addEventListener('mouseup', onMouseUp);

    let moveX;

    function onMouseMove(event) {
        // Tính toán khoảng cách di chuyển của chuột so với vị trí khởi đầu
        moveX = event.pageX - startX;
        testimonialsWrap.scrollLeft += moveX;
        // Di chuyển khung cuộn theo khoảng cách tính
    }

    // var dottestimonials = document.getElementsByClassName("p.dottestimonials");
    // console.log("fadjlka;" + dottestimonials)
    // for (j = 0; i < dottestimonials.length; i++) {
    //     dottestimonials[j].style.background = "#d4d7dd";
    //     dottestimonials[j].style.transform = "scale(1)";
    // }
    // if (moveX < 0 && mark < 3) dottestimonials[mark + 1].style.background = "#717171";
    // dottestimonials[mark + 1].style.transform = "scale(1.2)";
    // if (moveX > 0 && mark > 0) {
    //     dottestimonials[mark - 1].style.background = "#717171";
    //     dottestimonials[mark - 1].style.transform = "scale(1.2)";
    // }

    function onMouseUp() {
        testimonialsWrap.removeEventListener('mousemove', onMouseMove);
        testimonialsWrap.removeEventListener('mouseup', onMouseUp);
        testimonialsWrap.style.cursor = "grab";
        if (moveX >= widthItem) {
            testimonialsWrap.scrollLeft -= widthItem * 2;
        }
        if (moveX < widthItem) {
            testimonialsWrap.scrollLeft += widthItem * 2;
        }
    }
});


var dragLink = document.getElementById('drag-link');

dragLink.addEventListener('dragstart', function () {
    dragLink.classList.add('dragging');
});

dragLink.addEventListener('dragend', function () {
    dragLink.classList.remove('dragging');
});


//hien menu table, mebile
function displayMenu() {
    if(w<1024){

    }
        var element = document.getElementsByClassName("header-center");
        if (element[0].classList.contains("header-center_block")) {
            const element = document.querySelectorAll('.header-center_block')[0];

            // Gán tên animation và thời gian hoàn thành của animation cho phần tử
            element.style.animationName = 'example';
            element.style.animationDuration = '1s';

            // Định nghĩa keyframes cho animation
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = `
      @keyframes example {
        from {margin-left: 0;}
        to {margin-left: -100%;}
      }
    `;
            document.head.appendChild(styleSheet);
            setTimeout(() => {
                element.classList.remove("header-center_block");
            }, 1000);


        } else {
            element[0].classList.add("header-center_block");
            // Đặt các thuộc tính animation cho phần tử
            element[0].style.animationName = 'example1';
            element[0].style.animationDuration = '1s';

            // Định nghĩa keyframes cho animation
            const styleSheet = document.createElement('style');
            styleSheet.innerHTML = `
          @keyframes example1 {
            from {margin-left: -100%;}
            to {margin-left: 0;}
          }
        `;
            document.head.appendChild(styleSheet);
        }
}

function displayMenuTB() {
    if (w < 1024) {
        displayMenu();
    }
}


// Lấy tất cả các phần tử div trên trang
const divs = document.querySelectorAll('div');

// Lặp qua từng phần tử div
divs.forEach(div => {
    // Kiểm tra nếu id của div trùng với href của menu
    const divId = div.getAttribute('id');
    const menu = document.querySelector(`a[href="#${divId}"]`);
    if (menu) {
        // Nếu tìm thấy menu, thêm sự kiện lắng nghe khi trang được lăn
        window.addEventListener('scroll', () => {
            // Nếu vị trí của div hiện tại trùng với vị trí trên trang
            if (div.getBoundingClientRect().top < window.innerHeight * 0.5) {
                // Đánh dấu menu hiện tại
                document.querySelectorAll('.header-center_item').forEach(item => item.classList.remove('active'));
                menu.parentElement.classList.add('active');
            }
        });
    }
});


window.onscroll = function () {
    scrollFunction()
};
var headerWraper = document.querySelector('.header-wraprer');
var headerConten = document.querySelector('.header');

function scrollFunction() {
    if (document.body.scrollTop > 74 || document.documentElement.scrollTop > 74) {
        headerWraper.style.background = "#FEFEFE";
        headerWraper.style.top = "-74px";
        headerWraper.style.transition = "top 0.5s";
        headerWraper.style.top = "0";
        headerWraper.style.position = "fixed";
        headerConten.style.background = "#FEFEFE";

    } else {
        headerWraper.style.transition = "top 0.5s";
        headerWraper.style.top = "-74px";
        headerWraper.style.removeProperty("position");
        headerWraper.style.background = "#f6f7f9";
        headerConten.style.background = "#f6f7f9";
    }

}
