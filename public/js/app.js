



const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");
message1.textContent = "";
message2.textContent = "";
weatherForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("testing");
    const address = searchElement.value;
    console.log(address);
    fetch("/weather?address=" + address).then((response) =>{
        response.json().then((data) => {
            if (data.error){
                console.log(data.error);
            }
            else{
                console.log(data.forecastData);
                message1.textContent = data.forecastData.temperature + " grade C";
                message2.textContent = data.location;
            }
        })
    })
})