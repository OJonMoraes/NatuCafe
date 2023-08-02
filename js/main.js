$(document).ready(function() {
    // Mask the telefone input with the desired format
    $('#telefone').mask('(00) 00000-0000');

    // Update telefone mask on blur based on the number of digits
    $('#telefone').blur(function(e) {
        const telefoneValue = $(this).val().replace(/\D/g, '');
        if (telefoneValue.length == 11) {
            $('#telefone').mask('(00) 00000-00009');
        } else {
            $('#telefone').mask('(00) 0000-00009');
        }
    });

    // Validate the form using jQuery Validation Plugin
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2,
                minWords: 2
            },
            email: {
                email: true
            },
            telefone: {
                required: true,
                minlength: 14,
                maxlength: 15
            }
        },
        messages: {
            nome: {
                required: "Por favor, digite seu nome.",
                minlength: "O nome deve ter pelo menos 2 caracteres.",
                minWords: "Digite pelo menos 2 palavras."
            },
            email: {
                email: "Por favor, digite um endereço de email válido."
            },
            telefone: {
                required: "Por favor, digite um número de telefone.",
                minlength: "O telefone deve ter pelo menos 14 dígitos.",
                maxlength: "O telefone não pode ter mais de 15 dígitos."
            }
        },
        submitHandler: function(form) {
            alert('Cadastro efetuado com sucesso.');
        }
    });
});