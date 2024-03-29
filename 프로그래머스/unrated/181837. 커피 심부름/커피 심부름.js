function solution(order) {
    const menu = {
        americano: 4500,
        cafelatte: 5000,
        anything: 4500,
    }
    
    return order.map((v) => {
        for(key in menu) {
            if(v.indexOf(key) !== -1) {
                return menu[key];
            }
        }
    }).reduce((sum, cur) => sum + cur);
}