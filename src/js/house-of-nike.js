// active btn
// var tabMenuBtn = document.querySelectorAll('.menu-icon')

// for (let btnItem = 0; btnItem < tabMenuBtn.length; btnItem++) {
//     tabMenuBtn[btnItem].addEventListener('click', function() {
//         for (let i = 0; i < tabMenuBtn.length; i++) {
//             tabMenuBtn[i].classList.remove(".active-menu-btn")
//             console.log(btnItem)
//         }
//         tabMenuBtn[btnItem].classList.add(".active-menu-btn")
//     })
// }






// HEADER-MOBILE
//active header bground
var activeHeader = document.querySelector('.header-respon')
var toggleBtn = document.querySelectorAll('.menu-icon')
console.log(activeHeader)
for (let i = 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener('click', function() {
        activeHeader.classList.toggle("active-header-respon")
    })
}

// toggleContent
// var toggleBtn = document.querySelectorAll('.menu-icon')
var toggleContent = document.querySelector('.menu-dropdown-respon')
for (let i = 0; i < toggleBtn.length; i++) {
    toggleBtn[i].addEventListener('click', function() {
        toggleContent.classList.toggle("show")
    })
}


//menu-dropdown-item-btn
var dropDownLinks = document.querySelectorAll('.dropdown-child')
console.log(dropDownLinks)
for (let linkItem = 0; linkItem < dropDownLinks.length; linkItem++) {
    dropDownLinks[linkItem].addEventListener('click', function() {
        for (let i = 0; i < dropDownLinks.length; i++) {
            dropDownLinks[i].classList.remove("active-menu-dropdown")
        }
        dropDownLinks[linkItem].classList.add("active-menu-dropdown")
    })


}



//menu-icon
// var menuBtn = document.querySelectorAll('.menu-icon')
for (let toggleBtnItem = 0; toggleBtnItem < toggleBtn.length; toggleBtnItem++) {
    toggleBtn[toggleBtnItem].addEventListener('click', function() {
        for (let i = 0; i < toggleBtn.length; i++) {
            toggleBtn[i].classList.toggle("active-menu-btn")
        }

    })
}
// HEADER-MOBILE



// tabMenuBtn.forEach(function(e) { // lặp từng phần tử trong nodelist btn
//     e.addEventListener('click', function() { // gán sự kiện click
//         tabMenuBtn.forEach(function(tabbtn) {
//                 console.log(tabbtn)
//                 tabbtn.classList.remove("active-tab-menu")
//             }) // lặp qua từng phần tử và remove class
//         e.classList.add("active-tab-menu") //gán class cho 

//     })

// })

var tabBtns = document.querySelectorAll('.tab-menu-item')
var productContents = document.querySelectorAll('.product-content')
    // console.log(productContents)

function onTabClick(e) {
    for (let btnItem = 0; btnItem < tabBtns.length; btnItem++) {
        tabBtns[btnItem].classList.remove('active-tab-menu')
    }
    for (let productItem = 0; productItem < productContents.length; productItem++) {
        productContents[productItem].classList.remove('active-product-content')
    }
    e.target.classList.add('active-tab-menu')
    let classString = e.target.getAttribute('data-target')
    let cattegoryContent = document.getElementById('cattegory-content')
    cattegoryContent.getElementsByClassName(classString)[0].classList.add('active-product-content')
    console.log(cattegoryContent)
}
for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', onTabClick)
}