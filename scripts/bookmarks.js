// Login with submit
javascript:(()=>{
    let user = {
        email: "jorge.atiende@chorizo.es",
        pass: "asdf"
    };
    // Set value
    $('#inputEmail').val(user.email);
    $('#inputPassword').val(user.pass);
    // Submit the form
    $('#login').submit();
})();
// javascript:(()=>{let user = {  email: "jorge.atiende@chorizo.es", pass: "asdf" }; $('#inputEmail').val(user.email); $('#inputPassword').val(user.pass);$('#login').submit();})();

// Login without submit
javascript:(()=>{
    let user = {
        email: "jorge.atiende@chorizo.es",
        pass: "asdf"
    };
    // Set value
    $('#inputEmail').val(user.email);
    $('#inputPassword').val(user.pass);
})();
// javascript:(()=>{let user = {  email: "jorge.atiende@chorizo.es", pass: "asdf" }; $('#inputEmail').val(user.email); $('#inputPassword').val(user.pass);})();