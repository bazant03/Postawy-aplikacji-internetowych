function oblicz() { 
    //Słówko var - oznacza zmienną; typ tej zmiennej
    //będzie zależał od jej wartości;
    //Pobierz element o id=l1 do zmiennej l1:
    var l1=document.getElementById('l1');
    //pobierz wartość (łańcuch tekstowy) wpisaną w polu
    //formularza o id='l1':
    l1=l1.value;
    //Przekonwertuj (jeśli się uda) l1 do wartości typu int:
    l1=parseInt(l1);
    //Jeśli udała się próba konwersji to l1 zawiera wartość całkowitą
    //Analogicznie realizujemy pobranie wartości z drugiego pola
    // tekstowego, ale tym razem wszystko w jednej instrukcji:
    var l2=parseInt(document.getElementById('l2').value);
    //Teraz już możemy obliczyć sumę i ustawić wartość pola tekstowego
    //o id='suma':
    var s=document.getElementById('suma');
    s.value=l1+l2;
}

function obliczRate() {
    const K = parseFloat( document.getElementById("kwota").value );
    if ( isNaN(K) || !isFinite(K) || K < 0 ) {
        alert("Niepoprawna kwota pożyczki");
        return;
    }

    const n = parseInt( document.getElementById("ile-rat").value );
    if ( isNaN(n) || !isFinite(n) || n < 0 ) {
        alert("Niepoprawna ilość rat");
        return;
    }
    
    const pr = parseFloat( document.getElementById("procent").value) / 100;
    if ( isNaN(pr) || !isFinite(pr) || pr < 0 ) {
        alert("Niepoprawny procent");
        return;
    }
    const pr_mc = pr / 12;

    const rata = (K * pr_mc) / ( 1 - (1 / Math.pow(1 + pr_mc, n) ));
    const kwotaZOdstekami = rata * n;

    document.getElementById("rata-mies").value = rata.toFixed(2);
    document.getElementById("kwota-ods").value = kwotaZOdstekami.toFixed(2);

}

function kalkulator() {
    const x = parseFloat( document.getElementById("x").value );
    const y = parseFloat( document.getElementById("y").value );

    if ( isNaN(x) || isNaN(y) ) {
        alert("Podaj poprawne liczby!");
        return;
    }
    
    var tab = document.getElementsByName("operator");
    var op;

    for (let i=0;i<tab.length;i++) {
        if(tab[i].checked) op = tab[i].value;
    }

    var w;
    switch (op) {
        case "+":
            w = x + y;
            break;
        case "-":
            w = x - y;
            break;
        case "*":
            w = x * y;
            break;
        case "/":
            if ( y == 0 ) {
                alert("Dzielenie przez 0!");
                return;
            }
            w = x / y;
    }

    document.getElementById("wynik").value = w;
}