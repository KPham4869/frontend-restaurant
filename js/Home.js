// Lấy phần tử menu-bars và navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// Khi nhấp vào menu-bars, toggle class 'active' cho navbar
menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('fa-times');  // Đổi biểu tượng thanh bars thành dấu 'x' khi mở menu
}


var nextBtn = document.querySelector('.next'),
    preventDefault =document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
  showSlider('next')
}

preBtn.onclick = function(){
  showSlider('prev')
}

let runTimeOut


let runNextAuto = setTimeout(()=>{
  nextBtn.click()

}, timeAutoNext)

function resetTimeAnimation(){
  runningTime.style.animation = 'none'
  runningTime.offsetHeight
  runningTime.style.animation = null
  runningTime.style.animation =' runningTime 7s linear 1 forwards'
}

function showSlider(type){
  let SliderItemsDom = list.querySelectorAll('.carousel .list .item')
  if(type =='next'){
    list.appendChild(SliderItemsDom[0])
    carousel.classList.add('next')
  } else{
    list.prepend(SliderItemsDom[SliderItemsDom.length-1])
    carousel.classList.add('prev')

  }
  clearTimeout(runTimeOut)
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
    
  }, timeAutoNext);

  clearTimeout(runNextAuto)
  runNextAuto=setTimeout(()=> {
    nextBtn.click()
  }, timeAutoNext)

  resetTimeAnimation()

}
resetTimeAnimation()



// Lựa chọn phần tử
const vnLang = document.getElementById('vn-lang');
const enLang = document.getElementById('en-lang');
const locationText = document.getElementById('location-text');
const authLink = document.getElementById('auth-link');
const pickupBtn = document.getElementById('pickup-btn');





// Thay đổi địa chỉ khi nhấp vào địa chỉ khác
document.querySelector('.location').addEventListener('click', function() {
  const dropdown = document.querySelector('.location-dropdown');
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('.location-dropdown ul li').forEach(item => {
  item.addEventListener('click', function() {
    const selectedLocation = this.getAttribute('data-location');
    document.getElementById('current-location').textContent = selectedLocation;
    document.querySelector('.location-dropdown').style.display = 'none'; // Ẩn dropdown sau khi chọn
  });
});

// Xử lý nút Đăng Ký
document.getElementById('register-btn').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Chức năng Đăng Ký sẽ được xử lý tại đây.');
  // Code xử lý logic đăng ký, ví dụ như mở form đăng ký
});

// Xử lý nút Đăng Nhập
document.getElementById('login-btn').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Chức năng Đăng Nhập sẽ được xử lý tại đây.');
  // Code xử lý logic đăng nhập, ví dụ như mở form đăng nhập
});


// Xử lý sự kiện nhấp vào nút PICK UP
pickupBtn.addEventListener('click', function() {
    alert('Chuyển đến trang thực đơn');
    window.location.href = '/thuc-don'; // URL của trang thực đơn
});
