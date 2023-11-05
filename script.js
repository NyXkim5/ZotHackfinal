function submit(){
    let location = document.getElementById("location").value;
    let imageurl = document.getElementById("imageurl").value;

    // console.log("I got clicked", input)
    fetch("https://0795-128-195-95-38.ngrok-free.app/getRestaurants?location=" + location + "&imageUrl=" + imageurl, {headers: new Headers({"ngrok-skip-browser-warning": "sdfsdf"})}).then(res =>res.json()).then(renderResults);
}
function renderResults(results){
    console.log("results", results);

    document.getElementById('display').innerHTML = "";
    // document.getElementById('display').innerHTML = JSON.stringify(results);

    // document.getElementById('display').innerHTML =
    for(let i = 0; i < results.businesses.length; i++){
        let business = results.businesses[i];

        document.getElementById('display').innerHTML += `
        <div class="card-container">
        <h1><a href="${business.url}">${business.name}</a></h1>
        <img class="results-image" src="${business.image_url}" />
        <h2>${business.location.address1}</h2>
        <h3>${business.rating} &#x2B50;</h3>
        


        </div>
     `   
    }


}