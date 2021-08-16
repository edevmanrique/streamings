//Function to calculate Streamings vs Blockbuster
const calculation = () => {
    //Get how many movies watch user by month
    let movies = parseInt(document.getElementById("month").value);
    //It chekcs movies value be a number
    if (isNaN(movies)) {
        document.getElementById("month").value = "";
        document.getElementById("month").setAttribute("placeholder", "Insert at least 1");
    } else {
        let netflix = document.getElementById("Netflix");
        let hbo = document.getElementById("HBO");
        let disney = document.getElementById("Disney");
        let amazon = document.getElementById("Amazon");
        let hulu = document.getElementById("Hulu");

        let strPrice = 0;

        if (netflix.checked) {
            strPrice += 8.99;
        }

        if (hbo.checked) {
            strPrice += 3.50;
        }

        if (disney.checked) {
            strPrice += 6.33;
        }

        if (amazon.checked) {
            strPrice += 5.99;
        }

        if (hulu.checked) {
            strPrice += 5.99;
        }

        if(strPrice == 0){
            document.getElementById("month").value = "";
            document.getElementById("month").setAttribute("placeholder", "Select at least 1 Streaming");
        } else {
            let bbrPrice = movies * 2.99;

            document.getElementById("str-value").style.opacity = "1";
            document.getElementById("bbr-value").style.opacity = "1";

            document.getElementById("saved").style.opacity = "1";

            if (bbrPrice < strPrice) {
                document.getElementById("saved").style.backgroundColor = "rgba(255, 123, 123, 0.795)";
                document.getElementById("saved").innerText = `You waste $${(strPrice - bbrPrice).toFixed(2)} using Streamings`;
            } else {
                document.getElementById("saved").style.backgroundColor = "rgba(148, 250, 148, 0.719)";
                document.getElementById("saved").innerText = `You save $${(bbrPrice - strPrice).toFixed(2)} with Streamings`;
            }

            document.getElementById("par-1").innerText = "You have to pay with Streamings:";
            document.getElementById("str-value").innerText = "$" + strPrice.toFixed(2);
            document.getElementById("par-2").innerText = "You have to pay with Blockbuster:";
            document.getElementById("bbr-value").innerText = "$" + bbrPrice.toFixed(2);
        }
    }
}