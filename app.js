// https://calculator.swiftutors.com/ebit-margin-calculator.html
// https://www.omnicalculator.com/finance/ebit

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EBITMarginRadio = document.getElementById('EBITMarginRadio');
const EBITRadio = document.getElementById('EBITRadio');
const operatingRevenueRadio = document.getElementById('operatingRevenueRadio');

let EBITMargin;
let EBIT = v1;
let operatingRevenue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

EBITMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Operating Revenue';
  EBIT = v1;
  operatingRevenue = v2;
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT Margin';
  variable2.textContent = 'Operating Revenue';
  EBITMargin = v1;
  operatingRevenue = v2;
});

operatingRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT Margin';
  variable2.textContent = 'EBIT';
  EBITMargin = v1;
  EBIT = v2;
});

btn.addEventListener('click', function() {
  
  if(EBITMarginRadio.checked)
    result.textContent = `EBIT Margin = ${computeEDITMargin().toFixed(2)} %`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEbit().toFixed(2)} $`;

  else if(operatingRevenueRadio.checked)
    result.textContent = `Operating Revenue = ${computeOperatingRevenue().toFixed(2)} $`;
})

// calculation

function computeEDITMargin() {
  return (Number(EBIT.value) / Number(operatingRevenue.value)) * 100;
}

function computeEbit() {
  return (Number(EBITMargin.value) / 100) * Number(operatingRevenue.value);
}

function computeOperatingRevenue() {
  return Number(EBIT.value) / (Number(EBITMargin.value) / 100);
}