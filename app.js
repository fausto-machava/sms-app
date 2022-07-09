const encodedParams = new URLSearchParams();
const message = document.getElementById('message');
const contact = document.getElementById('contact');
const form = document.getElementById('form');
const submit = document.getElementById('submit');


form.onsubmit = function(event) {
    event.preventDefault();
    enviarSms(contact.value, message.value)
}

function Loading(isLoading) {
    submit.innerHTML = isLoading ? "<img src='loader.gif' width='20' height='20'/>" : "Enviar";
}

async function enviarSms(to, message) {
    Loading(true);
    encodedParams.append("p", "7GbsDw2tFVBxjj4osMNohO0wo2j7yAhCTkXEYTQIidGtjxGfBtKrJjrsr146I60O");
    encodedParams.append("from", "+258848709975");
    encodedParams.append("label", "INFO");
    encodedParams.append("text", message);
    encodedParams.append("to", `+258${to}`);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8bc7bb324emsh64877dc28704838p16f376jsn9f49f8bad3c9',
            'X-RapidAPI-Host': 'sms77io.p.rapidapi.com'
        },
        body: encodedParams
    };

    await fetch('https://sms77io.p.rapidapi.com/sms', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    Loading(false);
}