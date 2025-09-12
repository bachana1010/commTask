
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Task 1 — „კუბიკის ბეთლი“
  function rollDie() {
    return randomInt(1, 6);
  }
  
  function playDiceBattle() {
    alert("კუბიკის ბეთლი");
  
    const player = rollDie();
    const computer = rollDie();
  
    let result;
    if (player > computer) {
      result = "მოიგე";
    } else if (player < computer) {
      result = "დამარცხდი";
    } else {
      result = "ფრე";
    }
  
    alert(
      "შენი ქულა: " + player +
      "\nკომპიუტერის ქულა: " + computer +
      "\n" + result
    );
  }
  
  // Task 2 — „კენტი თუ ლუწი“
  function playOddEven() {
    alert("კენტი თუ ლუწი");
    const number = randomInt(1, 20);

    let guess = prompt(
        "აირჩიე: 1) კენტი  2) ლუწი\n" +
        "ჩაწერე 1 ან 2"
    );
  
    if (guess === null) {
      alert("გაუქმდა.");
      return;
    }
  
    guess = guess.trim();
    if (guess === "1") guess = "კენტი";
    else if (guess === "2") guess = "ლუწი";
    else guess = guess.toLowerCase();
    if (guess !== "კენტი" && guess !== "ლუწი") {
      alert("1 ან 2 (კენტი/ლუწი).");
      return;
    }
  
    const isEven = number % 2 === 0;
    const actual = isEven ? "ლუწი" : "კენტი";
    const correct = guess === actual;
  
    alert(
      "რიცხვი: " + number +
      "\nარის: " + actual +
      "\nშენი პასუხი: " + guess +
      "\n" + (correct ? "სწორია" : "არასწორია")
    );
  }
  
  // Task 3 — „ფასდაკლება მაღაზიაში“
  function calculatePrice(price, promo) {
    const validPromo = "SAVE20"; 
    if (typeof promo === "string" && promo.trim().toUpperCase() === validPromo) {
      return {
        discounted: true,
        original: price,
        final: +(price * 0.8).toFixed(2),
        discountPercent: 20
      };
    }
    return {
      discounted: false,
      original: price,
      final: +price.toFixed(2),
      discountPercent: 0
    };
  }
  
  function playDiscount() {
    alert("ფასდაკლება მაღაზიაში (save20 — 20%)");
  
    const priceStr = prompt("ჩაწერე პროდუქტის ფასი (მაგ: 99.99):");
    if (priceStr === null) {
      alert("გაუქმდა.");
      return;
    }
  
    const price = parseFloat(priceStr.replace(",", "."));
    if (!isFinite(price) || price < 0) {
      alert("ჩაწერე სწორი ფასი.");
      return;
    }
  
    const promo = prompt("შეიყვანე პრომო-კოდი (მაგ: save20), ან დატოვე ცარიელი:");
    if (promo === null) {
      alert("გაუქმდა.");
      return;
    }
  
    const res = calculatePrice(price, promo || "");
    if (res.discounted) {
      alert(
        "პრომო-კოდი სწორია\n" +
        "საწყისი ფასი: " + res.original.toFixed(2) + "\n" +
        "ფასდაკლება: " + res.discountPercent + "%\n" +
        "საბოლოო ფასი: " + res.final.toFixed(2)
      );
    } else {
      alert(
        "პრომო-კოდი არასწორია ან არ არის მითითებული.\n" +
        "ფასი უცვლელია: " + res.final.toFixed(2)
      );
    }
  }
  
  // Task 4 — „მხეცი და რაინდი“
  function playBeastKnight() {
    alert("მხეცი და რაინდი");
  
    const choices = ["შეტევა", "თავდაცვა"];
  
    let player = prompt("აირჩიე: 1) შეტევა  2) თავდაცვა\nჩაწერე 1 ან 2");
    if (player === null) {
      alert("გაუქმდა.");
      return;
    }
  
    player = player.trim();
    if (player === "1") player = "შეტევა";
    else if (player === "2") player = "თავდაცვა";
    else player = player.toLowerCase();
  
    if (player !== "შეტევა" && player !== "თავდაცვა") {
      alert("მოითხოვება მხოლოდ: შეტევა ან თავდაცვა.");
      return;
    }
  
    const computer = choices[randomInt(0, choices.length - 1)];
  
    let outcome = "ფრე";
    if (player !== computer) {
      if (player === "შეტევა" && computer === "თავდაცვა") {
        outcome = "მოიგე.";
      } else if (player === "თავდაცვა" && computer === "შეტევა") {
        outcome = "დამარცხდი";
      }
    }
  
    alert(
      "შენი სვლა: " + player +
      "\nკომპიუტერის სვლა: " + computer +
      "\n" + outcome
    );
  }
  
  // Task 5 — „მათემატიკური კითხვის თამაში“
  function playMathQuiz() {
    alert("მათემატიკური კითხვის თამაში");
  
    const a = randomInt(1, 20);
    const b = randomInt(1, 20);
  
    const answerStr = prompt("რამდენია ჯამი?\n" + a + " + " + b + " = ?");
    if (answerStr === null) {
      alert("გაუქმდა.");
      return;
    }
  
    const answer = parseInt(answerStr, 10);
    if (!isFinite(answer)) {
      alert("ჩაწერე რიცხვი.");
      return;
    }
  
    const correct = a + b;
    if (answer === correct) {
      alert("სწორია: " + a + " + " + b + " = " + correct);
    } else {
      alert("არასწორია. სწორი პასუხია: " + correct);
    }
  }
  
  
  function mainMenu() {
    while (true) {
      const choice = prompt(
        "აირჩიე თამაში (ჩაწერე ნომერი):\n" +
          "1 — კუბიკის ბეთლი\n" +
          "2 — კენტი თუ ლუწი\n" +
          "3 — ფასდაკლება მაღაზიაში\n" +
          "4 — მხეცი და რაინდი\n" +
          "5 — მათემატიკური კითხვა\n" +
          "0 — გამოსვლა"
      );
  
      if (choice === null) {
        alert("გამოსვლა");
        break;
      }
  
      switch (choice.trim()) {
        case "1":
          playDiceBattle();
          while (true) {
            const again1 = prompt("აირჩიე: 1) მენიუში დაბრუნება  2) ისევ იგივე თამაში");
            if (again1 === null) { break; }
            const v1 = again1.trim();
            if (v1 === "1") break;
            if (v1 === "2") { playDiceBattle(); continue; }
            alert("ჩაწერე 1 ან 2.");
          }
          break;
        case "2":
          while (true) {
            playOddEven();
            const again2 = prompt("აირჩიე: 1) მენიუში დაბრუნება  2) ისევ იგივე თამაში");
            if (again2 === null) { break; }
            const v2 = (again2 || "").trim();
            if (v2 === "1") break;
            if (v2 === "2") { continue; }
            alert("ჩაწერე 1 ან 2.");
          }
          break;
        case "3":
          playDiscount();
          while (true) {
            const again3 = prompt("აირჩიე: 1) მენიუში დაბრუნება  2) ისევ იგივე თამაში");
            if (again3 === null) { break; }
            const v3 = (again3 || "").trim();
            if (v3 === "1") break;
            if (v3 === "2") { playDiscount(); continue; }
            alert("ჩაწერე 1 ან 2.");
          }
          break;
        case "4":
          while (true) {
            playBeastKnight();
            const again4 = prompt("აირჩიე: 1) მენიუში დაბრუნება  2) ისევ იგივე თამაში");
            if (again4 === null) { break; }
            const v4 = (again4 || "").trim();
            if (v4 === "1") break;
            if (v4 === "2") { continue; }
            alert("ჩაწერე 1 ან 2.");
          }
          break;
        case "5":
          playMathQuiz();
          while (true) {
            const again5 = prompt("აირჩიე: 1) მენიუში დაბრუნება  2) ისევ იგივე თამაში");
            if (again5 === null) { break; }
            const v5 = (again5 || "").trim();
            if (v5 === "1") break;
            if (v5 === "2") { playMathQuiz(); continue; }
            alert("ჩაწერე 1 ან 2.");
          }
          break;
        case "0":
          alert("გამოსვლა");
          return;
        default:
          alert("გთხოვ, აირჩიე 0–დან 5-მდე.");
      }
    }
  }
  
  mainMenu();