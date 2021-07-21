export function randomNum(a, b) {
    if(arguments.length !== 2) {
        return Error('传入值不是两个数字');
    } else if ( !(Number.isInteger(a) && Number.isInteger(b)) ) {
        return Error('传入的数不全是整数')
    } else {
        // 保证a比b小
        if(a > b) {
            [a,b] = [b,a]
        }
        return parseInt( Math.random()*(b-a+1)+a, 10 );
    }
}