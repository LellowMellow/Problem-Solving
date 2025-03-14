const MAX_TARGET = 100000;

function solution(target) {
    const dp = Array.from({length: 311}, () => [Infinity, 0]);
    for(let i = 1; i < dp.length; i++) {
        if(i <= 20 || i === 50) {
            dp[i] = [1, 1];
            continue;
        }
        if(i <= 40 && i % 2 === 0 || i <= 60 && i % 3 === 0) {
            dp[i] = [1, 0];
            continue;
        }
        
        for(let j = 1; j <= 20; j++) {
            for(let k = 1; k <= 3; k++) {
                if(i < j * k) break;
                const [acc, add] = [dp[i - j * k], dp[j * k]];
                const [minDart, counter] = [acc[0] + add[0], acc[1] + add[1]];
                if(minDart < dp[i][0] || minDart === dp[i][0] && dp[i][1] < counter)
                    dp[i] = [minDart, counter];
            }
        }
        
        if(i >= 50) {
            const [acc, add] = [dp[i - 50], dp[50]];
            const [minDart, counter] = [acc[0] + add[0], acc[1] + add[1]];
            if(minDart < dp[i][0] || minDart === dp[i][0] && dp[i][1] < counter)
                dp[i] = [minDart, counter];
        }
    }
    
    let result = [0, 0];
    while(target > 310) {
        result[0]++;
        target -= 60;
    }
    return [result[0] + dp[target][0], result[1] + dp[target][1]];
}