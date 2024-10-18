console.log("tin");

$(document).ready(function() {
    $.ajax({
        url: `${BASE_URL}api/users`, // Combine BASE_URL with the API endpoint
        type: 'GET', // Use GET method
        contentType: 'application/json',
        success: function(response) {
            // Check if the response is already an object
            const users = typeof response === 'string' ? JSON.parse(response) : response;

            // Loop through each user and display information
            users.forEach(user => {
                console.log(`ID: ${user.ID_User}`);
                console.log(`Tên đăng nhập: ${user.username}`);
                console.log(`E-mail: ${user.email}`);
                console.log(`Số điện thoại: ${user.phoneNumber}`);
                console.log(`Địa chỉ: ${user.address}`);
                console.log(`Ngày tạo: ${user.createdAt}`);
                console.log(`Cập nhật lần cuối: ${user.updatedAt}`);
                console.log('-----------------------'); // Separator between users
            });
        },
        error: function(xhr, status, error) {
            let errorMessage = 'Đã xảy ra lỗi khi lấy dữ liệu: ';
            if (xhr.responseText) {
                try {
                    let response = JSON.parse(xhr.responseText);
                    errorMessage += response.message || error;
                } catch (e) {
                    errorMessage += error;
                }
            } else {
                errorMessage += error;
            }
            console.error(errorMessage); // Log error to console
        }
    });
});
