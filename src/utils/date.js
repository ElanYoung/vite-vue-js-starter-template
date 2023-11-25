import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const DATE_FORMAT = 'YYYY-MM-DD';

const formatToDateTime = (date, format = DATE_TIME_FORMAT) => {
  return dayjs(date).format(format);
};

const formatToDate = (date, format = DATE_FORMAT) => {
  return dayjs(date).format(format);
};

const formatNow = (format) => {
  return dayjs().format(format);
};

const startOfDate = (format = DATE_TIME_FORMAT) => {
  return dayjs().startOf('date').format(format);
};

const endOfDate = (format = DATE_TIME_FORMAT) => {
  return dayjs().endOf('date').format(format);
};

const getYear = () => {
  return dayjs().year();
};

const getMonth = () => {
  return dayjs().month();
};

const getDays = () => {
  return dayjs().daysInMonth();
};

export { formatToDateTime, formatToDate, formatNow, startOfDate, endOfDate, getYear, getMonth, getDays };
