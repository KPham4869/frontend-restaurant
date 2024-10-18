// Lấy tất cả các nút "ĐẶT HÀNG"
const orderButtons = document.querySelectorAll('.btn');

// Lặp qua từng nút và thêm sự kiện click
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parentBox = button.closest('.box');
    const itemName = parentBox.querySelector('h3').innerText;
    const itemPrice = parentBox.querySelector('span').innerText;
    const itemImageSrc = parentBox.querySelector('img').src;

    // Tạo nội dung thông tin đơn hàng với hình ảnh, số lượng, và giá tiền
    let quantity = 1; // Khởi tạo số lượng mặc định là 1

    const orderInfo = `
      <div class="order-info">
        <h2>Thông tin đặt hàng</h2>
        <img src="${itemImageSrc}" alt="${itemName}" style="width: 150px; height: 150px;" />
        <p><strong>Món ăn:</strong> ${itemName}</p>
        <p><strong>Giá:</strong> ${itemPrice}</p>
        <div class="quantity-control">
          <button id="decreaseQuantity">-</button>
          <span id="quantity">${quantity}</span>
          <button id="increaseQuantity">+</button>
        </div>
        <p><strong>Tổng cộng:</strong> <span id="totalPrice">${itemPrice}</span></p>
        <button id="confirmOrder">Xác nhận đặt hàng</button>
        <button id="closeOrderInfo">Đóng</button>
      </div>
    `;

    // Hiển thị thông tin đơn hàng
    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details-overlay');
    orderDetails.innerHTML = orderInfo;
    document.body.appendChild(orderDetails);

    // Cập nhật giá tổng cộng dựa trên số lượng
    const updateTotalPrice = () => {
      const price = parseFloat(itemPrice.replace(/[^\d]/g, ''));
      const totalPrice = price * quantity;
      document.getElementById('totalPrice').innerText = `${totalPrice.toLocaleString()} đ`;
    };

    // Tăng số lượng món ăn
    document.getElementById('increaseQuantity').addEventListener('click', () => {
      quantity++;
      document.getElementById('quantity').innerText = quantity;
      updateTotalPrice();
    });

    // Giảm số lượng món ăn
    document.getElementById('decreaseQuantity').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
        updateTotalPrice();
      }
    });

    // Xác nhận đặt hàng
    document.getElementById('confirmOrder').addEventListener('click', () => {
      alert(`Bạn đã đặt ${quantity} ${itemName} với tổng giá là ${document.getElementById('totalPrice').innerText}`);
      document.body.removeChild(orderDetails); // Đóng cửa sổ sau khi đặt hàng
    });

    // Đóng thông tin đặt hàng khi bấm nút "Đóng"
    document.getElementById('closeOrderInfo').addEventListener('click', () => {
      document.body.removeChild(orderDetails);
    });
  });
});