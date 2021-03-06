(function($) {
    var wh = window.innerHeight,
        $sectionZero = $('#zero'),
        $sectionOne = $('#one'),
        $sectionTwo = $('#two'),
        $sectionThree = $('#three'),
        $largeBackground = $('#large-background'),
        $wordOne = $('#word-1'),
        $wordTwo = $('#word-2'),
        $wordThree = $('#word-3'),
        $letter1 = $('#letter1'),
        $letter2 = $('#letter2'),
        $letter3 = $('#letter3'), 
        $letter4 = $('#letter4'),
        $letter5 = $('#letter5'),
        $letter10 = $('#letter10'),
        $letter11 = $('#letter11'),
        $letter12 = $('#letter12'); 
        $pageIndicator = $('#page-indicator'); 
 

    var isMobile = /Mobi/.test(navigator.userAgent); 

    $largeBackground.height(wh*3.4); 

    // init
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
     

    var transition0 = new TimelineMax();
    transition0
        .to($sectionZero, 3, {opacity: 0}, '0')
        // .to($pageIndicator, 4, {opacity: '1', bottom: '-8%'}, '2')
        // .to($sectionOne, 3, {opacity: '1'}, '3'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "70%",
        offset: 0
    })
    .setTween(transition0)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:name
    //     });


    var pageIndicatorAnimation = new TimelineMax();
    pageIndicatorAnimation
        .to($pageIndicator, 10, {top:'-30%'}, '0');
        // .to($pageIndicator, 4, {opacity: '1', bottom: '-8%'}, '2')
        // .to($sectionOne, 3, {opacity: '1'}, '3'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "260%",
        offset: 0
    })
    .setTween(pageIndicatorAnimation)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"pageIndicatorAnimation"
    //     });



    var enterBigLetterScreen1 = new TimelineMax();
    enterBigLetterScreen1
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionOne, 3, {opacity: '1'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "50%",
        offset: wh * .7
    })
    .setTween(enterBigLetterScreen1)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Enter first big letters"
    //     });



    /* First screen with letters moving and fading */

    var bigLettersMove = new TimelineMax();

    if (isMobile) {
        bigLettersMove
            .to($letter1, 4, {top:'7%', left:'-5%', ease: Linear.easeNone})
            .to($letter2, 4, {left:'60%', top:'7%'}, '0')
            .to($letter3, 4, {bottom:'0%', left:'10%', ease: Linear.easeNone}, '0')
            .to($letter4, 4, {bottom:'-5%'}, '0')
            .to($letter5, 4, {bottom:'4%', right:'-3%', ease: Linear.easeNone}, '0');
            // .to($sectionOne, 4, {opacity: 0}, '1');
    } else {
        bigLettersMove
            .to($letter1, 4, {top:'-18%', left:'-5%', ease: Linear.easeNone})
            .to($letter2, 4, {left:'60%', top:'-30%'}, '0')
            .to($letter3, 4, {bottom:'-25%', left:'10%', ease: Linear.easeNone}, '0')
            .to($letter4, 4, {bottom:'-8%'}, '0')
            .to($letter5, 4, {bottom:'-7%', right:'-3%', ease: Linear.easeNone}, '0');
    }
    
    new ScrollMagic.Scene( {
         offset: wh*.9,
        // triggerElement: $('#one-bg')[0], 
        duration: '80%'
    })
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Big letters move 1"
    //     })
    .setTween(bigLettersMove)
    .addTo(ctrl);



    var leaveBigLetterScreen1 = new TimelineMax();
    leaveBigLetterScreen1
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionOne, 3, {opacity: '0'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "30%",
        offset: wh * 1.6
    })
    .setTween(leaveBigLetterScreen1)
    .addTo(ctrl);
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Big letters screen 1 leaves"
    //     });




    // // /* Line moving up screen fades to white */

    var enterBigLetters2 = new TimelineMax();
    enterBigLetters2
        .to($sectionTwo, 2, {opacity: '1'}, '0');

    
    new ScrollMagic.Scene( {
         duration: '30%', 
         offset: wh * 1.9
    })
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Enter big letters 2"
    //     })
    .setTween(enterBigLetters2)
    .addTo(ctrl);



    // // /* 2nd screen with big moving letters fades to white */

    var bigLettersMoveOnHowItWorksSection = new TimelineMax();

    if (isMobile) {
        bigLettersMoveOnHowItWorksSection
            .to($letter10, 1, {top:'15%', left:'-12%'}, '0')
            .to($letter12, 1, {bottom:'0%', right:'30%'}, '0') 
            .to($letter11, 1, {right:'15%', top:'0%'}, '0');
    } else {
        bigLettersMoveOnHowItWorksSection
            .to($letter10, 1, {top:'-20%', left:'-8%'}, '0')
            .to($letter12, 1, {bottom:'-35%', right:'30%'}, '0') 
            .to($letter11, 1, {right:'28%', top:'-20%'}, '0');
    }

    
    new ScrollMagic.Scene( {
          duration: '80%', 
         offset: wh*2.2
    })
    // .addIndicators({
    //         colorStart: "rgba(0,0,0,0.5)",
    //         colorEnd: "rgba(0,0,0,0.5)", 
    //         colorTrigger : "rgba(0,0,0,1)",
    //         name:"Big letters move on How-it-works"
    //     })
    .setTween(bigLettersMoveOnHowItWorksSection)
    .addTo(ctrl);




    var leaveHowItWorksSection = new TimelineMax();
    leaveHowItWorksSection
        // .to($sectionZero, 3, {opacity: 0}, '0');
         .to($sectionTwo, 1, {opacity: '0'}, '0'); 
    
    new ScrollMagic.Scene( { 
        // triggerElement: $('#zero-bg')[0], 
        // duration: '70%'
        duration: "30%",
        offset: wh * 2.8
    })
    .setTween(leaveHowItWorksSection)
    .addTo(ctrl); 
    
    /* 3rd screen (form) fades in */

    var enterForm = new TimelineMax();
    enterForm
        .to($sectionThree, 1, {opacity: 1}, '0');

    
 

    // $("section").each(function() {
       
        new ScrollMagic.Scene({
            triggerElement: $sectionThree[0],
            duration: '50%'
        })
        .setPin($sectionThree[0])
         .setTween(enterForm)
        .addTo(ctrl);
    // });








})(jQuery);
