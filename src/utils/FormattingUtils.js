import moment from 'moment';
import numeral from 'numeral';

class FormattingUtils {
  static formatAsCurrency({value}) {
    return numeral(value).format('$0,0.00');
  }

  static formatDate({value}) {
    return moment(value).format('ddd MMM D, YYYY @ h:mm a');
  }
}

export default FormattingUtils;