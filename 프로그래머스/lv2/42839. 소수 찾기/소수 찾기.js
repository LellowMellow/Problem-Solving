function solution(numbers) {
    const result = new Set();
    const selected = new Array(numbers.length).fill(false);
    
    function DFS(current) {
        if(isPrime(Number(current))) result.add(Number(current)); 
        [...numbers].forEach((v, i) => {
            if(!selected[i]) {
                selected[i] = true;
                DFS(current + v);
                selected[i] = false;
            }
        })
    }
    DFS("");
    
    return [...result].length;
}

function isPrime(n) {
    if(n === 1 || n === 0) return false;
    let counter = 0;
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) counter++;
    return counter === 0;
}