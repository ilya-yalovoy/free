
var language = ['азербайджанский',
  'албанский',
  'амхарский',
  'английский',
  'арабский',
  'армянский',
  'африкаанский',
  'баскский',
  'белорусский',
  'бенгальский',
  'бирманский',
  'болгарский',
  'боснийский',
  'валлийский',
  'венгерский',
  'вьетнамский',
  'гавайский',
  'галисийский',
  'греческий',
  'грузинский',
  'гуджарати',
  'датский',
  'зулу',
  'иврит',
  'игбо',
  'идиш',
  'индонезийский',
  'ирландский',
  'исландский',
  'испанский',
  'итальянский',
  'йоруба',
  'казахский',
  'каннада',
  'каталанский',
  'киргизский',
  'китайский',
  'корейский',
  'корсиканский',
  'креольский (Гаити)',
  'курманджи',
  'кхмерский',
  'кхоса',
  'лаосский',
  'латинский',
  'латышский',
  'литовский',
  'люксембургский',
  'македонский',
  'малагасийский',
  'малайский',
  'малаялам',
  'мальтийский',
  'маори',
  'маратхи',
  'монгольский',
  'немецкий',
  'непальский',
  'нидерландский',
  'норвежский',
  'ория',
  'панджаби',
  'персидский',
  'польский',
  'португальский',
  'пушту',
  'руанда',
  'румынский',
  'русский',
  'самоанский',
  'себуанский',
  'сербский',
  'сесото',
  'сингальский',
  'синдхи',
  'словацкий',
  'словенский',
  'сомалийский',
  'суахили',
  'суданский',
  'таджикский',
  'тайский',
  'тамильский',
  'татарский',
  'телугу',
  'турецкий',
  'туркменский',
  'узбекский',
  'уйгурский',
  'украинский',
  'урду',
  'филиппинский',
  'финский',
  'французский',
  'фризский',
  'хауса',
  'хинди',
  'хмонг',
  'хорватский',
  'чева',
  'чешский',
  'шведский',
  'шона',
  'шотландский (гэльский)',
  'эсперанто',
  'эстонский',
  'яванский',
  'японский'];

var count = [
600,
650,
700,
350,
750,
650,
1000,
1000,
450,
1000,
1000,
500,
1000,
1000,
650,
950,
1000,
1000,
650,
605,
1000,
750,
1000,
700,
1000,
1000,
1000,
1000,
1000,
550,
420,
1000,
650,
1000,
1000,
650,
1000,
900,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
650,
650,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
1000,
380,
1000,
700,
650,
1000,
1000,
1000,
550,
650,
1000,
1000,
550,
300,
1000,
1000,
650,
1000,
1000,
1000,
550,
550,
1000,
1000,
1000,
550,
1000,
1000,
650,
1000,
650,
650,
650,
1000,
300,
1000,
1000,
650,
400,
1000,
1000,
1000,
1000,
650,
1000,
650,
650,
1000,
1000,
1000,
650,
1000,
1000
];

var form1 = document.getElementsByClassName('.form1'),
    form2 = document.getElementsByClassName('.form2');

var language1 = document.querySelector('#language1'), 
    language2 = document.querySelector('#language2');   //selector

var slider = document.querySelector("#myRange");
var output = document.querySelector("#slider-num");     //slider

var subject1 =document.querySelectorAll('.subject__item')[0],
    subject2 =document.querySelectorAll('.subject__item')[1],
    subject3 =document.querySelectorAll('.subject__item')[2];   //TEMA

    var format1 =document.querySelectorAll('.format__item')[0],
    format2 =document.querySelectorAll('.format__item')[1],
    levelFormat = 1;                                            //FORMAT

    

var rung1 = document.querySelector('#rang1'),
    rung2 = document.querySelector('#rang2'),
    rung3 = document.querySelector('#rang3'),

    rung1TEXT = document.querySelector('#rang1TEXT'),
    rung2TEXT = document.querySelector('#rang2TEXT'),
    rung3TEXT = document.querySelector('#rang3TEXT'),

    rung1IMG = document.querySelector('#rang1IMG'),
    rung2IMG = document.querySelector('#rang2IMG'),
    rung3IMG = document.querySelector('#rang3IMG');


var economy1 = document.querySelector('#economy1'),
    economy2 = document.querySelector('#economy2'),
    economy3 = document.querySelector('#economy3'),
    economy4 = document.querySelector('#economy4');


var cost = document.querySelector('#cost'),
    day = document.querySelector('#day'),
    economy = document.querySelector('#economy'),
    sum = document.querySelector('#sum'),
    calcButtonPrev = document.querySelector('#calc-button-prev'),
    calcButtonNext = document.querySelector('#calc-button-next');


    calcButtonPrev.addEventListener('click', function () {
      $('.form2').css('display', 'none');
      $('.form1').css('display', 'block');
      $('.circle22').css('background', 'none');
    });
    calcButtonNext.addEventListener('click', function () {
      $('.form1').css('display', 'none');
      $('.form2').css('display', 'block');
      $('.circle22').css('background', '#6FE8C8');
    });
