import numeral from 'numeral';

class FormattingUtils {
  static formatAsCurrency({value}) {
    return numeral(value).format('$0,0.00');
  }
}

export default FormattingUtils;