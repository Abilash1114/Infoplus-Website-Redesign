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
        top: '28%',
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
    gsap.to('.dashboard',{
        y:'-95%',
        duration:5,
          ease: "power2.out",
          scrollTrigger:{
            trigger:".dashboard",
            start:"top 50%",
            end:"bottom -85%",
            scrub:true,
            markers:false
          }
    })
}

function logo(){
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

}