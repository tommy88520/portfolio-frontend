function worksAnimation(gsap, ref) {
  const element = ref.current;
  if (!element) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.home-page'),
        scrub: true,
        start: 'top -300px',
        end: '50% 50%',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container__image-detail')[0],
      {
        opacity: 0.5,
        scale: 0.8,
        y: 50,
        rotation: -20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
      },
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.home-page'),
        scrub: false,
        start: 'top -300px',
        end: '50% 50%',
        toggleActions: 'restart none none reverse',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container')[0],
      {
        y: 80,
      },
      {
        y: 0,
      },
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.home-page'),
        scrub: false,
        start: 'top -800px',
        end: '60% 50%',
        toggleActions: 'restart none none reverse',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container')[1],
      {
        y: 80,
      },
      {
        y: 0,
      },
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.home-page'),
        scrub: true,
        start: 'top -1500px',
        end: '70% bottom',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container__image-detail')[2],
      {
        opacity: 0.5,
        scale: 0.8,
        x: -100,
        y: 0,
      },
      {
        opacity: 1,
        scale: 1,
        x: -100,
        y: -80,
      },
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.home-page'),
        scrub: false,
        start: 'top -1300px',
        end: '70% bottom',
        toggleActions: 'restart none none reverse',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container')[2],
      {
        y: 80,
      },
      {
        y: 0,
      },
    );
}

export { worksAnimation };
