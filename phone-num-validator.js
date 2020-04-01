function isNumberValidInUS(str) {
/* this is a massive regex - basically it will allow you to input numbers in following formats:
1 456 789 4444
1 555 555 5555
1(555)555-5555
(555)555-5555
555-555-5555
5555555555
1 (555) 555-5555
1 555-555-5555 */
  let regex = /^(([\d][\d][\d][\-])|([1][\s][\d][\d][\d][\s])|([1][\(][\d][\d][\d][\)])|([1][\s][\d][\d][\d][\-])|([1][\s][\(][\d][\d][\d][\)][\s])|([\d][\d][\d])|([\(][\d][\d][\d][\)]))(([\d][\d][\d])|([\d][\d][\d][\s|\-]))([\d][\d][\d][\d])$/g;

// then we check if the input matches regex - if it does, it returns true, if not - false
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
  }
