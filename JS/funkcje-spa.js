function pokaz(id) {
    var tresc = "";
    switch (id) {
        case 2:
            tresc += pokazGalerie();
            break;
        case 3:
            tresc += pokazPost();
            break;
        case 4:
            tresc += pokazKontakt();
            break;
        default:
            tresc += pokazO();
    }

    //pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById("blok").innerHTML = tresc;
}

function pokazO() {
    var tresc = "<h2><br />Pierwsze kroki</h2> ";

    //operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc +=
        "<p> W aplikacjach typu SPA (ang. Single Page Application) po przesłaniu pierwszego żądania, również dochodzi do" +
        "odesłania początkowego dokumentu HTML do przeglądarki, jednak po zakończeniu inicjalizacji wszelkie działania" +
        "użytkownika prowadzą tylko do wysłania żądań asynchronicznie (w tle za pomocą AJAX)." +
        "Odpowiedziami na te żądania zwykle są tylko fragmenty kodu HTML (zamiast całych dokumentów)," +
        "a niekiedy wyłącznie dane, które następnie są wstawiane/zamieniane w ramach istniejących elementów dokumentu HTML." +
        "Nigdy nie dochodzi do zamiany całego dokumentu HTML.</p>" +
        '<p class="srodek"><img src="zdj/zdjecia/baner.jpg" alt="Zdjęcie" /></p>' +
        "<article><h2>Wady SPA</h2><p>" +
        " Czas wytworzenia oraz nakład pracy włożony w stworzenie aplikacji jest większy," +
        "co wiąże ze sobą dodatkowe koszty, dlatego tworzenie małych stron jest nieopłacalne - " +
        "efekt dla strony z jedną zakładką jest niezauważalny. Pozycjonowanie stron wymaga większego nakładu pracy." +
        "Obecnie roboty indeksujące Google nie radzą sobie ze stronami tego typu," +
        "co wiąże się z koniecznością tworzenia rozwiązań przystosowanych dla robotów. </p></article>";

    //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie() {
    var tresc = "<h2><br />Moja galeria</h2>";
    tresc += ' <div class="galeria">';

    //wygeneruj kod HTML z obrazami za pomocą pętli for:
    for (i = 1; i <= 10; i++) {
        tresc += '<div class="slajd"> <img src="zdj/miniaturki/obraz' + i + '.JPG" /></div>';
    }

    return tresc + "</div>";
}

function pokazKontakt() {
    var tresc = "<h2><br />Kontakt</h2>";
    //uzupełnij treść:
    tresc += '<div class = "srodek">';
    tresc +=
        "<p>ul. Nadbystrzycka 38D</p>" +
        "20-618 Lublin" +
        "<p>Adres e-mail: example@example.com</p>" +
        "<p>Numer telefonu: 123 456 789</p>";
    tresc += "</div>";
    return tresc;
}

function pokazPost() {
    //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
    //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
    //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    tresc = "<h2><br />Dodaj post</h2>";
    tresc +=
        '<article class="srodek" ><form action="#" method="post" onsubmit="return pokazDane();">' +
        'Twój email:<br /><input type="email" name="email" id="email" required /><br />' +
        // dodaj kolejne 2 pola formularza
        'Imię i Nazwisko:<br /><input type="text" name="imie_nazwisko" id="imie_nazwisko" required /><br />' +
        'Numer telefonu:<br /><input type="tel" name="tel" id="tel" required /><br /><br />' +
        "Zainteresowania: <br />" +
        '<input type="checkbox" name="zainteresowania" value="Sport"> Sport' +
        '<input type="checkbox" name="zainteresowania" value="Muzyka"> Muzyka' +
        '<input type="checkbox" name="zainteresowania" value="Film"> Film' +
        '<input type="checkbox" name="zainteresowania" value="Inne"> Inne' +
        "<br /><br />" +
        "Wiek: <br />" +
        '<input type="radio" name="wiek" value="Mniej niż 10"> Mniej niż 10' +
        '<input type="radio" name="wiek" value="10-20"> 10-20' +
        '<input type="radio" name="wiek" value="21-30"> 21-30' +
        '<input type="radio" name="wiek" value="31-40"> 31-40' +
        '<input type="radio" name="wiek" value="41-50"> 41-50' +
        '<input type="radio" name="wiek" value="Więcej niż 50"> Więcej niż 50' +
        "<br /><br />" +
        'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>' +
        '<br /> <input type="submit" name="wyslij" value="Wyślij" />' +
        "</form></article>";
    return tresc;
}

function pokazDane() {
    //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
    //typu confirm do zatwierdzenia przez użytkownika:

    const email = document.getElementById("email").value;
    const imie_nazwisko = document.getElementById("imie_nazwisko").value;
    const tel = document.getElementById("tel").value;
    const komentarz = document.getElementById("wiadomosc").value;
    const zainteresowania = Array.from(document.querySelectorAll('input[name="zainteresowania"]:checked'))
        .map((z) => z.value)
        .join(", ");
    const wiek = document.querySelector('input[name="wiek"]:checked').value;

    var dane = "Następujące dane zostaną wysłane:\n";
    dane +=
        "Email: " +
        email +
        "\n" +
        "Imię i nazwisko: " +
        imie_nazwisko +
        "\n" +
        "Numer telefonu: " +
        tel +
        "\n" +
        "Zainteresowania: " +
        zainteresowania +
        "\n" +
        "Wiek: " +
        wiek +
        "\n" +
        "Komentarz: " +
        komentarz +
        "\n";
    // uzupełnij dane ...
    if (window.confirm(dane)) return true;
    else return false;
}
