/*PAGEPILING PLUGIN*/
$(document).ready(function() {
	    	$('#pagepiling').pagepiling({
	    		chapters: '#chapters',
                direction: 'horizontal', 
                verticalCentered: true,
                sectionsColor: ['#000', '#000', '#f6e298', '#882906','#fdb8a5', '#44BB48', '#f6e298', '#882906','#fdb8a5', '#44BB48', '#f6e298', '#882906','#fdb8a5','#44BB48','#f6e298'],
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13'],
                scrollingSpeed: 100,
                easing: 'swing',
                loopBottom: false,
                loopTop: false,
                css3: true,
			    navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#000',
			    	'position': 'right',
			   		'tooltips': ['Title', 'Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7', 'Chapter 8', 'Chapter 9', 'Chapter 10','QUIZ']
			   	},
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: true,
                sectionSelector: '.section',
                animateAnchor: false,
        
                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
			   	afterRender: function(){
					//playing the video
					$('video').get(0).play();
				}
			});



/*QUIZ*/

$('#quiz').quiz({
  questions: [
    {
      'q': 'Gucci came to life in _____',
      'options': [
        'Paris, France',
        'Florence, Italy',
        'Barcelona, Spain',
        'London, England'
      ],
      'correctIndex': 1,
      'correctResponse': 'PERFEZIONARE! Gucci was born in Florence, Italy in 1921.',
      'incorrectResponse': 'INESATTO... Gucci was born in Florence, Italy in 1921.'
    },
    {
      'q': 'The brand first rose to prominence for its specialized use of what material?',
      'options': [
        'Cashmere',
        'Knitwear',
        'Leather',
        'Silk'
      ],
      'correctIndex': 2,
      'correctResponse': 'PERFEZIONARE! Gucci became renowned for their high-quality leather goods.',
      'incorrectResponse': 'INESATTO... Gucci became renowned for their high-quality leather goods.'
    },
    {
      'q': 'In what city did Gucci open their first international store?',
      'options': [
        'Paris, France',
        'London, England',
        'New York, NY',
        'Beverly Hills, CA'
      ],
      'correctIndex': 2,
      'correctResponse': 'PERFEZIONARE! In 1953, Aldo and Rodolfo Gucci opened the first international store in New York City.',
      'incorrectResponse': 'INESATTO... In 1953, Aldo and Rodolfo Gucci opened the first international store in New York City.'
    },
    {
      'q': 'TRUE OR FALSE: The Gucci Museo is located in Paris, France.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 1,
      'correctResponse': 'PERFEZIONARE! The Gucci Museo opened in Florence, Italy in 2011.',
      'incorrectResponse': 'INESATTO... The Gucci Museo opened in Florence, Italy in 2011.'
    },
    {
      'q': 'As of 2015, who is the creative director of Gucci?',
      'options': [
        'Alessandro Michele',
        'Edward Enninful',
        'Maria Grazia Chiuri',
        'Olivier Rousteing'
      ],
      'correctIndex': 0,
      'correctResponse': 'PERFEZIONARE! Roman-born Alessandro Michele became creative director in January 2015.',
      'incorrectResponse': 'INESATTO... Roman-born Alessandro Michele became creative director in January 2015.'
    }
  ]
});


/*SLICK SLIDER*/
$('.single-item').slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,

});
});







