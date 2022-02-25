
export function formatCurrency(num) {
    return 'R' + Number(num.toFixed(3)).toLocaleString() + ' '
}