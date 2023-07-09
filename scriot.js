
const DobInp = document.getElementById("DOB");
const CalcBtn = document.getElementById("calc");
const Result = document.getElementById("result");

CalcBtn.addEventListener('click', () => {

  const DOB = new Date(DobInp.value); 
  const AgeIIns = Date.now() - DOB.getTime();
  const ageDate = new Date(AgeIIns);
  const Age = Math.abs(ageDate.getUTCFullYear() - 1970);

  Result.innerText = `Your age is ${Age} years.`

});

