$(document).ready(function() {
    $('.eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    
    $('#form-register').on('submit', function(e) {
        e.preventDefault(); // Ngăn form submit mặc định

        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        if (password !== confirmPassword) {
            $('#error-message').show(); 
            return;
        } else {
            $('#error-message').hide();
        }

        var formData = {
            ID_User: 8, 
            username: $('.form-input[placeholder="Tên đăng nhập"]').val(),
            email: $('.form-input[placeholder="E-mail"]').val(),
            phoneNumber: $('.form-input[placeholder="Số điện thoại"]').val(),
            password: password,
            address: $('#province').val()
        };

        $.ajax({
            url: `${BASE_URL}api/users`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('Đăng ký thành công!'); 
            },
            error: function(xhr, status, error) {
                let errorMessage = 'Đã xảy ra lỗi khi đăng ký: ';
    
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
            
            alert(errorMessage);
            }
        });
    });
});