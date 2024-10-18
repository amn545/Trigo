// alert("Stay focused.");

// //  to create a console
// console.log("What is the capital of M.P ?");
// console.log("Bhopal");

// // to create a variable

// productName = "Iphone 16 pro max";
// brand = "Apple";
// price = 190000;
// x = null;
// y = undefined;
// isfollow: true;

// console.log(price)



// gsap.from('#box', {
//               y: 250,
//               duration: 2,
//               delay: 1,
//               backgroundColor: 'indigo',
//               rotate: 360,
//               borderRadius: '50%',
//               scale: 0.5,
// })



// gsap.from('h1', {
//               y: 250,
//               duration: 1.5,
//               delay: 3,
//               opacity: 0,
//               stagger: 0.2,
//               repeat: -1,
//               yoyo: true,
// })




// gsap.to('#circle', {
//               x: 400,
//               borderRadius: '10%',
//               duration: 2.5,
//               delay: 1,
//               rotate: 180,
//               backgroundColor: 'rgba(255, 134, 145, 0.8989)',
//               repeat: 1,
//               yoyo: true,
// })

// var tl = gsap.timeline()



// tl.from('#box1', {
//               y: 206,
//               x: 500,
//               duration: 2.5,
//               delay: 1.5,
//               // opacity: 0,
//               // stagger: 0.2,
// })

// tl.from('#box2', {
//               x: 250,
//               x: 500,
//               duration: 2.5,
//               rotation: 360,

//               // opacity: 0,
//               // stagger: 0.2,
// })

// tl.from('#box3', {
//               y: -205,
//               x: 500,
//               duration: 2.5,
//               rotate: -360,
//               // opacity: 0,
//               // stagger: 0.2,
// })




gsap.from('#page1 h1', {
              scale: 0,
              rotate: 360,
              duration: 4,
              delay: 2,
})

gsap.from('#page2 h1', {
              scale: 0,
              rotate: 360,
              duration: 4,
              scrollTrigger: {
                            trigger: '#page2 h1',
                            scroller: 'body',
                            start: 'top 50%',
                            end: 'top 30%',
                            scrub: 5,
              }
})

gsap.to("#page3 h1", {
              x: 500,
              // scale: 1,
              duration: 4,
              scrollTrigger: {
                            trigger: '#page3 h1',
                            scroller: 'body',
                            start: 'top 60%',
                            end: 'top 30%',
                            scrub: 3,
              }
})

gsap.to("#page4 h1", {
              x: 1000,
              duration: 4,
              delay: 1,
              scrollTrigger: {
                            trigger: '#page4 h1',
                            scroller: 'body',
                            start: 'top 50%',
                            end: 'top 30%',
              }
})
