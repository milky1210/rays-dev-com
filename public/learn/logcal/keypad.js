// Keep the answer a decimal string until submission: '-' and '0.' are valid
// intermediate states, even though they are not yet complete answers.
export function editAnswer(value, key) {
  if (key === 'clear') return '';
  if (key === 'delete') return value.slice(0, -1);
  if (key === 'sign') return value.startsWith('-') ? value.slice(1) : `-${value}`;
  if (key === '.') return value.includes('.') || value.replace('-', '').length >= 15 ? value : `${value === '' || value === '-' ? `${value}0` : value}.`;
  if (!/^\d$/.test(key)) return value;
  if (value.replace('-', '').length >= 15) return value;
  if (value === '0' || value === '-0') return `${value.startsWith('-') ? '-' : ''}${key}`;
  return value + key;
}
