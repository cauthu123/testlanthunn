// add.js
const addProfileForm = document.getElementById("add-profile-form");
const backToDetailButton = document.getElementById("back-to-detail"); // Thêm dòng này

addProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const imageFile = addProfileForm.elements["image"].files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function () {
            const imageData = reader.result;

            const profile = {
                image: imageData,
                name: addProfileForm.elements["name"].value,
                phone: addProfileForm.elements["phone"].value,
                mainEmail: addProfileForm.elements["main-email"].value,
                workEmail: addProfileForm.elements["work-email"].value,
                facebook: addProfileForm.elements["facebook"].value,
                zalo: addProfileForm.elements["zalo"].value,
                // gmail: addProfileForm.elements["gmail"].value,
                
            };

            const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
            profiles.push(profile);
            localStorage.setItem("profiles", JSON.stringify(profiles));

            window.location.href = "index.html";
        };

        reader.readAsDataURL(imageFile);
    } else {
        alert("Vui lòng chọn một tệp hình ảnh.");
    }
});
backToDetailButton.addEventListener("click", () => {
    window.location.href = "index.html";
});