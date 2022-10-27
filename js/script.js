// image animation
const items = document.querySelectorAll('.fadeIn');

const active = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview2');
        } else {
            entry.target.classList.remove('inview2');
        }
    });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io2.observe(items[i]);
}

//text animation
const txt = document.querySelectorAll('.txtfadeIn');

const act = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview3');
        } else {
            entry.target.classList.remove('inview3');
        }
    });
}
const io3 = new IntersectionObserver(act);
for (let i = 0; i < txt.length; i++) {
    io3.observe(txt[i]);
}

//dark mode
const scrollbind = el => el.bind("scroll", function () {
    scroll = $(this).scrollTop();
    if ($(".container").length > 1)
        $(".container").scrollTop(scroll);

});
scrollbind((".container"));