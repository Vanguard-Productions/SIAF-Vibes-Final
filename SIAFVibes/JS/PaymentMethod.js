function selectPayment(element) {
  // Remove selected class from all payment options
  const allPaymentOptions = document.querySelectorAll('.payment-option');
  allPaymentOptions.forEach((option) => option.classList.remove('selected'));

  // Add selected class to clicked option
  element.classList.add('selected');
}

function selectPlan(element) {
  // Remove selected class from all plan cards
  const allPlanCards = document.querySelectorAll(
    '.plan-card, .plan-card2, .plan-card3'
  );
  allPlanCards.forEach((card) => card.classList.remove('selected'));

  // Add selected class to clicked plan
  element.classList.add('selected');
}

function processPayment() {
  const selectedPayment = document.querySelector('.payment-option.selected');
  const selectedPlan = document.querySelector(
    '.plan-card.selected, .plan-card2.selected, .plan-card3.selected'
  );

  const paymentName = selectedPayment
    ? selectedPayment.querySelector('.payment-name').textContent
    : 'None';
  const planName = selectedPlan
    ? selectedPlan.querySelector('.plan-name').textContent
    : 'None';

  alert(`Processing payment for: ${planName} using ${paymentName}`);
  // Add your actual payment processing logic here
}

function goBack() {
  // Direct redirect to MainDashboard.html
  window.location.href = '/SIAFVibes/MainDashboard/MainDashboard.html';
}

// Input formatting
document.addEventListener('DOMContentLoaded', function () {
  const cardNumberInput = document.querySelector('.card-number');
  const expiryInput = document.querySelector('.expiry-date');

  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\s/g, '');
      let formattedValue = value.replace(/(.{4})/g, '$1 ');
      if (formattedValue.length > 19)
        formattedValue = formattedValue.substring(0, 19);
      e.target.value = formattedValue.trim();
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      e.target.value = value;
    });
  }

  // Add keyboard shortcut for back button (Escape key)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      goBack();
    }
  });
});
