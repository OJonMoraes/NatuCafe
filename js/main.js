$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#telefone').blur(function(e) {
        const telefoneValue = $(this).val().replace(/\D/g, '');
        if (telefoneValue.length === 11) {
            $('#telefone').mask('(00) 00000-00009');
        } else {
            $('#telefone').mask('(00) 0000-00009');
        }
    });

    $.validator.addMethod("minWords", function(value, element, params) {
        return this.optional(element) || value.trim().split(/\s+/).length >= params;
    }, $.validator.format("Por favor, digite pelo menos {0} palavras."));

    $('form').validate({
        rules: {
            nome:  {
                required: true,
                minlength: 5,
                maxlength: 30,
                minWords: 2
            },
            email: {
                required: false,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14,
                maxlength: 15
            },
            mensagem: {
                required: true,
                minlength: 10,
                maxlength: 100
            }
        },
        messages: { 
            telefone: {
                minlength: 'Por favor, adicione um número válido!',
            }
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.reset();
            return false; 
        }
    });
});





