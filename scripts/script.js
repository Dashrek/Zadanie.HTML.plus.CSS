document.addEventListener("mousemove", (e) => {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 400); // usuwa iskrę po animacji
});
document.addEventListener("DOMContentLoaded", () => {
    if (window.self !== window.top) {
        const elem = document.querySelector(".ukryj-w-iframe");
        if (elem) elem.style.display = "none";
    }
    else if (window.self !== window.top) {
        const elem = document.querySelector(".ukryj-w-iframe");
        if (elem) elem.style.display = "none";
    }
});