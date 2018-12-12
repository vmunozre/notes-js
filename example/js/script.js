$(()=> {
    $("#login").submit((_event) => {
        // Get form params
        let $form = $( this ),
            email = $form.attr('inputEmail').value,
            pass = $form.attr('inputPassword').value;
        // Login alert
        alert(`Login Success - email: ${email} - pass: ****`);
    });
});
