// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// // create the smooth scroller FIRST!
// const smoother = ScrollSmoother.create({
//   content: "#content",
//   smooth: 3,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
// 	effects: true,
//   //preventDefault: true,
//   //ease: 'power4.out',
//   //smoothTouch: 0.1, 
// });

function title() {
    if ($(".title_anime").length > 0) {
        let char_com = gsap.utils.toArray('.title_anime');
        char_com.forEach((char_com) => {
            let split_text = new SplitText(char_com, {
                type: "chars,words",
                lineThreshold: 0.5,
            });
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: char_com,
                    start: "top bottom",
                    end: "bottom 10%",
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                }
            });
            tl2.from(split_text.chars, {
                duration: 1,
                x: 70,
                autoAlpha: 0,
                stagger: 0.03,
            })

        })

    }

    gsap.to('.ban-1', {
        top: '10%',
        left: '12%',
        duration: 1,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.ban-2', {
        top: '30%',
        left: '5%',
        duration: 1.3,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.ban-3', {
        top: '50%',
        left: '15%',
        duration: 1.5,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.ban-4', {
        top: '10%',
        left: '80%',
        duration: 1.7,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.ban-5', {
        top: '30%',
        left: '88%',
        duration: 2,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.ban-6', {
        top: '50%',
        left: '78%',
        duration: 2.1,
        scrollTrigger: {
            trigger: ".main"
        }
    })

    gsap.to('.center_box', {
        scale: 1,
        duration: 2
    })
    gsap.to('.top_nav', {
        width: '100%',
        duration: 1,
    })
}

function dashboard() {



    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.dashboard', {
        y: '-95%',
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".dashboard",
            start: "top 50%",
            end: "bottom -55%",
            scrub: true,
            markers: false
        }
    })
}


function logo() {
    // gsap.registerPlugin(ScrollTrigger)
    // let pin_section = document.querySelectorAll('.pin_section')
    // let pin_content_1 = document .querySelectorAll('.pin_content_1')
    // let pin_content_2 = document.querySelectorAll('.pin_content_2')

    // const tl= gsap.timeline({
    //     trigger:'.pin_section',
    //     pin:true,
    //     scrub:true,
    //     start:"top top",
    //     end:()=>"+="+pin_section.offsetWidth*2,
    //     invalidateOnRefresh: true,
    // })

    // tl.fromTo(pin_content_1,
    //     {x:0},
    //     {x:()=>-document.body.clientWidth,ease:"none"},0
    // )

    // tl.fromTo(pin_content_2,
    //     {X:0},
    //     {X:()=>document.body.clientWidth,ease:'none'},0
    // )



    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".pin_content_1", {
        x: -50,
        scrollTrigger: {
            trigger: '.pin_content_1',
            start: "top 100%",
            end: "bottom end",
            scrub: true,
            markers: false,
        }
    })

    gsap.to(".pin_content_2", {
        x: 50,
        scrollTrigger: {
            trigger: '.pin_content_2',
            start: "top 100%",
            end: "bottom end",
            scrub: true,
            markers: false,
        }
    });
}

function slide(){
    gsap.registerPlugin(ScrollTrigger)

      gsap.set(".first_slide",{
        y:20,
    })
    
    gsap.to(".first_slide",{
        y:-350,
        scrollTrigger:{
            trigger:".first_slide",
            start:"top +120%",
            end:"bottom bottom",
            scrub:true,
            markers:false,
            duration:1,
        }
    })

    gsap.set(".secound_slide",{
        y:-120,
    })
     gsap.to(".secound_slide",{
        
        y:120,
        scrollTrigger:{
            trigger:".secound_slide",
            start:"top 10%",
            end:"bottom -50%",
            scrub:true,
            markers:false,
            duration:3,
        }
    })
}

function about() {
    let aboutindex = document.querySelectorAll('.about')
    let rightimage = document.getElementById('right_image')
    let activeimages = [

    ];
    let currentindex = 0
    aboutindex.forEach((item) => {
        item.classList.remove('active')
    });
    aboutindex[currentindex].classList.add('active')
    currentindex = (currentindex + 1) % aboutindex.length
    rightimage.src = activeimages[currentindex]
    setInterval(about, 5000)
}

function slider() {
 function startSlider(id, duration, direction = 5) {
      const slide = document.querySelector(id);
      const inners = slide.querySelectorAll(".inner");
      const totalHeight = inners[0].offsetHeight;

      gsap.to(inners, {
        y: direction * -totalHeight,   // up or down
        duration: duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize(y => parseFloat(y) % totalHeight)
        }
      });
    }

    // Run sliders
    startSlider("#slider_1", 5, 1);   // down
    startSlider("#slider_2", 5, -1);  // up
    startSlider("#slider_3", 5, 1);   // down
}

// function slider2() {
//     var slide = document.getElementById('slider_2')
//     var slideheight = slide.offsetHeight / 2
//       gsap.set(slider, { y: -slideheight }); 
//     gsap.to(slide, {
//         y: `${slideheight}px`,
//         duration: 20,
//         ease: 'none',
//         repeat: -1,
//         modifiers: {
//             y: gsap.utils.unitize(y => parseFloat(y) % slideheight)
//         }
//     })
// }


// function slider3() {
//     var slide = document.getElementById('slider_3')
//     var slideheight = slide.offsetHeight / 2
//     gsap.to(slide, {
//         y: `${slideheight}px`,
//         duration: 20,
//         ease: 'none',
//         repeat: -1,
//         modifiers: {
//             y: gsap.utils.unitize(y => parseFloat(y) % slideheight)
//         }
//     })
// }