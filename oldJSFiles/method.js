        //Method -> JS`in qabaqcadan hazırladığı funksiyalardır.
        
//------------------------------------------------------------------------------------------------------------------------
        //length -> dəyişkənin içində olanların sayını göstərir.
        // var metn = "JavaScript çox \"gözəl\" proqramlaşdırma dilidir.";
        // document.write(metn+"<br>");
        // var netice = metn.length;
        // document.write("Üstdəki mətnin simvol sayı : " + netice);
        
//------------------------------------------------------------------------------------------------------------------------
       // eval() -> mətn kimi yazılan yazıları js koduna çevirmək üçün istifadə olunur
    //    var qiymet1 = 10;
    //    var qiymet2 = 20;
    //    var netice = eval("qiymet1 + qiymet2");
    //    document.write(netice);
//     function yoxlama(){
//         document.write("Salam");
//     }

//    var netice = "Date()";
//    document.write(eval(netice));

//------------------------------------------------------------------------------------------------------------------------
  //trim() ->Dəyişkənin içindəkilərin əvvəlindəki və sonundakı boşluqları təmizləyir.(misal.trim())
//   var misal1 = "JavaScript";
//   var misal2 = "Salam"
//   document.write(misal1+misal2);
//   alert(misal1.trim()+misal2.trim())

//------------------------------------------------------------------------------------------------------------------------
// slice() -> Dəyişkənin içərisindəki məlumatları parametirlər ilə kopyalayır.(Başlanğıc və Bitiş)
        // var melumat = "JavaScript Yüksək səviyyəli proqramlaşdırma dilidir.";
        // document.write(melumat + "<br>");

        // var netice = melumat.slice(10,30);
        // document.write(netice);


//------------------------------------------------------------------------------------------------------------------------
 //       substring() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş)
//  qeyd:başlanğıc parametri bitiş parametrindən heç vaxt böyük ola bilməz.
//  var  metn = "JavaScript Yüksək səviyyəli proqramlaşdırma dilidir";
//  var netice = metn.substring(27,10 );
//  document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// substr() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş(neçə simvol almaq istənilirsə onu qeyd edirik))
//  var  metn = "JavaScript Yüksək səviyyəli proqramlaşdırma dilidir";
//  var netice = metn.substr(-10,6); //mənfi olan zaman sağdan sola sayır
//  document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// concat() -> Bir dəyişkəni əsas sayaraq parametr hissəsinə yazılan dəyişkəni yenidən hazırlayır.
            //   var misal = "1";
            //   var misal1 = " 2";
            //   var misal3 = " 3";
            //   var netice = misal.concat(misal1,misal3);
            //   document.write(netice);


//------------------------------------------------------------------------------------------------------------------------
 // repeat() ->  dəyişkənin içindəki dəyəri parametrəyə yazılan say qədər çoxaldır  
//  var soz = "JavaScript <br>";
//  var netice = soz.repeat(100);
//  document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// toString() -> dəyişkənin içindəki dəyəri mətinləşdirir.
// var reqem = 5;
// var netice = reqem.toString();
// document.write(typeof netice);

//------------------------------------------------------------------------------------------------------------------------
// String() -> dəyişkənin içindəki dəyəri mütləq mətinləşdirir.
// var misal1 = true;
// var netice = String(misal1);
// document.write(typeof netice);

//------------------------------------------------------------------------------------------------------------------------
// Number() -> dəyişkənin içindəki dəyəri mütləq rəqəmləşdirir
// var soz = "JavaScript";
// var netice  = Number(soz);
// document.write(netice + "<br>");
// var saat = Number(Date());
// document.write(saat);
// var misal = true;
// var misal1 = false;
// var netice = Number(misal);
// document.write(netice + " " + Number(misal1));

//------------------------------------------------------------------------------------------------------------------------
    /* valueOf() ->dəyişkənin içində olan dəyəri bütün quruluşu 
     ilə(data tipi və yazı forması) 
     digər bir dəyişkənə daxil edir və ya ekrana yazıdırır.*/
    // var metn = "Javascript";
    // document.write(metn.valueOf());