output.value = slider.value;
slider.oninput = function() {
  output.value = this.value;
  calculyator();
};
output.oninput = function() {
    if (this.value>300) {
        this.value=300;
    }
    if (this.value<0) {
        this.value=1;
    }
    
  slider.value = this.value;
  calculyator();
};


subject1.addEventListener('click', function () {
  tems = 1;
  calculyator();
  subject1.style.border = "1px solid #39435B";
  subject2.style.border = "1px solid #0000";
  subject3.style.border = "1px solid #0000";
});

subject2.addEventListener('click', function () {
  tems = 1.2;
  calculyator();
  subject2.style.border = "1px solid #39435B";
  subject1.style.border = "1px solid #0000";
  subject3.style.border = "1px solid #0000";
});

subject3.addEventListener('click', function () {
  tems = 1.5;
  calculyator();
  subject3.style.border = "1px solid #39435B";
  subject2.style.border = "1px solid #0000";
  subject1.style.border = "1px solid #0000";
});


rung1.addEventListener('click', function () {
  rung1IMG.style.width = '90%';
  rung1TEXT.style.width = 'rgba(82, 63, 121, 1)';
  rung2IMG.style.width = '70%';
  rung3TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  rung3IMG.style.width = '70%';
  rung3TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  pacTime = 1;
  pac = 1;
  calculyator();
});
rung2.addEventListener('click', function () {
  rung2IMG.style.width = '90%';
  rung2TEXT.style.width = 'rgba(82, 63, 121, 1)';
  rung1IMG.style.width = '70%';
  rung1TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  rung3IMG.style.width = '70%';
  rung3TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  pacTime = 0.5;
  pac = 1.5;
  calculyator();
});
rung3.addEventListener('click', function () {
  rung3IMG.style.width = '90%';
  rung3TEXT.style.width = 'rgba(82, 63, 121, 1)';
  rung1IMG.style.width = '70%';
  rung1TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  rung2IMG.style.width = '70%';
  rung2TEXT.style.width = 'rgba(82, 63, 121, 0.7)';
  pacTime = 0.4;
  pac = 2;
  calculyator();
});

format1.addEventListener('click', function () {
  format = 1;
  format1.style.border = "1px solid #39435B";
  format2.style.border = "1px solid #0000";
  calculyator();
});

format2.addEventListener('click', function () {
  format = 1.25;
  calculyator();
  format2.style.border = "1px solid #39435B";
  format1.style.border = "1px solid #0000";

});

  for (var i = 0; i<language.length; i++) {
    var content = '<option value="'+ i +'">'+language[i]+ '</option>';
    language1.insertAdjacentHTML("beforeend", content);
    language2.insertAdjacentHTML("beforeend", content);
  }


var pages = output.value,
    tems  = 1,
    eco   = 1,
    format= 1,
    pacTime = 1,
    pac   = 1;


    economy1.addEventListener('click', function () {
      eco = 1;
      economy.textContent = '0';
      economy2.style.border = '1px solid #0000';
      economy3.style.border = '1px solid #0000';
      calculyator();
      economy4.style.border = '1px solid #0000';
    });
    economy2.addEventListener('click', function () {
      eco = 0.10;
      economy.textContent = '10';
      economy1.checked = false;
      economy2.style.border = '1px solid #39435B';
      economy3.style.border = '1px solid #0000';
      calculyator();
      economy4.style.border = '1px solid #0000';
    });

    economy3.addEventListener('click', function () {
      eco = 0.12;
      economy.textContent = '12';
      economy1.checked = false;
      economy2.style.border = '1px solid #0000';
      economy3.style.border = '1px solid #39435B';
      economy4.style.border = '1px solid #0000';
      calculyator();
    });

    economy4.addEventListener('click', function () {
      eco = 0.15;
      economy.textContent = '15';
      economy1.checked = false;
      economy2.style.border = '1px solid #0000';
      economy3.style.border = '1px solid #0000';
      economy4.style.border = '1px solid #39435B';
      calculyator();
    });


    language1.addEventListener('input', function () {
      calculyator();
    });

    language2.addEventListener('input', function () {
      calculyator();
    });


    calculyator();


    function calculyator() {
      let a = (count[language1.value] + count[language2.value])*output.value*tems*format*pac*pages;
      cost.textContent = Math.floor(a);
      let b;
      if (eco<1) {
        b = a-(a*eco);
      } else {
        b=a;
      }
      sum.textContent = Math.floor(b);
      day.textContent = 24*(Math.floor((output.value/10)*pacTime)+1);
    }