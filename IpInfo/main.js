const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
        'X-RapidAPI-Host':'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`)
    .then(res => res.json())
    .catch(err => console.error(err))
}