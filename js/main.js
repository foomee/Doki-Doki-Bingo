const numbers = [];
const drawnNumbers = [];

// 数字表を生成する
const bingoTable = document.querySelector(".bingo-table");

for (let number = 1; number <= 75; number += 1) {
    const cell = document.createElement("div");

    cell.textContent = number;
    cell.dataset.number = number;

    bingoTable.appendChild(cell);
}

// 1~75の数字をnumbersに入れる
for (let number = 1; number <= 75; number += 1) {
    numbers.push(number);
}

// 抽選結果を表示させる部分のidがresultの要素を取得しておく(繰り返しの記述を避けるため)
const result = document.getElementById("result");

// 抽選履歴のhistoryを取得しておく(繰り返しの記述を避けるため)
const history = document.querySelector(".history");

// ボタンをクリックしたときの処理
document.getElementById("draw-button").addEventListener("click", function () {
    
    // 75個全て引き終わった場合
    if (numbers.length === 0) {
        result.textContent = "完";
        return;
    }
    
    // 抽選処理
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];

    // 抽選された数字のセルを取得
    const drawnCell = bingoTable.querySelector(
        `[data-number="${randomNumber}"]`
    );

    // そのセルに抽選済みクラスを追加
    drawnCell.classList.add("drawn");

    // 抽選で選ばれた数字を抽選前グループ(numbers)から削除して、抽選後グループ(drawnNumbers)に移す。
    numbers.splice(randomIndex, 1);
    drawnNumbers.push(randomNumber);

    // 抽選結果を表示
    result.textContent = randomNumber;    

    // 抽選履歴
    const historyItem = document.createElement("div");

    historyItem.textContent = randomNumber;

    history.appendChild(historyItem);

    // 確認用
    console.log(numbers);
    console.log(drawnNumbers);

});


console.log(0.1 + 0.2);