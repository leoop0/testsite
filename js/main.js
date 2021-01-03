// nav animation

  TweenMax.from("#brand", 1, {
		delay: 0.4,
		y: 10,
		opacity: 0,
		ease: Expo.easeInOut
  })

  TweenMax.staggerFrom("#menu li a", 1, {
		delay: 0.4,
		opacity: 0,
		ease: Expo.easeInOut
  }, 0.1);

  TweenMax.from("#toggle", 1, {
		delay: 0.4,
		y: 10,
		opacity: 0,
		ease: Expo.easeInOut
  })

// media animation

  TweenMax.staggerFrom(".media ul li ion-icon",1,{
    delay: 0.4,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
  }, 0.1);

// hero banner animation

  TweenMax.from(".main-container", 1, {
    delay: 0.8,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  },0,1)

// bg animation

  TweenMax.to(".loading-screen", 4, {
    delay: 0.2,
    top: "-110%",
    ease: Expo.easeInOut
});


// liquid image hover

  var hoverDistort = new hoverEffect({
    parent: document.querySelector('.img-banner-container'),
    intensity: 0.5,
    image1: '../assets/img/bdx.jpg',
    image2: '../assets/img/Bdx2.jpg',
    angle: Math.PI/6,
    displacementImage: '../assets/img/4.png'
  });


