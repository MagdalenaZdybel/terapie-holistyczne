//UKRYTY TEL //
function myFunction() {
    document.getElementById("hidden").innerHTML = "508 722 384";
}
//BUTTON TO TOP //
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//OKNO MODALNE //
var modalw = $("#close_btn");

$(modalw).on('click', function () {
    console.log("Click");
    $('#isNotVisitedSite').hide('slow');
});



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    isVisitedSite = getCookie("isVisitedSite");

    if (!isVisitedSite) {
        setCookie("isVisitedSite", true, 2);
        $("#isNotVisitedSite").show();
    } else {
        if (isVisitedSite) {
            $("#isNotVisitedSite").hide();
        }
    }
}

var isVisitedSite = false;
var isCookieDisplayed = false;

isCookieDisplayed = getCookie("isCookieDisplayed");

if (!isCookieDisplayed) {

    options = {
        'info': 'Korzystanie z witryny oznacza zgodę na wykorzystywanie plików cookie.',
        'close': 'Zamknij'
    };

    var wrapper = $('<div/>').addClass('cookiepolicy').appendTo('body');
    $('<span/>').html(options['info']).appendTo(wrapper);
    $('<a/>').addClass('button').html(options['close']).appendTo(wrapper)
            .on('click', function (e) {
                setCookie("isCookieDisplayed", true, 2);
                e.preventDefault();
                $(this).parents('.cookiepolicy').remove();
            });
}

isCookieDisplayed = getCookie("isCookieDisplayed");

// OPINIE //

const tab = ['Gabrysiu obserwując Twoją pracę a ostatnio słuchając zachwytu osób, \n\
            które korzystają z Twojej pomocy jestem dumna, że byłaś między innymi moją uczennicą. \n\
            Serdecznie gratuluję. Małgorzata Worsztynowicz \n\
            Biofil Promotion',
    'Jesteś dla mnie drogowskazem na trudnej drodze macierzyństwa. Ty stawiałaś pierwsze kroki, ja podążałam za Tobą. W wielu trudnych sytuacjach mogłam i mogę liczyć na Twoją opinię i pomoc. Tam, gdzie \n\
            zawiodła medycyna zawsze pojawiałaś się z dobrą radą, która ratowała zdrowie\n\
            moje i mojej rodziny. Dziękuję Gabrysiu :) \n\
            Beata Jurga - Szybajło',
    'Gabrysia, to niezwykła osoba. Ma niesamowitą moc kojącą i łagodzącą. \n\
            Jej ciepło i pozytywna energia wiele razy przynosiły mi ratunek w ciężkim czasie… \n\
            Gabrysiu dziękuję Ci za wieloletnią pomoc w różnych ważnych dla mnie chwilach. \n\
            Gabi Mierzwiak',
    'Gabrysiu, jestem pełna uznania dla Ciebie. Podziwiam Twoją pokorę w Życiu, oddanie dla innych. Twoja pracowitość, stałe pogłębianie wiedzy i umiejętności są najlepszą rekomendacją w tym co robisz. Takich Ludzi potrzebuje dzisiejszy Świat A gdy Ja potrzebować będę cudownego Dotyku to będę dzwonić. \n\
            Maria Zych',
    'Gabrysię poznałam podczas warsztatów metody Kolorowe Motyle®, której jestem autorką. Niezwykła intuicja, wrażliwość na piękno i otwartość na drugiego człowieka sprawiły, że została cudowną konsultantką metody, która uzdrawia i odmienia nasze życie. Ciepła, skromna, a przy tym bardzo profesjonalna - taka właśnie jest Gabrysia. Miałam również zaszczyt być jej przewodniczką na drodze do odkrywania źródła kreatywności podczas warsztatów Vedic Art. Obrazy, które wychodzą spod rąk Gabrysi są niezwykłe i ukazują jej niezwykły talent! A tych talentów Gabrysia ma jeszcze więcej :) Sercem polecam jej sesje!\n\
            Iwona Aruna Mazurek',
    'Bardzo dziękuję … aksamitny dotyk o bajecznym działaniu… polecam \n\
            Ewa Jurga - Zastocka',
    'Masaż dotyk motyla, dwupunkt i polarity - Gabi zastosowała te 3 metody. Przeszedł mi ból kręgosłupa, czułam przypływ energii i lekkość ciała. Jeżeli tak działa równoważenie energii - to zdecydowanie poddałabym się temu codziennie :)"Dzięki sesji dwupunktu możesz rozpuścić w sobie (swojej matrycy) programy i wzorce, których efektów nie chcesz już doświadczać i dostroić się do częstotliwości, które zaowocują w Twoim życiu nowym rozwiązaniem." Niewiarygodne, ale efektu dwupunktu też doświadczam.\n\
            Blandyna Ness Krajewska',
    'Polecam z serca, Gabi ma niezwykłą moc. Metody, które stosuje działają...\n\
            Anna Myśliwczyk',
    'Gabrysia jest wspaniałą terapeutką. Posiada ogromną wiedzę i doświadczenie. Jej dotyk potrafi sprawić cuda. Szczerze polecam!!! Agnieszka Pol'
];
var opinie = document.getElementById("reviews");

tabLength = tab.length;

for (i = 0; i < tabLength; i++) {
    opinie.innerHTML += "<div id=element_" + i + " style=display:none class=fadeElement>" + tab[i] + "</div>";
}

$("#element_0").fadeIn(5000);

var k = 0;
setInterval(function () {
    k++;
    if (k === tabLength) {
        k = 0;
    }
    for (i = 0; i < tabLength; i++) {
        hideElement = "#element_" + i;
        $(hideElement).fadeOut(5000);
    }
    displayElement = "#element_" + k;
    $(displayElement).fadeIn(5000);
}, 11000);
