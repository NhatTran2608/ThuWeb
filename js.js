
function login(){
    var x = document.getElementById('user').value
    var y = document.getElementById('pass').value   

    if(x=='admin' && y == '12345678'){
        alert('Đăng nhập thành công')
        window.location.href = 'index.html';
    }
    else if((x!= 'username' || x!= '12345') && x !='' && y!=''){
        alert('Tài khoản hoặc mật khẩu không chính xác!!!')
        y.reset();
    }
    else{
        alert('Vui lòng nhập đầy đủ thông tin!!!')
        x.reset();
        y.reset();
    }
}