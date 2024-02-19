let setLeft = document.getElementById('seats-left');
let seatsCount = document.getElementById('seats-count');
let seatDetails = document.getElementById('seat-details')
let seatDetailsParent = document.getElementById('seat-details-parent')
let seatPosition = document.getElementById('seat-position')
let SelectSeatRight = document.getElementById('Select-seat-right')
let totalPrice = document.getElementById('totalPrice')
let couponId = document.getElementById('Coupon-id')
let couponButton = document.getElementById('Coupon-button')
let discount = document.getElementById('discount')
let discountPrice = document.getElementById('discount-price')
let grandPrice = document.getElementById('grand-price')
let couponMessege = document.getElementById('coupon-messege')
let passengerNumber = document.getElementById('PassengerNumber');
let pleaseProvideNumber = document.getElementById('Please-provide-number')
let pleaseProvideName = document.getElementById('Please-provide-name')
let submitButton = document.getElementById('submit-button')
let alerts = document.getElementById('alerts')
let confirmationInfo = document.getElementById('confirmation-info')
let continueButton = document.getElementById('Continue-button')
let i = 0;


document.getElementById('busSeat').addEventListener('click', function (event) {
    if (event.target.id === 'busSeat') {
        return;
    }
    if (!event.target.classList.contains('bg-green')) {
        event.target.classList.add('bg-green');
        event.target.classList.add('text-white');
        setLeft.innerText--;
        i++;
        seatsCount.innerText = i;
        totalInner = 550 * i;
        totalPrice.innerText = totalInner;
        let div = document.createElement('div')
        div.innerHTML = `<div class="flex justify-between pt-4 pb-4">
        <p class="font-inter text-base font-default text-[#03071299]" id ="seat-positions">C2
        </p>
        <p class="font-inter text-base font-default text-[#03071299]">Economoy</p>
        <p class="font-inter text-base font-default text-[#03071299]">550</p>
        </div>`

        let seatPositions = div.querySelector('#seat-positions');
        seatPositions.innerText = event.target.innerText;
        seatDetailsParent.appendChild(div);


        if (i >= 4) {
            couponId.removeAttribute('disabled')
            couponButton.removeAttribute('disabled')
            discount.classList.remove('hidden')

            couponButton.addEventListener('click', function () {
                let inputValue = couponId.value;
                if (inputValue === 'NEW15') {
                    let discountPrice15 = (totalInner * 15) / 100
                    discountPrice.innerText = discountPrice15;
                    let discountedPrice = totalInner - discountPrice15
                    grandPrice.innerText = discountedPrice;
                    couponMessege.classList.add('hidden')
                    alerts.classList.remove('hidden')

                } else if (inputValue === 'Couple 20') {
                    let discountPrice20 = (totalInner * 20) / 100
                    discountPrice.innerText = discountPrice20
                    let discountedPrice = totalInner - discountPrice20
                    grandPrice.innerText = discountedPrice;
                    couponMessege.classList.add('hidden');
                    alerts.classList.remove('hidden')

                } else {
                    discountPrice.innerText = 0;
                    grandPrice.innerText = totalInner;
                    couponMessege.classList.remove('hidden')
                    alerts.classList.add('hidden')
                }
            })
        }

    }
    else if (event.target.classList.contains('bg-green')) {
        event.target.classList.remove('bg-green');
        event.target.classList.remove('text-white');
        setLeft.innerText++;
        i--;
        seatsCount.innerText = i;
        totalInner = totalInner - 550;
        totalPrice.innerText = totalInner;




        if (i <= 4) {
            couponId.setAttribute('disabled', true)
            couponButton.setAttribute('disabled', true)
            discount.classList.add('hidden')
            grandPrice.innerText = 0;
            discountPrice.innerText = 0;
            couponMessege.classList.add('hidden')
            couponId.value = ''
            // submitButton.setAttribute('disabled',true)
            alerts.classList.add('hidden')
        }
    }

})


    
const inputField = document.getElementById('PassengerNumber');
    
inputField.addEventListener('keyup', function(event) {
    const inputValue = event.target.value;

    const numberValue = parseFloat(inputValue);

    if (!isNaN(numberValue)) {
        submitButton.removeAttribute('disabled',true)
    } else {
        submitButton.setAttribute('disabled',true)
    }
})




submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    confirmationInfo.classList.remove('hidden')
});


continueButton.addEventListener('click', function () {
    window.location.reload();
})