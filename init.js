  // Start creative once all elements in window are loaded.

  document.addEventListener("DOMContentLoaded", function(event) {

    init()

    // Daclaration of objects

  var priceTag1 = document.getElementById('priceTag1');
  var priceTag2 = document.getElementById('priceTag2');
  var priceTag3 = document.getElementById('priceTag3');

  var image1 = document.getElementById('image1').firstElementChild;
  var image2 = document.getElementById('image2').firstElementChild;
  var image3 = document.getElementById('image3').firstElementChild;

  var desc1 = document.getElementById('text1');
  var marka1 = desc1.firstElementChild;
  var produkt1 = desc1.firstElementChild.nextElementSibling;
  var kind1 = desc1.lastElementChild;

  var desc2 = document.getElementById('text2');
  var marka2 = desc2.firstElementChild;
  var produkt2 = desc2.firstElementChild.nextElementSibling;
  var kind2 = desc2.lastElementChild;

  var desc3 = document.getElementById('text3');
  var marka3 = desc3.firstElementChild;
  var produkt3 = desc3.firstElementChild.nextElementSibling;
  var kind3 = desc3.lastElementChild;

  var line1 = document.getElementById('line1');
  var line2 = document.getElementById('line2');
  var line3 = document.getElementById('line3');

  var title = document.getElementById('title');
  var titleText = title.firstElementChild.textContent;
  var textPromotionValue = title.getElementsByTagName('span')[0].innerHTML;

  var button = document.getElementsByTagName('button')[0];

  var mainStart = new TimelineLite({onComplete:function() {
    this.restart();
  }});

    function init() {

      setupDOMElements();

      if (Enabler.isInitialized()) {

        if (Enabler.isVisible()) {
          enablerInitHandler();
        } else {
          Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, enablerInitHandler);
        }
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
      }
    };

    function setupDOMElements() {};

    // Daclaration of listeners

    function enablerInitHandler(event) {

      dynamicDataAvailable();
      button.addEventListener("click", ctaClick1);

      showAd();

      if (Enabler.isPageLoaded()) {
        pageLoadHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadHandler);
      }
  }

    // Daclaration of dynamic content

    var devDynamicContent = [];
    var dd1 = [];
    var dd2 = [];
    var dd3 = [];

    function dynamicDataAvailable() {

      Enabler.setProfileId(1062639);

      devDynamicContent.ezebra = [{}, {}, {}];
      devDynamicContent.ezebra[0].cena = '19,13';
      devDynamicContent.ezebra[0].image = {};
      devDynamicContent.ezebra[0].image.Url = "http://www.ezebra.pl/pol_pm_NYX-PALETA-CIENI-DO-POWIEK-MADELEINES-MACAROONS-02-28887_1.jpg";
      devDynamicContent.ezebra[0].marka = "NYX";
      devDynamicContent.ezebra[0].produkt = "PALETA CIENI DO POWIEK MADELEINES";
      devDynamicContent.ezebra[0].rodzaj = "MACAROONS 02";

      devDynamicContent.ezebra[1].cena = '26,99';
      devDynamicContent.ezebra[1].image = {};
      devDynamicContent.ezebra[1].image.Url = "http://www.ezebra.pl/pol_pm_NYX-POMADKA-W-KREMIE-SOFT-MATTE-AMSTERDAM-01-28929_1.jpg";
      devDynamicContent.ezebra[1].marka = "NYX";
      devDynamicContent.ezebra[1].produkt = "POMADKA W KREMIE SOFT MATTE";
      devDynamicContent.ezebra[1].rodzaj = "AMSTERDAM 01";

      devDynamicContent.ezebra[2].cena = '44,95';
      devDynamicContent.ezebra[2].image = {};
      devDynamicContent.ezebra[2].image.Url = "http://www.ezebra.pl/pol_pm_NYX-EYEBROW-MARKER-FLAMASTER-DO-BRWI-DEEP-02-37522_1.jpg";
      devDynamicContent.ezebra[2].marka = "NYX";
      devDynamicContent.ezebra[2].produkt = "EYEBROW MARKER FLAMASTER DO BRWI";
      devDynamicContent.ezebra[2].rodzaj = "DEEP 02";

      Enabler.setDevDynamicContent(devDynamicContent);

      dd1 = devDynamicContent.ezebra[0];
      dd2 = devDynamicContent.ezebra[1];
      dd3 = devDynamicContent.ezebra[2];

      }

    function pageLoadHandler(event) {

      priceTag1.innerText = dd1.cena + ' zł';
      priceTag2.innerText = dd2.cena + ' zł';
      priceTag3.innerText = dd3.cena + ' zł';

      image1.src = dd1.image.Url;
      image2.src = dd2.image.Url;
      image3.src = dd3.image.Url;

      marka1.innerText = dd1.marka;
      marka2.innerText = dd2.marka;
      marka3.innerText = dd3.marka;

      produkt1.innerText = dd1.produkt;
      produkt2.innerText = dd2.produkt;
      produkt3.innerText = dd3.produkt;

      kind1.innerText = dd1.rodzaj;
      kind2.innerText = dd2.rodzaj;
      kind3.innerText = dd3.rodzaj;

    }

    function ctaClick1() {
      console.log('ctaClick1');
    }

    function animateBaner() {
      var animationUncomplated = false;

      if (animationUncomplated == false) {
        console.log('sprawdza');
        mainStart.set(line1, {
          opacity: 1
        });
        mainStart.set(line2, {
          opacity: 0
        });
        mainStart.set(line3, {
          opacity: 0
        });

        animationUncomplated = true;

      }

      mainStart.add(TweenLite.to(line1, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 0.5);

      mainStart.add(TweenLite.to(line2, 3, {
        opacity: 1,
        ease: Elastic.easeInOut
      }), 0.5);

      mainStart.add(TweenLite.to(line3, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 0.5);


      mainStart.add(TweenLite.to(line1, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 1);

      mainStart.add(TweenLite.to(line2, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 1);

      mainStart.add(TweenLite.to(line3, 3, {
        opacity: 1,
        ease: Elastic.easeInOut
      }), 1);


      mainStart.add(TweenLite.to(line1, 3, {
        opacity: 1,
        ease: Elastic.easeInOut
      }), 1.5);

      mainStart.add(TweenLite.to(line2, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 1.5);

      mainStart.add(TweenLite.to(line3, 3, {
        opacity: 0,
        ease: Elastic.easeInOut
      }), 1.5);


    }
    // Animation
    animateBaner()

    function animateBaner() {

      mainStart.set(line1, {
        opacity: 0
      });
      mainStart.set(line2, {
        opacity: 0
      });
      mainStart.set(line3, {
        opacity: 0
      });


      mainStart.add(TweenLite.to(line1, 0.2, {
        opacity: 0,
      }), 0);
      mainStart.add(TweenLite.to(line1, 0.2, {
        opacity: 1
      }), 1);
      mainStart.add(TweenLite.to(line1, 0.2, {
        opacity: 0
      }), 2);
      mainStart.add(TweenLite.to(line1, 0.2, {
        opacity: 0
      }), 3);


      mainStart.add(TweenLite.to(line2, 0.2, {
        opacity: 0
      }), 0);
      mainStart.add(TweenLite.to(line2, 0.2, {
        opacity: 0
      }), 1);
      mainStart.add(TweenLite.to(line2, 0.2, {
        opacity: 1
      }), 2);
      mainStart.add(TweenLite.to(line2, 0.2, {
        opacity: 0
      }), 3);


      mainStart.add(TweenLite.to(line3, 0.2, {
        opacity: 0
      }), 0);
      mainStart.add(TweenLite.to(line3, 0.2, {
        opacity: 0
      }), 1);
      mainStart.add(TweenLite.to(line3, 0.2, {
        opacity: 0
      }), 2);
      mainStart.add(TweenLite.to(line3, 0.2, {
        opacity: 1
      }), 3);

    }

    // Is triggered when the background image in polite.js was fully loaded.

     function showAd() {

      document.getElementById('baner').className = "show";
      document.getElementById('loader').className = "hide";

    };

  })
