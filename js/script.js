const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '168052e505msh251cb015fb0cea8p1fe62fjsn551b626235be',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};
var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);
fetch(`https://covid-193.p.rapidapi.com/history?country=indonesia&day=${todayDate}`, options)

.then(response => {
    console.log(response, 'ini response 1');
    return response.json()
})
.then(response =>{
    console.log(response, 'ini response 2');
    document.getElementById('country').innerHTML = response.parameters.country
    document.getElementById('day').innerHTML = response.parameters.day
    document.getElementById('active-cases').innerHTML = response.response[0].cases.active
    document.getElementById('new-cases').innerHTML = response.response[0].cases.new
    document.getElementById('recovered-cases').innerHTML = response.response[0].cases.recovered
    document.getElementById('total-cases').innerHTML = response.response[0].cases.total
    document.getElementById('total-deaths').innerHTML = response.response[0].deaths.total
    document.getElementById('total-tests').innerHTML = response.response[0].tests.total
})
.catch(err => console.error(err));

let buttonChange = document.getElementById('btn-change')
$('#btn-change').click(function(event) 
{
    event.preventDefault()
    let inputNegara = document.getElementById('input-negara')
    let namaNegara = inputNegara.value
    let inputTanggal = document.getElementById('input-tanggal')
    let tanggal = inputTanggal.value
    if(namaNegara == "")
    {
        swal({
        title: "Oops!",
        text: "Silahkan isi Nama Negara!",
        icon: "info",
        button: true
        });
    }
    else
    {
        fetch(`https://covid-193.p.rapidapi.com/history?country=${namaNegara}&day=${tanggal}`, options)
        .then(response => response.json())
        .then(response =>{
            console.log(response, 'ini response 2 dr button');
            document.getElementById('country').innerHTML = response.parameters.country
            document.getElementById('day').innerHTML = response.parameters.day
            document.getElementById('active-cases').innerHTML = response.response[0].cases.active
            document.getElementById('new-cases').innerHTML = response.response[0].cases.new
            document.getElementById('recovered-cases').innerHTML = response.response[0].cases.recovered
            document.getElementById('total-cases').innerHTML = response.response[0].cases.total
            document.getElementById('total-deaths').innerHTML = response.response[0].deaths.total
            document.getElementById('total-tests').innerHTML = response.response[0].tests.total
        })
        .catch(err => {
            console.error(err);
            swal({
            title: "Sorry!",
            text: "Maaf Data tidak ditemukan",
            icon: "error",
            button: true
            });
            
        });
    }
});