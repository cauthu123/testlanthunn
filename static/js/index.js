// index.js
const profileTable = document.getElementById("profile-table").getElementsByTagName('tbody')[0];
const addProfileButton = document.getElementById("add-profile");


addProfileButton.addEventListener("click", () => {
    window.location.href = "add.html";
});

// Hiển thị danh sách profiles trong bảng
function displayProfiles() {
    profileTable.innerHTML = '';

    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    profiles.forEach((profile, index) => {
        const row = profileTable.insertRow();

        // Tên
        const nameCell = row.insertCell(0);
        nameCell.textContent = profile.name;

        // Số điện thoại
        const phoneCell = row.insertCell(1);
        phoneCell.textContent = profile.phone;

        // Email
        const emailCell = row.insertCell(2);
        emailCell.textContent = profile.mainEmail;

        // Tác vụ (thêm, xóa, sửa)
        const actionsCell = row.insertCell(3);
        const editLink = document.createElement("a");
        editLink.href = `edit.html?id=${index}`;
        editLink.textContent = "Sửa";
        actionsCell.appendChild(editLink);

        const deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.textContent = "Xóa";

        // Bắt sự kiện "click" cho nút "Xóa"
        deleteLink.addEventListener("click", () => {
            if (confirm("Bạn có chắc chắn muốn xóa profile này?")) {
                deleteProfile(index);
            }
        });

        actionsCell.appendChild(deleteLink);
    });
}

// Hàm xóa profile
function deleteProfile(index) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    // Xóa profile khỏi mảng profiles
    profiles.splice(index, 1);

    // Cập nhật danh sách profiles trong localStorage
    localStorage.setItem("profiles", JSON.stringify(profiles));

    // Hiển thị lại danh sách profiles
    displayProfiles();
}



// Gọi hàm để hiển thị danh sách profiles khi trang được nạp
displayProfiles();

