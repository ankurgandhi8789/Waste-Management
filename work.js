// JavaScript to handle data transfer between the three pages

// Extract and store submission form data
const submissionForm = document.getElementById("ewaste-form");
submissionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    

    // Redirect to shipped page
    window.location.href = "shipped_order.html";
});

// Populate shipped page with submission data
window.onload = function () {
   
    

   
};

// Handle confirmation button click on shipped page
function confirmOrder() {
    const userName = document.getElementById("userNameInput").value;
    const accountNumber = document.getElementById("accountNumberInput").value;
    const ifscCode = document.getElementById("ifscCodeInput").value;

    // Validate user input
    if (!userName || !accountNumber || !ifscCode) {
        alert("Please fill in all the details.");
        return;
    }

    // Store user data in localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("accountNumber", accountNumber);
    localStorage.setItem("ifscCode", ifscCode);

    // Redirect to confirmation page with data passed in URL
    const url = `confirmation.html?userName=${encodeURIComponent(userName)}&wasteType=${encodeURIComponent(localStorage.getItem("wasteType"))}&wasteWeight=${encodeURIComponent(localStorage.getItem("wasteWeight"))}&wasteAmount=${encodeURIComponent(localStorage.getItem("wasteAmount"))}&accountNumber=${encodeURIComponent(accountNumber)}&ifscCode=${encodeURIComponent(ifscCode)}`;
    window.location.href = url;
}

// Populate confirmation page with all data
window.onload = function () {
    const params = new URLSearchParams(window.location.search);

    const userName = params.get("userName");
    const accountNumber = params.get("accountNumber");
    const ifscCode = params.get("ifscCode");
    // const wasteType = params.get("wasteType");
    // const wasteAmount = params.get("wasteAmount");
    // const wasteWeight = params.get("wasteWeight");

    if (userName && accountNumber && ifscCode && wasteType && wasteAmount && wasteWeight) {
        document.getElementById("confirmUserName").textContent = userName;
        // document.getElementById("confirmEWasteType").textContent = wasteType;
        // document.getElementById("confirmWeight").textContent = wasteWeight;
        // document.getElementById("confirmAmount").textContent = wasteAmount;
        document.getElementById("confirmAccountNumber").textContent = accountNumber;
        document.getElementById("confirmIfscCode").textContent = ifscCode;
    }
};

// Handle "Go for New Submission" button click on confirmation page
function goToNewSubmission() {
    // Clear localStorage and redirect to submission page
    localStorage.clear();
    window.location.href = "submission.html";
}