//------------------------------------------------------------------------------------------------------------------------
//indexOf() ->Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
            //  var misal = "Javascript tamam";
            //  var netice = misal.indexOf("t",15);

            //  document.write(netice);
//------------------------------------------------------------------------------------------------------------------------
    // lastIndexOf()->Dəyişkən içərisində parametrik olaraq dəyəri axtarır və son uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.

        //   var metn = "Javascript";
        //   var netice = metn.lastIndexOf("a");

        //      document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
    //search()  -> Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
        //   var metn = "Jbbbavascript";
        //   var netice = metn.search(/A/i);

        //      document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// startsWith() -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin ƏVVƏLİNDƏ olub olmamasını Boolean(true/false) data tipi ilə göstərir 
            // var metn = "JavaScript superdir";
            // var netice = metn.startsWith("Java");
            // document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// endsWith()  -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin SONUNDA olub olmamasını Boolean(true/false) data tipi ilə göstərir 
            // var metn = "JavaScript superdir";
            // var netice = metn.endsWith("dir");
            // document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// includes() ->hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içində olub olmamasını Boolean(true/false) data tipi ilə göstərir 
            //  var metn = "Javascript superdir";
            //  var netice  = metn.includes("super");
            //  document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
    // match() ->  hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içərisində varsa o dəyərin özünü göstərər.
            // g - dəyişkənin içindəkilərin hamısını nəzərə alar -> metn.match(/Javascript/g);
            // i - böyük və kiçik hərf həssaslığını aradan qaldırar -> metn.match(/Javascript/i);
            // var metn = "Javascript script";
            // var netice = metn.match(/script/gi);
            // document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// replace() ->  hər hansı bir dəyəri methodun birinci parametr hissəsinə daxil edərək dəyişkənin içərisində varsa ikinci parametrdə olan dəyəri birinci parametrdə qeyd olunan dəyərin yerində göstərir.
            // var metn = "Javascript script script";
            // var netice = metn.replace(/Script/ig,"php");
            // document.write(netice);


//------------------------------------------------------------------------------------------------------------------------
// split() -> dəyişkənin içindəki dəyəri array data tipinə çevirir və parametrik olaraq müdaxilələr edə bilir.
// birinci parametrdə qeyd oluanan hissə arrayın vergül qoyaraq ayırması tələb olunan hissədir.
// qeyd: böyük və kiçik hərfə həssasdır.
            // var metn = "Javascript superdir";
            // var netice = metn.split("",3);
            // document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
// charAt()        ->   dəyişkənin dəyərinin index nömrəsini parametr hissəsinə daxil etdikdə həmin index nömrəsində olan dəyəri göstərir.
//    var metn = "Javascript";
//    var netice = metn.charAt(2);
//    document.write(netice);

//------------------------------------------------------------------------------------------------------------------------
//  charCodeAt()    -> dəyişkənin dəyərinin index nömrəsini parametr hissəsinə daxil etdikdə həmin dəyərin unicode`unu göstərir.
//    var metn = "Javascript";
//    var netice = metn.charCodeAt(1);
//    document.write(netice + "<br>");

//------------------------------------------------------------------------------------------------------------------------
//    fromCharCode()  -> methodun parametr hissəsinə unicodu daxil etdikdə onun hansı simvol olmasını göstərir.  
//  var metn1 = String.fromCharCode(130);
//  document.write(metn1);

//  var metn1 = "Javascript";
//  document.write(metn1.indexOf("s")+"<br>");
//  document.write(metn1.charAt(1));


//------------------------------------------------------------------------------------------------------------------------
// encodeURI()     -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatına salır.
        // var metn = "Salam necəsiz? ığöüşç";
        // document.write(encodeURI(metn));

//------------------------------------------------------------------------------------------------------------------------
 //  decodeURI()     -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatından çıxardır.
// var metn = "%C9%99";
// document.write(decodeURI(metn));

