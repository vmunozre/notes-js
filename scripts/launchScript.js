$('html').append(`
    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong" style="position: absolute; top:5px; right: 5px; font-size: 50px; color: #FFC312;"><i class="fas fa-beer"></i></button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Email List</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                    <select id="inputEmailSelect" class="custom-select" size="4">
                        <option selected value="1">gugle@chorizo.es</option>
                        <option value="2">maicrosoft@chorizo.es</option>
                        <option value="3">jaisember@chorizo.es</option>
                    </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="btnModalClose" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btnModalSubmit">Go!</button>
            </div>
            </div>
        </div>
    </div>
`);

const users = {
    1: {
        email: "gugle@chorizo.es",
        pass: "asdf"
    },
    2: {
        email: "maicrosoft@chorizo.es",
        pass: "asdf"
    },
    3: {
        email: "jaisember@chorizo.es",
        pass: "asdf"
    }
}
$('#btnModalSubmit').on("click", (_event) => {
    let value = $("#inputEmailSelect").val();
    if (value) {
        $('#inputEmail').val(users[value].email);
        $('#inputPassword').val(users[value].pass);
    } else {
        $('#inputEmail').val(users[value].email);
        $('#inputPassword').val(users[value].pass);
    }
    $('#btnModalClose').click();
});