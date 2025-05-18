document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const teacherId = document.getElementById("teacherId").value.trim();
            const teacherPassword = document.getElementById("teacherPassword").value.trim();

            if (teacherId === "ibrahimcs231086" && teacherPassword === "Ibrahim@123") {
                window.location.href = "../dashboard/dashboard.html";
            } else {
                alert("Invalid ID or Password. Please try again.");
            }
        });
    }
});
