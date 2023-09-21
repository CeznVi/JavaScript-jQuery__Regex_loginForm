(() => {
    window.addEventListener('load', () => {
        var loginForm = document.querySelector('.validated-login-form');
            var inputLoginUser = loginForm.querySelector('.input_user');
            var inputPasswordUser = loginForm.querySelector('.input_pass')
            var errorLabel  = loginForm.querySelector('.error-label');
            loginForm.querySelector('.login_btn').addEventListener('click', (e) => {
                e.preventDefault(); ////отмена передачу данных

                var validate = new Validator();
                if ( validate.Validate(inputLoginUser.value)
                    .MinLength(5)
                    .MaxLength(20)
                    .IsWrongLetters()
                    .IsEmail()
                    .getErrors().length > 0) {
                    errorLabel.innerHTML = "Ошибка в поле логина:\n" + validate.getError(0);
                } else if( validate.Validate(inputPasswordUser.value)
                    .MinLength(5)
                    .MaxLength(12)
                    .isComplexityPassword()
                    .getErrors().length > 0) {
                    errorLabel.innerHTML = "Ошибка в поле пароля:\n" + validate.getError(0);                }
                if(validate.getErrors().length  === 0) {
                    loginForm.submit();
                    window.open("https://youtu.be/dQw4w9WgXcQ?si=Kyv2bFpxkUwZvCx7&t=40", "_self")
                }

            });
    })
})()