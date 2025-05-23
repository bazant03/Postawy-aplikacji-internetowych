function sprawdzPole(pole_id, obiektRegex) {
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //---------------------------------
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value)) return false;
    else return true;
}

function sprawdz_radio(nazwa_radio) {
    //Funkcja sprawdza czy wybrano przycisk radio
    //z grupy przycisków o nazwie nazwa_radio
    //---------------------------------------
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i = 0; i < obiekt.length; i++) {
        wybrany = obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}

function sprawdz_box(box_id) {
    //Funkcja sprawdza czy przycisk typu checkbox
    //o identyfikatorze box_id jest zaznaczony
    //----------------------------------------
    var obiekt = document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}

function sprawdz_boxy(box_ids) {
    for (const box_id of box_ids) {
        if (sprawdz_box(box_id)) return true;
    }
    return false;
}

function sprawdz() {
    //Funkcja realizujaca sprawdzanie całego fomularza
    //wykorzystując funkcje pomocnicze
    //--------------------------------
    var ok = true; //zmienna informująca o poprawnym wypełnieniu formularza
    //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
    //poprawności danych wprowadzonych do pól tekstowych
    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;
    //Sprawdzanie kolejnych pól formularza.
    //w przypadku błędu - pojawia się odpowiedni komunikat
    if (!sprawdzPole("nazwisko", obiektNazw)) {
        ok = false;
        document.getElementById("nazw_error").innerHTML = "Wpisz poprawnie nazwisko!";
    } else document.getElementById("nazw_error").innerHTML = "";

    if (!sprawdzPole("wiek", obiektWiek)) {
        ok = false;
        document.getElementById("wiek_error").innerHTML = "Wpisz poprawnie wiek!";
    } else document.getElementById("wiek_error").innerHTML = "";

    if (!sprawdzPole("email", obiektemail)) {
        ok = false;
        document.getElementById("email_error").innerHTML = "Wpisz poprawnie email!";
    } else document.getElementById("email_error").innerHTML = "";

    const box_ids = ["php", "c/c++", "java"];
    if (!sprawdz_boxy(box_ids)) {
        ok = false;
        document.getElementById("produkt_error").innerHTML = "Musisz wybrać produkt!";
    } else document.getElementById("produkt_error").innerHTML = "";

    /*if (!sprawdz_radio("payment")) {
        ok = false;
        document.getElementById("zaplata_error").innerHTML = "Musisz wybrać formę zapłaty!";
    } else document.getElementById("zaplata_error").innerHTML = "";*/

    if (ok) {
        const nazwisko = document.getElementById("nazwisko").value;
        const wiek = document.getElementById("wiek").value;
        const email = document.getElementById("email").value;
        const kraj = document.getElementById("kraj").value;
        const produkty = Array.from(document.querySelectorAll('input[name="produkt"]:checked'))
            .map((p) => p.value)
            .join(", ");
        const zaplata = document.querySelector('input[type="radio"][name="platnosc"]:checked').value;

        msg =
            `Dane z wypełnionego przez Ciebie formularza:\n` +
            `Nazwisko: ${nazwisko}\n` +
            `Wiek: ${wiek}\n` +
            `email: ${email}\n` +
            `Kraj: ${kraj}\n` +
            `Wybrane produkty: ${produkty}\n` +
            `Sposób zapłaty: ${zaplata}\n`;

        alert(msg);
    }

    return ok;
}
