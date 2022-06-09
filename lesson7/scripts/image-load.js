const images = document.querySelectorAll('[data-src');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.setAttribute('src', source);
    if(!source) {
        return;
    }
    console.log(source)
    img.source = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            io.unobserve(entry.target);
        }
    })
}, options );

images.forEach(image => {
    console.log(image);
    io.observe(image);
});

localStorage.setItem('msg1', "hello Permanant");
sessionStorage.setItem('msg2', "Temporary");

console.log(localStorage.getItem('msg'));

let now_date = new Date()
console.log(now_date);

localStorage.setItem('date', now_date);

let old_date = localStorage.getItem('date');

let o_date = new Date(old_date);

let diff_time = now_date.getTime() - o_date.getTime();
