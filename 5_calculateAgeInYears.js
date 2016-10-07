function getAge(birthDate, nowDate) {
  if(nowDate === undefined) nowDate = new Date();

  var birthday = birthDate.getDate(), birthMonth = birthDate.getMonth(), birthYear = birthDate.getFullYear();
  var currentDate = nowDate.getDate(), nowMonth = nowDate.getMonth(), nowYear = nowDate.getFullYear()

  var age = nowYear - birthYear;
  var age_month = nowMonth - birthMonth;
  var age_day = currentDate - birthday;

  if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = age -1;
    }
    return age;
}
