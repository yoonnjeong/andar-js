    // document.addEventListener('scroll', function() {
    //     const curr = document.documentElement.scrollTop;
    //     console.log(curr);
    //     if (curr >= 100) {
    //         document.getElementsByTagName('header').className = 'fixed';
    //     } else {
    //         document.getElementsByTagName('header').className = '';
    //     }
    // });
    // 안됨 ********getElementsByTagName찾기


    // document.addEventListener('scroll', function() {
    //     const curr = document.documentElement.scrollTop;
    //     // console.log(curr);
    //     if (curr >= 100) {
    //         document.querySelector('header').classList.add('fixed');
    //     } else {
    //         document.querySelector('header').classList.remove('fixed');
    //     }
    // });


    function gnbFix(){
        document.addEventListener('scroll', function(){
            const curr = document.documentElement.scrollTop;
            //이걸 밖에서 선언하면 안되는 이유?

            // console.log(curr);
            if (curr >= 100) {
                document.querySelector('header').classList.add('fixed');
            } else {
                document.querySelector('header').classList.remove('fixed');
            }
        });
    }

    gnbFix();





    //제이쿼리
    // $(window).on('mousewheel',function(e){
    //     var scrollCurr = $(this).scrollTop();
    //     var wheel = e.originalEvent.wheelDelta;
    //     if (wheel > 0 && 0 == !scrollCurr) {
    //         $('.quick-icon').fadeIn();

    //         // if(0 == scrollCurr){
    //         //     $('.quick-icon').fadeOut();
    //         // }
    //     } else {
    //         $('.quick-icon').fadeOut();
    //     }
    // });


    // $('a.btn-top').click(function(e){
    //     e.preventDefault();

    //     $('html, body').animate({scrollTop : 0}, 400, function(){
    //         $('.quick-icon').fadeOut();
    //     });
    // });

    const qIcon = document.querySelector('.quick-icon');
    const btnTop = document.querySelector('.btn-top');
    const documentEle = document.documentElement;
    const documentHei = documentEle.scrollHeight;

    window.addEventListener('wheel', function(e){
        const scrollCurr = documentEle.scrollTop;
        const wheel = e.wheelDelta;

        if (wheel > 0 && 0 == !scrollCurr) {
            qIcon.classList.add('on');

            if(0 == scrollCurr){
                qIcon.classList.remove('on');
            }
        } else {
            qIcon.classList.remove('on');
        }
    });

    btnTop.addEventListener('click',function(e){
        e.preventDefault();
        scrollUp();
    });

    function scrollUp(){
        let upper = setInterval(function(){
            if(documentEle.scrollTop != 0) {
                window.scrollBy(0, -55);
            } else {
                clearInterval(upper);
                qIcon.classList.remove('on');
            }
        }, 10);
    };


    

    const openTab = document.querySelector('.btn-tab');
    openTab.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.gnb').classList.add('fixed');
        document.querySelector('body').classList.add('fixed');
    });



    // $('header a.btn-tab').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').addClass('fixed');
    //     $('body').addClass('fixed');
    // });




    
    const closeTab = document.querySelector('.btn-close');
    closeTab.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.gnb').classList.remove('fixed');
        document.querySelector('body').classList.remove('fixed');
    });

    // $('.gnb a.btn-close').click(function(e){
    //     e.preventDefault();
    //     $('.gnb').removeClass('fixed');
    //     $('body').removeClass('fixed');
    // });

    


    const oneDepths = document.querySelectorAll('.gnb .depth1');
    // const siblingHeight = document.querySelectorAll('.gnb .depth2-list').length;
    // const h = document.querySelectorAll('.gnb .depth2-list').height;
    // const twoDepths = siblingHeight * h;
    

    oneDepths.forEach(element => {
        element.addEventListener('click', function(e){
            e.preventDefault();
            const siblingHeight = element.nextElementSibling;
            const liCnt = siblingHeight.childElementCount;
            const childEmt = siblingHeight.children[0];
            const childHeight = childEmt.offsetHeight;
            
            this.classList.toggle('on');
            siblingHeight.style.height = liCnt*childHeight + 'px';
            // console.log(liCnt*childHeight);

            if (this.classList.contains('on')) {
                siblingHeight.style.height = liCnt*childHeight + 'px';
            } else {
                siblingHeight.style.height = 0;
            }
        })

        
    });

    // for(const oneDepth of oneDepths) {
    //     oneDepth.addEventListener('click', function(e){
    //         e.preventDefault();
    //         this.classList.toggle('on');

    //         this.nextElementSibling.style.display = 'block';


    //         // console.log(this.nextElementSibling);
    //     })
    // }
    // $('.gnb .depth1').click(function(e){
    //     e.preventDefault();
    //     $(this).toggleClass('on');
    //     $(this).siblings('ul').slideToggle();
    // });


    const closeDimmed = document.querySelector('.dimmed');
    closeDimmed.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.gnb').classList.remove('fixed');
        document.querySelector('body').classList.remove('fixed');
    });

    // $('.dimmed').click(function(){
    //     $('body').removeClass('fixed');
    //     $('.gnb').removeClass('fixed');

    // });



    const searchBtn = document.querySelector('.btn-search');
    searchBtn.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('body').classList.add('fixed');
        document.querySelector('.search-area').style.display = 'block';
    });

    // $('header a.btn-search').click(function(e){
    //     e.preventDefault();
    //     $('body').addClass('fixed');
    //     $('.search-area').css('display', 'block');
    // });


    const beforeBtn = document.querySelector('.btn-before');
    beforeBtn.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('body').classList.remove('fixed');
        document.querySelector('.search-area').style.display = 'none';
    });


    // $('.search-area a.btn-before').click(function(e){
    //     e.preventDefault();
    //     $('body').removeClass('fixed');
    //     $('.search-area').css('display', 'none');
    // });


    const labTab = document.querySelector('.tab');


    const labArea = document.querySelector('.lab-area');

    const allMenu = document.querySelector('.all-menu');
    const labList = document.querySelector('.lab-list');

    const labSibling = document.querySelector('.all-wrap');
    const subSibling = document.querySelector('.all-lab-list');
    // const ChildCnt = labSibling.childElementCount;
    // const childEle = labSibling.children[0];
    // const labHei = labSibling.offsetHeight;

    labTab.addEventListener('click', function(){
        this.parentElement.classList.toggle('open');

        if (labArea.classList.contains('open')) {
            allMenu.style.display = 'block';
            labList.style.display = 'none';
            
            
            labSibling.style.height = subSibling.offsetHeight + 'px';
            labSibling.style.overflow = 'auto';

            console.log(subSibling.offsetHeight);

        } else {
            allMenu.style.display = 'none';
            labList.style.display = 'flex';

            labSibling.style.height = 0;
            labSibling.style.overflow = 'hidden';
        }
    });

    var swiper1 = new Swiper(".toppopup-swiper", {
        loop : true,
        effect: "fade",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        }
    });

    var swiper2= new Swiper(".main-swiper", {
        autoHeight: true,
        loop : true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".main-swiper .swiper-pagination",
            hide: false,
        },
    });

    var swiper3 = new Swiper(".sc-swipeleggings .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });
    var swiper4 = new Swiper(".sc-swipebratop .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });
    var swiper5 = new Swiper(".sc-swipeset .product-swiper", {
        slidesPerView: "2.2",
        spaceBetween: 10,
    });