//------------------------------------------------------------------------------------------------------------------------
// encodeURIComponent() -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatına salır.
// var metn = "Salam necəsiz? ığöüşç";
//         document.write(encodeURIComponent(metn));

//------------------------------------------------------------------------------------------------------------------------
// decodeURIComponent() -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatından çıxardır.
// var metn = "%C9%99";
// document.write(decodeURIComponent(metn));

//------------------------------------------------------------------------------------------------------------------------
// escape()   ->dəyişkənin içində olan bütün dəyərlərin xüsusi simvolları unicode formatına salır.
// var metn = "~,!#$^&()";
// document.write(escape(metn));

//------------------------------------------------------------------------------------------------------------------------
//unescape() ->dəyişkənin içində olan bütün dəyərlərin xüsusi simvolları unicode formatından çıxardır.
// var metn = "%7E%2C%21%23%24%5E%26%28%29";
// document.write(unescape(metn));

//------------------------------------------------------------------------------------------------------------------------
// toUpperCase() ->dəyişkənin içindəki mətnin hərflərini hamısını BÖYÜK hərf edir.
// var metn = "Javascript";
// document.write(metn.toLocaleUpperCase());

//------------------------------------------------------------------------------------------------------------------------
//toLowerCase() ->dəyişkənin içindəki mətnin hərflərini hamısını KİÇİK hərf edir.
// var metn = "JAVASCRIPT";
// document.write(metn.toLowerCase());


//------------------------------------------------------------------------------------------------------------------------
// sub() -> dəyişkənin dəyərini alt simvola çevirir.
// var herf = "C";
// var reqem = "2";
// var herf1 = "O";
// document.write(herf+reqem.sub()+herf1);


//------------------------------------------------------------------------------------------------------------------------
// sup() -> dəyişkənin dəyərini üst simvola çevirir.
// var herf = "C";
// var reqem = "2";
// var herf1 = "O";
// document.write(herf+reqem.sup()+herf1);

//------------------------------------------------------------------------------------------------------------------------
// big()    -> dəyişkənin dəyərinin fontunu BÖYÜK edir.
// var metn = "Javascript";
// document.write(metn + "<br>");
// document.write(metn.big());

//------------------------------------------------------------------------------------------------------------------------
// small()  ->dəyişkənin dəyərinin fontunu KİÇİK edir.
// var metn = "Javascript";
// document.write(metn + "<br>");
// document.write(metn.small());

//------------------------------------------------------------------------------------------------------------------------
                // var metn = "Javascript";
    //    bold()     ->dəyişkənin dəyərinin fontunu bold(qalin) edir.
    // document.write(metn+ "<br>");
    // document.write(metn.bold()+ "<br>");
    //    italics()  ->dəyişkənin dəyərinin fontunu italic edir.
    // document.write(metn.italics()+ "<br>");
    //    strike()   ->dəyişkənin dəyərinin fontunu üstündən xətt çəkilmiş formaya salır.
    // document.write(metn.strike()+ "<br>");
    //    fixed()    ->dəyişkənin dəyərinin fontunu teletype fontlu vəziyyətə salır.
    // document.write(metn.fixed()+ "<br>");
    //    fontcolor() ->dəyişkənin dəyərini rəngləndirir.//parametrik
                    // var reng = "JavaScript";
                    // document.write(reng.fontcolor("green")+ "<br>");
                    // document.write(reng.fontcolor("#900")+ "<br>");
      // fontsize()  ->dəyişkənin dəyərinin fontunu ölçüləndirir.//parametrik
                    // var metn = "JavaScript";
                    // document.write(metn.fontsize(1)+ "<br>"); //1->7 ə qədərdir.

//------------------------------------------------------------------------------------------------------------------------

// anchor() ->dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'name' hissənini doldurur.
        // var misal = "javascript";

        // alert(misal.anchor("send"));

    // link()   ->dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'href' hissənini doldurur.
//   var misal = "javascript";

//         document.write(misal.link("http://google.com"));
//  var reqemler = 5;
//      reqemler +=  10;
//  document.write(reqemler);