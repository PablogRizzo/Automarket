$('#myForm').submit(function(e) {

    e.preventDefault();
    var nameYsurname = $.trim($("nameYsurname").val());
    var provincia = $.trim($("provincia").val());
    var email = $.trim($("email").val());
    var textarea = $.trim($("textarea").val());

    if (nameYsurname.length == "" || provincia.length == "" || email.length == "" || textarea.length == "") {
        Swal.fire({
            type: 'warning',
            title: 'Quedan campos sin completar'
        })
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Los datos se enviaron correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
});