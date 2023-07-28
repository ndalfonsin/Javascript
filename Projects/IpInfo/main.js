const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8b64cb37b8msh635e94b5f80527ap120a46jsn0af55c71ea09',
		'X-RapidAPI-Host': 'whoisapi-ip-geolocation-v1.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://whoisapi-ip-geolocation-v1.p.rapidapi.com/api/v1?ipAddress=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err));
}

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $result = document.querySelector('#result');

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {value} = $input;
    if (!value) return;

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');
     

    const ipInfo = await fetchIpInfo(value);
    console.log(ipInfo);
    
    if (ipInfo) {
        $result.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');
})