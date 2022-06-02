const images = document.querySelectorAll('img');
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
