function initMap() {
    const office = { lat: 37.790417, lng: -122.396193 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: office,
        scrollwheel: false
    });
    const marker = new google.maps.Marker({
        position: office,
        map: map
    });
}

document.getElementById("js-toggle-nav").addEventListener("click", function(event) {
    document.getElementsByClassName("main-nav")[0].classList.toggle("active");
});

(function () {
    let translateValue = 0;
    let count = 0;
    const slidesInBox = 4;
    const profileItem = document.getElementsByClassName("profile-item");
    const len = profileItem.length;
    document.getElementsByClassName("js-team-slider-prev")[0].addEventListener("click", function () {
        if (count === 0) {
            return false;
        }
        count -= 1;
        translateValue += 92.5;
        for (let i = 0; i < len; i++) {
            profileItem[i].style.transform = "translate(" + translateValue + "%, 0%)";
        }
    });

    document.getElementsByClassName("js-team-slider-next")[0].addEventListener("click", function () {
        if (count >= len - slidesInBox) {
            return false;
        }
        count += 1;
        translateValue -= 92.5;
        for (let i = 0; i < len; i++) {
            profileItem[i].style.transform = "translate(" + translateValue + "%, 0%)";
        }
    });
})();
