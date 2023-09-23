function worksAnimation(gsap, ref) {
  const element = ref.current;
  console.log(111);
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
        rotation: -40,
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
        start: 'top -500px',
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
  // 第二區
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelector('.work-container__uni-img'),
        scrub: true,
        start: 'top 50%',
        end: 'bottom 10%',
      },
    })
    .fromTo(
      element.querySelector('.work-container__uni-img'),
      {
        opacity: 0.9,
        y: -80,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
    .fromTo(
      element.querySelectorAll('.work-container__image-detail')[1],
      {
        scale: 0.8,
        opacity: 0.9,
        x: -70,
        y: -120,
      },
      {
        opacity: 1,
        y: 0,
      },
      0,
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelectorAll('.work-container')[1],
        scrub: false,
        start: 'top 100%',
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
  //第三區
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelectorAll('.work-container__image-detail')[2],
        scrub: true,
        start: 'top 80%',
        end: 'top 40%',
      },
    })
    .fromTo(
      element.querySelectorAll('.work-container__image-detail')[2],
      {
        opacity: 0.7,
        x: -50,
        y: 0,
      },
      {
        opacity: 1,
        x: -50,
        y: -100,
        ease: 'power1.easeInOut', // 添加缓动效果
      },
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: element.querySelectorAll('.work-container')[2],
        scrub: false,
        start: 'top 100%',
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
