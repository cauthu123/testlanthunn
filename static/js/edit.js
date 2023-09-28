// edit.js
// ...

const editProfileForm = document.getElementById("edit-profile-form");
const backToDetailButton = document.getElementById("back-to-detail"); // Thêm dòng này

// Lấy ID profile từ URL
const urlParams = new URLSearchParams(window.location.search);
const profileId = urlParams.get("id");

if (profileId !== null) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const profile = profiles[profileId];

    if (profile) {
        editProfileForm.elements["profile-id"].value = profileId;
        editProfileForm.elements["name"].value = profile.name;
        editProfileForm.elements["phone"].value = profile.phone;
        editProfileForm.elements["main-email"].value = profile.mainEmail;
        editProfileForm.elements["work-email"].value = profile.workEmail;
        editProfileForm.elements["facebook"].value = profile.facebook;
        editProfileForm.elements["zalo"].value = profile.zalo;

        // Bắt sự kiện khi bấm nút "Lưu"
        editProfileForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const imageFile = editProfileForm.elements["image"].files[0];

            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function () {
                    const imageData = reader.result;
                    profile.image = imageData;
                    profile.name = editProfileForm.elements["name"].value;
                    profile.phone = editProfileForm.elements["phone"].value;
                    profile.mainEmail = editProfileForm.elements["main-email"].value;
                    profile.workEmail = editProfileForm.elements["work-email"].value;
                    profile.facebook = editProfileForm.elements["facebook"].value;
                    profile.zalo = editProfileForm.elements["zalo"].value;
                    

                    profiles[profileId] = profile;
                    localStorage.setItem("profiles", JSON.stringify(profiles));

                    window.location.href = `detail.html?id=${profileId}`;
                };

                reader.readAsDataURL(imageFile);
            } else {
                alert("Vui lòng chọn một tệp hình ảnh.");
            }
        });
    }

    // Thêm sự kiện khi bấm nút "Quay lại Chi tiết Profile"
    backToDetailButton.addEventListener("click", () => {
        window.location.href = `detail.html?id=${profileId}`;
    });
}
