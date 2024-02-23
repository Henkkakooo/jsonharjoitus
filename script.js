// Etusivu
// HUOM jouduin luomaan objektitaulukosta itse mockyn, sillä se ei toiminut
fetch('https://run.mocky.io/v3/2a7e3b2d-ba57-4853-b027-3737018d95c4')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (responseJson) {
       
        fetchEtu(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    });

    function fetchEtu(obj) {
            var teksti = ""; 
            teksti = "<h1>" + obj.otsikko + "</h1>";
            teksti = teksti + "<p>" + obj.kuvaus + "</p>";
            // Näin ollen jouduin myös tuomaan kuvan tähän kansioon (linkki ei toiminut)
            teksti = teksti + "<img src='kuva.png'></img>";
            teksti = teksti + "<h3>Opintojakso: " + obj.opintojakso.nimi + "</h3>";

            document.getElementById("vastaus").innerHTML = teksti;
            

    }



// Digi Cafe

fetch('https://run.mocky.io/v3/f0801552-892f-48fd-88cf-de6415e6ea47')
    .then(function (response) {
        return response.json();
    }) 
    .then(function (responseJson) {
        
        fetchDigi(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    });

function fetchDigi(obj) {
    var header =  obj.yritys ;
    document.getElementById("header").innerHTML = header;

    var osoite = obj.yhteystiedot.osoite;
    document.getElementById("yhteystiedot").innerHTML = osoite;

    var puhelin = obj.yhteystiedot.puhelin;
    document.getElementById("puhelin").innerHTML = puhelin;

    var email = obj.yhteystiedot.email;
    document.getElementById("email").innerHTML = email;

    var tuotteet = obj.tuotteet;
    document.getElementById("tuotteet").innerHTML  = "Tuotteet: " + tuotteet;

   var henkilokunta = "";
   obj.henkilokunta.forEach(function (t) {
        henkilokunta += `
       
        Nimi: ${t.nimi} <br>
        Työnimike: ${t.titteli} <br> <br>
        `;
    });
        document.getElementById("henkilökunta").innerHTML = " <strong>Henkilökunta: </strong> <br>" + henkilokunta;
}


// Palaveri

fetch("https://run.mocky.io/v3/250dedad-fc62-4dd4-862e-0583779be504")

.then(function (response) {
    return response.json();
}) 
.then(function (responseJson) {
    
    fetchPala(responseJson);
})
.catch(function (error) {
    document.createElement("p").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});

function fetchPala(obj) {
    let aihe = obj.aihe;
    document.getElementById("aihe").innerHTML = aihe;

    let paikka = obj.paikka.osoite;
    let huone = obj.paikka.huone;
    document.getElementById("paikka").innerHTML = paikka + " " + huone;

    let aika  = "Aikataulu: " + obj.paiva + " , " + obj.alkaminen + " , " + obj.kesto;
    document.getElementById("aika").innerHTML = aika;

    let osallistujat = "<br>";
    obj.osallistujat.forEach(function (t) {
        osallistujat += `
        <br>
        ${t.nimi} <br>
        ${t.työnimike} <br> 

        `;
    });
    document.getElementById("osallistujat").innerHTML = "Osallistujat: " + osallistujat;
}

// Työpaikat

fetch("http://gis.vantaa.fi/rest/tyopaikat/v1/Tekninen%20ala")

.then(function (response) {
    return response.json();
}) 
.then(function (responseJson) {
    
    fetchTyo(responseJson);
})
.catch(function (error) {
    document.createElement("p").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});

function fetchTyo(obj) {
    
    const wrapper = document.getElementById("li-items-wrapper");
    

    obj.forEach(function (t) {
        let ul = document.createElement("ul");
        ul.setAttribute("class", "ul-item-wrapper");

        let li_ala = document.createElement("li");
        let li_tyoteht = document.createElement("li");
        let li_osoite = document.createElement("li");
        let li_linkki = document.createElement("li");

        let ala  = document.createTextNode(t.ammattiala);
        let tyoteht = document.createTextNode(t.tyotehtava);
        let osoite = document.createTextNode(t.osoite);
        let a = document.createElement("a");
        a.textContent = t.linkki;
        a.setAttribute("href", t.linkki);


        li_ala.appendChild(ala);
        li_ala.setAttribute("class", "li_ala");
        li_tyoteht.appendChild(tyoteht);
        li_osoite.appendChild(osoite);
        li_linkki.appendChild(a);
        br = document.createElement("br");
        ul.appendChild(br);
        
        ul.appendChild(li_ala);
        ul.appendChild(li_tyoteht);
        ul.appendChild(li_osoite);
        ul.appendChild(li_linkki);

        wrapper.appendChild(ul);
    });
    
}

fetchTyo(obj);

