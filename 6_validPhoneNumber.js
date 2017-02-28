//Used regex to match phone numbers. There might be a bug in the fact that i put a [1-9] instead of [0-9]

function validPhoneNumber(phoneNumber){
  const phone = /^\(?([1-9]{3})\)?[ ]([0-9]{3})[-. ]?([0-9]{4})$/;
  console.log(phoneNumber);
  return phoneNumber.match(phone) ? true : false;
}
