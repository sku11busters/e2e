import './styles.css';

function luhnCheck(input) {
    const number = input.toString();
    const digits = number.replace(/\D/g, "").split("").map(Number);
    let sum = 0;
    let isSecond = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (isSecond) {
        digit *= 2;
        if (digit > 9) {
            digit -= 9;
        }
        }
        sum += digit;
        isSecond = !isSecond;
    }
    return sum % 10 === 0;
}
  
function determinePaymentSystem(cardNumber) {
    if (cardNumber.startsWith("4")) {
        return "Visa";
    } else if (cardNumber.startsWith("51") || cardNumber.startsWith("52") || cardNumber.startsWith("53") || cardNumber.startsWith("54") || cardNumber.startsWith("55") || cardNumber.startsWith("27")) {
        return "Mastercard";
    } else if (cardNumber.startsWith("2200") || cardNumber.startsWith("2201") || cardNumber.startsWith("2202") || cardNumber.startsWith("2203") || cardNumber.startsWith("2204")) {
        return "Mir";
    } else {
        alert('Некорректный номер карты')
    }
}
  
function updateUI(cardNumber, paymentSystem) {
    const paymentSystems = document.getElementsByClassName("payment-systems")[0].children;
    for (let i = 0; i < paymentSystems.length; i++) {
        paymentSystems[i].style.opacity = "0.5";
    }
    const paymentSystemImage = document.getElementById(`${paymentSystem.toLowerCase()}-image`);
    paymentSystemImage.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.getElementById("card-number-input");
    const validateButton = document.getElementById("validate-button");

    validateButton.addEventListener("click", () => {
        const cardNumber = cardNumberInput.value;
        const paymentSystem = determinePaymentSystem(cardNumber);
        if (luhnCheck(cardNumber)) {
            updateUI(cardNumber, paymentSystem);
        } else {
            console.log("Invalid card number");
        }
    });
});