// Highlight active section
window.addEventListener("scroll", () => {
    document.querySelectorAll(".scroll-nav a").forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section.getBoundingClientRect().top <= 100) {
            document.querySelector(".scroll-nav a.active").classList.remove("active");
            link.classList.add("active");
        }
    });
});

let detilles={
    name:'chinna',
    age:25,
    status:'jobless'
};
console.log(detilles.status);
detilles.surname='patil';
console.log(detilles);
delete detilles.age;
console.log(detilles);
console.log(detilles['surname']);
