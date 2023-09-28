// detail.js
const profileImage = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");
const profilePhone = document.getElementById("profile-phone");
const profileMainEmail = document.getElementById("profile-main-email");
const profileWorkEmail = document.getElementById("profile-work-email");
const profileFacebook = document.getElementById("profile-facebook");
const profileZalo = document.getElementById("profile-zalo");
const profileGmail = document.getElementById("profile-gmail");
const editProfileButton = document.getElementById("edit-profile");
const deleteProfileButton = document.getElementById("delete-profile");


const urlParams = new URLSearchParams(window.location.search);
const profileId = urlParams.get("id");

if (profileId !== null) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const profile = profiles[profileId];

    if (profile) {
        profileImage.src = profile.image;
        profileName.textContent = profile.name;
        profilePhone.textContent = profile.phone;
        profileMainEmail.textContent = profile.mainEmail;
        profileWorkEmail.textContent = profile.workEmail;
        // profileFacebook.textContent = profile.facebook;
        // profileZalo.textContent = profile.zalo;
        // profileGmail.textContent = profile.gmail;

        document.getElementById("profile-main-email").href = `mailto:${profile.mainEmail}`;
        document.getElementById("profile-main-email").textContent = profile.mainEmail;
        document.getElementById("profile-work-email").href = `mailto:${profile.workEmail}`;
        document.getElementById("profile-work-email").textContent = profile.workEmail;
        document.getElementById("profile-facebook").href = profile.facebook;
        document.getElementById("profile-zalo").href = profile.zalo;

        editProfileButton.addEventListener("click", () => {
            window.location.href = `edit.html?id=${profileId}`;
        });

        deleteProfileButton.addEventListener("click", () => {
            const confirmDelete = confirm("Bạn có chắc chắn muốn xóa profile này?");
            if (confirmDelete) {
                profiles.splice(profileId, 1);
                localStorage.setItem("profiles", JSON.stringify(profiles));
                alert("Profile đã bị xóa.");
                window.location.href = "index.html";
            }
        });
    }
}

const copyUrlIcon = document.getElementById("copy-url");

copyUrlIcon.addEventListener("click", () => {
    // Lấy địa chỉ URL hiện tại của trang
    const currentUrl = window.location.href;

    // Tạo một phần tử textarea ẩn để sao chép vào clipboard
    const textArea = document.createElement("textarea");
    textArea.value = currentUrl;
    document.body.appendChild(textArea);

    // Chọn và sao chép nội dung vào clipboard
    textArea.select();
    document.execCommand("copy");

    // Loại bỏ phần tử textarea sau khi sao chép xong
    document.body.removeChild(textArea);

    // Hiển thị thông báo hoặc cập nhật giao diện người dùng khác (tuỳ theo bạn)
    alert("Địa chỉ URL đã được sao chép vào clipboard!");
});

const backButton = document.getElementById("back-to-list");
backButton.addEventListener("click", () => {
    window.location.href = "index.html";
});
