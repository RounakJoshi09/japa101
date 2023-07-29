export const numberToWords = (number) => {
    function roundToNearest100(number) {
        return Math.round(number / 1000) * 1000;
      }
    number = roundToNearest100(number);   
    const singleDigit = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
    ];
  
    const twoDigits = [
      '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
  
    const teenDigits = [
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
  
    const largeUnits = [
      '', 'Thousand', 'Lakh', 'Crore'
    ];
  
    function convertBelowThousand(num) {
      if (num < 10) return singleDigit[num];
      if (num < 20) return teenDigits[num - 10];
      if (num < 100) {
        const tens = twoDigits[Math.floor(num / 10)];
        const ones = singleDigit[num % 10];
        return tens + (ones ? ' ' + ones : '');
      }
      if (num < 1000) {
        const hundreds = singleDigit[Math.floor(num / 100)];
        const remaining = convertBelowThousand(num % 100);
        return hundreds + ' Hundred' + (remaining ? ' ' + remaining : '');
      }
      return ''; // Beyond a thousand (currently not supported)
    }
  
    if (number === 0) return 'Zero';
  
    let words = '';
    let unitIndex = 0;
  
    while (number > 0) {
      const chunk = number % 1000;
      if (chunk !== 0) {
        const chunkWords = convertBelowThousand(chunk);
        const unit = largeUnits[unitIndex];
        words = chunkWords + (chunkWords ? ' ' : '') + unit + (words ? ' ' + words : '');
      }
      number = Math.floor(number / 1000);
      unitIndex++;
    }
  
    return words;
  }

export const changeDurationColor = (rounds,duration) =>{
    let durationColor = 'white';
    if(rounds >= (16*7) && duration === 'week')
    {
        durationColor ='green'
    }
    else if(rounds >= (16*4) && duration === 'week')
    {
            durationColor = '#FFC01E'
    }
    else if(rounds < (16*4) && duration === 'week')
    {
        durationColor = '#FF3036'; 
    }
    else if(rounds >= (16*28) && duration === 'month')
    {
        durationColor ='green'
    }
    else if(rounds >= (16*14) && duration === 'month')
    {
            durationColor = '#FFC01E'
    }
    else if(rounds < (16*14) && duration === 'month')
    {
        durationColor = '#FF3036'; 
    }
    else if(rounds >= (16*300) && duration === 'year')
    {
        durationColor ='green'
    }
    else if(rounds >= (16*150) && duration === 'year')
    {
            durationColor = '#FFC01E'
    }
    else if(rounds < (16*150) && duration === 'year')
    {
        durationColor = '#FF3036'; 
    }
    else if(rounds >= (16) && duration === 'day')
    {
        durationColor ='green'
    }
    else if(rounds >= (8) && duration === 'day')
    {
            durationColor = '#FFC01E'
    }
    else if(rounds < (8) && duration === 'day')
    {
        durationColor = '#FF3036'; 
    }

    return durationColor;

  }
