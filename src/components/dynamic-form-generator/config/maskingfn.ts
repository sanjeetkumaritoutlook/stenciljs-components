// Adding masking config const here...
export const formatDisplayCurrencyDecimal = (value) =>
    '$' +
    parseFloat(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  export const formatDisplayEuropeanNumberWithDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? '.' : ',';
          })
      : value;
  export const formatDisplayEuropeanNumberOrDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? '.' : ',';
          })
      : value;
  export const formatDisplayEuropeanNumberWithDecimalTruncate = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(Math.round(value * 100) / 100)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? '.' : ',';
          })
      : value;
  export const formatDisplayEuropeanNumberRounded = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(Math.round(Number(value)))
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? '.' : ',';
          })
      : value;
  export const formatDisplayInternationalNumberWithDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : value;
  export const formatDisplayInternationalNumberWithRoundedDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(Math.round(value * 100) / 100).replace(
          /(\d)(?=(\d{3})+\.)/g,
          '$1,'
        )
      : value;
  export const formatDisplayInternationalNumber = (value) =>
    value.replace(/(.)(?=(\d{3})+$)/g, '$1,');
  export const formatDisplayCurrency = (value) =>
    '$' + value.replace(/(.)(?=(\d{3})+$)/g, '$1,');
  export const formatDisplayUpperCase = (value) =>
    value.toUpperCase().replace(/[^a-z]/gi, '');
  export const formatDisplayLowerCase = (value) =>
    value.toLowerCase().replace(/[A-Z][a-z]*/g, '');
  // export const formatDisplayTitleCase = (value) =>
  //   value.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
  //     c ? c.toUpperCase() : ' ' + d.toUpperCase()
  //   );
  export const formatDisplayNumberDecimal = (value) =>
    !isNaN(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : value;
  export const formatDisplayPercentageWithDecimal = (value) =>
    !isNaN(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + '%'
      : value;
  export const formatDisplayPercentageDecimalWithoutComma = (value) =>
    !isNaN(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          .split(',')
          .join('') + '%'
      : value
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .split(',')
          .join('')
          .trim() + '%';
  export const formatDisplayPercentageDecimal = (value) =>
    !isNaN(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .split(',')
          .join('') + '%'
      : value;
  export const formatDisplayPercentage = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value.replace(/(.)(?=(\d{3})+$)/g, '$1,') + '%'
      : value;
  export const formatDisplaySentenceCase = (value) =>
    value.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, (s) =>
      s.replace(/([a-z])/, (s) => s.toUpperCase())
    );
  export const formatDisplayNumberOrDecimal = (value) =>
    value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  export const percentageFormatRoundedFourDecimal = (value) =>
    !isNaN(value)
      ? String(
          (+value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          }) + '%'
        )
          .split(',')
          .join('')
      : value;
  export const formatDisplayPercentageOrDecimal = (value) =>
    !isNaN(value)
      ? String(value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '%')
          .split(',')
          .join('')
      : value;
  export const percentageFormatter = (value) =>
    !isNaN(value)
      ? String(
          (+value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 9,
          }) + '%'
        )
          .split(',')
          .join('')
      : value;
  export const formatDisplayNumberOrRoundedDecimal = (value) =>
    !isNaN(value)
      ? parseFloat(value)
          .toFixed(/\./g.test(value) ? 2 : 0)
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      : value;
  export const formatDisplayCurrencyOrRoundedDecimal = (value) =>
    !isNaN(value)
      ? '$' +
        parseFloat(value)
          .toFixed(/\./g.test(value) ? 2 : 0)
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      : value;
  // export const formatDisplayUpperCaseWithSpaceNumber = (value) =>
  //   value.replace(/\b([^a-z])(\w+)/g, function ($0, $1, $2) {
  //     return $1.toUpperCase() + $2.toUpperCase();
  //   });
  // export const formatDisplayTitleCaseWithSpaceNumber = (value) =>
  //   value.replace(/\b([a-z])(\w+)/g, function ($0, $1, $2) {
  //     return $1.toUpperCase() + $2.toLowerCase();
  //   });
  export const formatDisplayUpperCaseAccentWithSpaceNumber = (p) => {
    let c = 'àèìòùáéíóúýâêîôûãñõäëïöüÿçøåæ';
    let s = 'ÀÈÌÒÙÁÉÍÓÚÝÂÊÎÔÛÃÑÕÄËÏÖÜŸÇØÅÆ';
    let n = '';
    for (let i = 0; i < p.length; i++) {
      if (c.search(p.substr(i, 1)) >= 0) {
        n += s.substr(c.search(p.substr(i, 1)), 1);
      } else {
        n += p.substr(i, 1);
      }
    }
    return n.toUpperCase();
  };
  export const removeSpace = (value) => value.replace(/\s/g, '');
  export const formatDisplayCurrencyDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? '$' +
        parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : value;
  export const formatDisplayCurrencyOrRoundedDecimalWithSpace = (value) =>
    !isNaN(value)
      ? '$' +
        parseFloat(value)
          .toFixed(/\./g.test(value) ? 2 : 0)
          .replace(/\s*?(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      : value;
  export const formatDisplayCurrency$OrRoundedDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? '$' +
        parseFloat(value)
          .toFixed(/\./g.test(value) ? 2 : 0)
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
      : value;
  export const percentageFormatRoundedFourDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(
          (+value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4,
          }) + '%'
        )
          .split(',')
          .join('')
      : value;
  export const percentageFormatterWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(
          (+value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 9,
          }) + '%'
        )
          .split(',')
          .join('')
      : value;
  export const formatDisplayCurrencyOrDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? '$' + value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim()
      : value;
  export const formatDisplayNumberWithDecimal = (value) =>
    !isNaN(value)
      ? value.indexOf('.') == -1
        ? parseFloat(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        : value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      : value;
  export const formatDisplayNumberWithDecimalWithSpace = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value.indexOf('.') == -1
        ? parseFloat(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        : parseFloat(value)
            .toFixed(2)
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            .trim()
      : value;
  export const formatInternationalonlynonDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? Number.isInteger(Number(value))
        ? parseFloat(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        : value
      : value;
  export const formatInternationaltoDecimaluptoTwoDigits = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? !(value.split('.')[1]?.length > 2)
        ? parseFloat(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        : value
      : value;
  export const formatDisplayNumberOrDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim()
      : value;
  export const formatDisplayPercentageOrDecimalWithSpace = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '%')
          .split(',')
          .join('')
          .trim()
      : value;
  export const formatDisplayNumberWithDecimalWithoutcomma = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value.indexOf('.') == -1
        ? parseFloat(value)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
            .split(',')
            .join('')
        : value
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            .split(',')
            .join('')
            .trim()
      : value;
  export const formatDisplayFrenchNumberOrDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? ' ' : ',';
          })
      : value;
  export const formatDisplayFrenchNumberWithDecimal = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? parseFloat(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
          .replace(/[,.]/g, function (x) {
            return x == ',' ? ' ' : ',';
          })
      : value;
  export const formatDisplayUpperCaseWithNumber = (value) =>
    value.toUpperCase().replace(/[^a-z0-9]/gi, ' ');
  export const changeValueToString = (value) => String(value);
  export const formatDisplayNumberWithoutcomma = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? value.indexOf('.') == -1
        ? value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
        : value
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            .split(',')
            .join('')
            .trim()
      : value;
  export const percentageFormatRoundedTwoDecimal = (value) =>
    /^\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? String(
          (+value).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }) + '%'
        )
          .split(',')
          .join('')
      : value;
  export const formatonlyfornonDecimal = (value) =>
    Number.isInteger(Number(value))
      ? value.replace(/(.)(?=(\d{3})+$)/g, '$1,')
      : value;
  
  export const formatDecimal = (value) =>
    value.match(/^(\d{1,3}(\,\d{3})*)(\.\d{2})?$/);
  export const formatPercentage = (value) =>
    value.match(/^(\d{1,3}(\,\d{3})*)(\.\d{2})?\%$/);
  export const formatInternationalNumber = (value) =>
    value.match(/^(?=(?:\D*\d){1})(\d{1,3}(,\d{3})*)$/);
  export const formatCurrency = (value) =>
    value.match(/^\$(\d{1,3}(\,\d{3})*)(\.\d{2})?$/);
  export const allUpperCase = (value) =>
    value.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
  export const titleCase = (value) => value.match(/(\b[A-Z][a-z]*\s*\b)+/);
  export const formatPercentageWithDecimal = (value) =>
    value.match(/^(\d{1,3}(\,\d{3})*)(\.\d{2})\%$/);
  export const formatPercentageWithOutDecimal = (value) =>
    value.match(/^(\d{1,3}(\,\d{3})*)\%$/);
  export const formatCurrencyWithDecimal = (value) =>
    value.match(/^\$(\d{1,3}(\,\d{3})*)(\.\d{2})$/);
  export const formatCurrencyWithOutDecimal = (value) =>
    value.match(/^\$(\d{1,3}(\,\d{3})*)$/);
  export const formatNumberWithDecimal = (value) =>
    value.match(/^(\d{1,3}(\,\d{3})*)(\.\d{2})$/);
  export const formatAllLowerCase = (value) => value.match(/^[a-z]+$/);
  export const lowerCaseAlphaNumeric = (value) =>
    value.match(/^[a-z]+\s?[(]+[0-9]+[)]+$/);
  export const digitsContainsWords = (value) =>
    value.match(/2?(1st|2nd|3rd|[0|4-9]th)\b|1[0-9]th|3(0th|1st)\b/);
  export const morethanZeroNumeral = (value) => value.match(/^(0*[1-9][0-9]*)$/);
  export const formatDisplayCurrencyExludingDecimal = (value) =>
    /^\s*[-+]?[0-9]\d*(\.\d+)?$/.test(value)
      ? Number.isInteger(Number(value))
        ? (value.includes('-') ? '-$' : '$') +
          value
            .replace(/\s/g, '')
            .replace(/-+/, '')
            .replace(/(.)(?=(\d{3})+$)/g, '$1,')
        : value.replace(/\s/g, '')
      : value;
  export const formatDisplayCurrencyIncludingDecimal = (value) =>
    /^\s*[-+]?[0-9]\d*(\.\d+)?$/.test(value)
      ? (value.includes('-') ? '-$' : '$') +
        value
          .replace(/\s/g, '')
          .replace(/-+/, '')
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
          .trim()
      : value;
  export const formatSpecialCharacterstoUnderScore = (value) =>
    /[;/]+/g.test(value) ? value.replace(/[;/]+/g, '_') : value;
  
  export const countryLookup = {
    Belgien: { label: 'Belgien', value: 'Belgien', coefficient: 0.0925 },
    Bulgarien: { label: 'Bulgarien', value: 'Bulgarien', coefficient: 0.02 },
    Dänemark: { label: 'Dänemark', value: 'Dänemark', coefficient: 0.011 },
    Deutschland: {
      label: 'Deutschland',
      value: 'Deutschland',
      coefficient: 0.19,
    },
    Finnland: { label: 'Finnland', value: 'Finnland', coefficient: 0.24 },
    Frankreich: { label: 'Frankreich', value: 'Frankreich', coefficient: 0.09 },
    Griechenland: {
      label: 'Griechenland',
      value: 'Griechenland',
      coefficient: 0.15,
    },
    Großbritannien: {
      label: 'Großbritannien',
      value: 'Großbritannien',
      coefficient: 0.12,
    },
    Irland: { label: 'Irland', value: 'Irland', coefficient: 0.05 },
    Italien: { label: 'Italien', value: 'Italien', coefficient: 0.04 },
    Kroatien: { label: 'Kroatien', value: 'Kroatien', coefficient: 0.05 },
    Luxemburg: { label: 'Luxemburg', value: 'Luxemburg', coefficient: 0.04 },
    Malta: { label: 'Malta', value: 'Malta', coefficient: 0.11 },
    Niederlande: {
      label: 'Niederlande',
      value: 'Niederlande',
      coefficient: 0.21,
    },
    Österreich: { label: 'Österreich', value: 'Österreich', coefficient: 0.11 },
    Portugal: { label: 'Portugal', value: 'Portugal', coefficient: 0.09 },
    Rumänien: { label: 'Rumänien', value: 'Rumänien', coefficient: 0.01 },
    Slowakei: { label: 'Slowakei', value: 'Slowakei', coefficient: 0.08 },
    Slowenien: { label: 'Slowenien', value: 'Slowenien', coefficient: 0.085 },
    Spanien: { label: 'Spanien', value: 'Spanien', coefficient: 0.0815 },
    Ungarn: { label: 'Ungarn', value: 'Ungarn', coefficient: 0.1 },
  };
  export const setElementValueCountryTaxes: any = (value, ci_premium) => {
    let ci_country_tax_rate = 0;
    let ci_country_tax_rate_formatted = 0;
    let ci_country_tax_amount = 0;
  
    if (countryLookup[value]) {
      ci_country_tax_rate = countryLookup[value].coefficient * 100;
    } else {
      ci_country_tax_rate = 100 * 0;
    }
  
    if (ci_country_tax_rate != 0) {
      ci_country_tax_rate_formatted = ci_country_tax_rate;
    }
  
    ci_country_tax_rate_formatted =
      ci_country_tax_rate_formatted != 0 ? ci_country_tax_rate_formatted : 0;
    ci_country_tax_amount =
      (ci_premium && ci_country_tax_rate) != 0
        ? ci_premium * (ci_country_tax_rate / 100)
        : 0;
  
    return { ci_country_tax_amount, ci_country_tax_rate_formatted };
  };
  export const formatDisplayCurrencyDecimalHavingSpecialChars = (value) => {
    if (/[$,]+/g.test(value)) {
      value = value.replace(/[$,]+/g, '');
      return `$` + value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim();
    } else {
      return `$` + value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim();
    }
  };
  export const formatDisplayInternationalNumberWithDecimalHavingSpecialChars = (
    value
  ) => {
    if (/[$,]+/g.test(value)) {
      value = value.replace(/[$,]+/g, '');
      return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim();
    } else {
      return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',').trim();
    }
  };
  export const formatDisplayGenericRemovedSpecialChars = (value) =>
    value.replace('$', '').replace(',', '');
  
  //to be used only when special characters masking is used similar to Opus Wizard
  // validatorFn: (value) => !!value ?  value.match(/^\s*?\$*?[-+]?[\s*0-9*]+(,[0-9]+)?\d*(\.\d+)?$/) : true,
  
  export const formatTime = (value) => {
    if (value != undefined) {
      let curValue = value.replace('.', ':');
      let firstNumber, secondNumber, thirdNumber, tempValue;
      curValue = curValue.split('')[0] === '0' ? curValue.slice(1) : curValue;
      tempValue = curValue;
  
      if (
        tempValue.includes('am') ||
        tempValue.includes('AM') ||
        tempValue.includes('Am') ||
        tempValue.includes('aM') ||
        tempValue.includes('pm') ||
        tempValue.includes('PM') ||
        tempValue.includes('Pm') ||
        tempValue.includes('pM')
      ) {
        tempValue = tempValue.replace(/(([Aa]|[Pp])\.?[Mm]\.?)/, '');
      } else {
        tempValue = tempValue;
      }
  
      let arr = tempValue.split(':');
      for (let i = 0; i < arr.length; i++) {
        // arr[i] = arr[i].length<=1 ? arr[i].padStart(2, '0') : arr[i]
        if (arr[i].length <= 1) {
          arr[i] = arr[i].padStart(2, '0');
        } else if (arr[i].length > 2) {
          arr[i] = 0;
        } else {
          arr[i] = arr[i];
        }
      }
      arr = arr.join(':');
  
      firstNumber = Number(arr.slice(0, 2).replace(':', ''));
      secondNumber = Number(arr.slice(3, 5).replace(':', ''));
      thirdNumber = Number(arr.slice(6, 8).replace(':', ''));
  
      let hour;
      if (
        firstNumber <= 23 &&
        (value.includes('pm') ||
          value.includes('PM') ||
          value.includes('Pm') ||
          value.includes('pM'))
      )
        hour = firstNumber + 12;
      else if (
        firstNumber <= 23 &&
        !(
          value.includes('pm') ||
          value.includes('PM') ||
          value.includes('Pm') ||
          value.includes('pM')
        )
      )
        hour = firstNumber;
      else if (firstNumber <= 23) hour = firstNumber;
      else hour = 0;
      let minute = secondNumber <= 59 ? secondNumber : 0;
      let sec = thirdNumber <= 59 ? thirdNumber : 0;
  
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(
        2,
        '0'
      )}:${String(sec).padStart(2, '0')}`;
    }
  };
  // export const validateTime = (value) => {
  //   value = value === '0' ? '00' : value;
  //   let firstNumber, secondNumber, thirdNumber, tempValue, val;
  //   value = value.split('')[0] === '0' ? value.slice(1) : value;
  //   tempValue = value;
  
  //   if (
  //     tempValue.includes('am') ||
  //     tempValue.includes('AM') ||
  //     tempValue.includes('Am') ||
  //     tempValue.includes('aM') ||
  //     tempValue.includes('pm') ||
  //     tempValue.includes('PM') ||
  //     tempValue.includes('Pm') ||
  //     tempValue.includes('pM')
  //   ) {
  //     val = tempValue.replace(/(([Aa]|[Pp])\.?[Mm]\.?)/, '');
  //   } else {
  //     val = tempValue;
  //   }
  
  //   let arr = val.split(':');
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].length <= 1 ? arr[i].padStart(2, '0') : arr[i];
  //   }
  //   arr = arr.join(':');
  
  //   firstNumber = arr.slice(0, 2);
  //   secondNumber = Number(arr.slice(3, 5).replace(':', ''));
  //   thirdNumber = Number(arr.slice(6, 8).replace(':', ''));
  
  //   if (value != '') {
  //     if (value === '24' || value === '024') return true;
  //     else if (firstNumber <= 23 && secondNumber <= 59 && thirdNumber <= 59)
  //       return true;
  //     else if (
  //       tempValue.includes('am') ||
  //       tempValue.includes('AM') ||
  //       tempValue.includes('Am') ||
  //       tempValue.includes('aM') ||
  //       tempValue.includes('pm') ||
  //       tempValue.includes('PM') ||
  //       tempValue.includes('Pm') ||
  //       tempValue.includes('pM')
  //     )
  //       return true;
  //     else return false;
  //   } else {
  //     return false;
  //   }
  // };
  
  // export const validateTimeZeroIncluded = (value) => {
  //   value = value === '0' ? '00' : value;
  //   let firstNumber, secondNumber, thirdNumber, tempValue, val;
  //   value = value.split('')[0] === '0' ? value.slice(1) : value;
  //   tempValue = value;
  
  //   if (
  //     tempValue.includes('am') ||
  //     tempValue.includes('AM') ||
  //     tempValue.includes('Am') ||
  //     tempValue.includes('aM') ||
  //     tempValue.includes('pm') ||
  //     tempValue.includes('PM') ||
  //     tempValue.includes('Pm') ||
  //     tempValue.includes('pM')
  //   ) {
  //     val = tempValue.replace(/(([Aa]|[Pp])\.?[Mm]\.?)/, '');
  //   } else {
  //     val = tempValue;
  //   }
  
  //   let arr = val.split(':');
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].length <= 1 ? arr[i].padStart(2, '0') : arr[i];
  //   }
  //   arr = arr.join(':');
  
  //   firstNumber = arr.slice(0, 2);
  //   secondNumber = Number(arr.slice(3, 5).replace(':', ''));
  //   thirdNumber = Number(arr.slice(6, 8).replace(':', ''));
  
  //   if (value != '') {
  //     if (secondNumber <= 59 && thirdNumber <= 59) return true;
  //     else if (
  //       tempValue.includes('am') ||
  //       tempValue.includes('AM') ||
  //       tempValue.includes('Am') ||
  //       tempValue.includes('aM') ||
  //       tempValue.includes('pm') ||
  //       tempValue.includes('PM') ||
  //       tempValue.includes('Pm') ||
  //       tempValue.includes('pM')
  //     )
  //       return true;
  //     else return false;
  //   } else {
  //     return false;
  //   }
  // };
  export const formatRemoveLeadingZeroesFromOutput = (value) =>
    /^[-+]?[0-9]\d*(\.\d+)?$/.test(value)
      ? (value.includes('-') ? '-' : '') +
        parseFloat(value.replace(/-+/, '')).toFixed(/\./g.test(value) ? 2 : 0)
      : value;
  export const titleCaseFirstWordOfEachLineTextArea = (input) => {
    return input.replace(/^(\s*\w)/gm, function (match) {
      return match.toUpperCase();
    });
  };
  // export const titleCaseFirstWordOfEachLineButNoLeadingSpace = (input) => {
  //   return input.replace(/^( *)(\w)/gm, function (match, p1, p2) {
  //     // If there are no leading spaces, capitalize the first character
  //     if (p1.length === 0) {
  //       return p2.toUpperCase();
  //     } else {
  //       // If there are leading spaces, return the original match and also remove leading space from that line
  //       return match.replace(/^\s+(\S)/gm, function (match, p1) {
  //         // Remove leading spaces and return the first non-whitespace character
  //         return p1;
  //       });
  //     }
  //     return match;
  //   });
  // };
  
  export const formatNumbertoAbsoluteValue = (value) =>
    /^[-+]?\s*?[0-9]\d*(\.\d+)?$/.test(value)
      ? parseFloat(String(Math.abs(value)))
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : value;
  
  //CIDHSD-12052: maskingFn to display negative sign with parentheses
  export const formatDisplayInternationalNumberNegativeParenthesis = (value) =>
    value.replace(/\B(?=(\d{3})+\b)/g, ',').replace(/-(.*)/, '($1)');
  
  export const formatDisplayCurrencyNegativeParenthesis = (value) => {
    if (value.includes('-')) {
      return value.replace(/\B(?=(\d{3})+\b)/g, ',').replace(/-(.*)/, '($$$1)');
    } else {
      return '$' + value.replace(/\B(?=(\d{3})+\b)/g, ',');
    }
  };
  
  //for future purpose- when RTF editor is available in fluid-form , pass encoded data to Template team
  export const formatDisplayBase64fromHtml = (value) => window.btoa(value);
  