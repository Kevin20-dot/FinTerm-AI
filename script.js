function getAnswer() {

    let question =
    document.getElementById("question").value.toUpperCase();

    if(question.includes("SIP")) {

        document.getElementById("answer").innerHTML =
        "<h3>📈 SIP (Systematic Investment Plan)</h3>" +
        "<p>Invest a fixed amount regularly in mutual funds to build wealth over time.</p>" +
        "<ul>" +
        "<li>Disciplined investing</li>" +
        "<li>Power of compounding</li>" +
        "<li>Reduces market timing risk</li>" +
        "</ul>";
    }

    else if(question.includes("NAV")) {

        document.getElementById("answer").innerHTML =
        "<h3>💰 NAV</h3>" +
        "<p>NAV is the per-unit value of a mutual fund.</p>";
    }

    else if(question.includes("CAGR")) {

        document.getElementById("answer").innerHTML =
        "<h3>📊 CAGR</h3>" +
        "<p>CAGR shows average annual growth rate of an investment.</p>";
    }

    else if(question.includes("ETF")) {

        document.getElementById("answer").innerHTML =
        "<h3>📉 ETF</h3>" +
        "<p>An ETF is a fund traded on stock exchanges like a stock.</p>";
    }

    else {

        document.getElementById("answer").innerHTML =
        "<h3>❓ Term Not Found</h3>" +
        "<p>Try SIP, NAV, CAGR or ETF.</p>";
    }
}

function calculateSIP() {

    let amount =
    Number(document.getElementById("sipAmount").value);

    let years =
    Number(document.getElementById("sipYears").value);

    let monthlyRate = 0.12 / 12;

    let months = years * 12;

    let futureValue =
    amount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate));

    document.getElementById("sipResult").innerHTML =

    "<h3>📈 SIP Result</h3>" +

    "<p><strong>Monthly SIP:</strong> ₹" +
    amount +
    "</p>" +

    "<p><strong>Investment Period:</strong> " +
    years +
    " years</p>" +

    "<p><strong>Estimated Value:</strong> ₹" +
    futureValue.toFixed(0) +
    "</p>";

    document.getElementById("dashSip").innerText =
    "₹" + amount;

    document.getElementById("dashWealth").innerText =
    "₹" + futureValue.toFixed(0);

    updateFinanceScore();
}

function showRiskProfile() {

    let profile =
    document.getElementById("riskProfile").value;

    if(profile === "low") {

        document.getElementById("riskResult").innerHTML =
        "<h3>🛡 Conservative Investor</h3>" +
        "<p>Suggested: Fixed Deposits, Debt Funds, Government Bonds.</p>";

        document.getElementById("dashRisk").innerText =
        "Low";
    }

    else if(profile === "medium") {

        document.getElementById("riskResult").innerHTML =
        "<h3>⚖ Moderate Investor</h3>" +
        "<p>Suggested: Hybrid Funds, Index Funds.</p>";

        document.getElementById("dashRisk").innerText =
        "Medium";
    }

    else if(profile === "high") {

        document.getElementById("riskResult").innerHTML =
        "<h3>🚀 Aggressive Investor</h3>" +
        "<p>Suggested: Equity Funds, Stocks.</p>";

        document.getElementById("dashRisk").innerText =
        "High";
    }

    else {

        document.getElementById("riskResult").innerHTML =
        "<p>Please select a risk profile.</p>";
    }
}

function runAgent() {

    let age =
    Number(document.getElementById("age").value);

    let investment =
    Number(document.getElementById("investment").value);

    let risk =
    document.getElementById("agentRisk").value;

    let recommendation = "";

    if(risk === "low") {

        recommendation =
        "60% Debt Funds, 30% Fixed Deposits, 10% Emergency Fund";
    }

    else if(risk === "medium") {

        recommendation =
        "50% Index Funds, 30% Debt Funds, 20% Emergency Fund";
    }

    else if(risk === "high") {

        recommendation =
        "70% Equity Funds, 20% Index Funds, 10% Emergency Fund";
    }

    else {

        recommendation =
        "Please select a risk profile.";
    }

    document.getElementById("agentResult").innerHTML =

    "<h3>🤖 Finance Agent Recommendation</h3>" +

    "<p><strong>Age:</strong> " +
    age +
    "</p>" +

    "<p><strong>Monthly Investment:</strong> ₹" +
    investment +
    "</p>" +

    "<p>" +
    recommendation +
    "</p>";
}

function calculateGoal() {

    let goal =
    document.getElementById("goalName").value;

    let amount =
    Number(document.getElementById("goalAmount").value);

    let years =
    Number(document.getElementById("goalYears").value);

    let monthlySIP =
    amount / (years * 12);

    document.getElementById("goalResult").innerHTML =

    "<h3>🎯 Goal Plan</h3>" +

    "<p><strong>Goal:</strong> " +
    goal +
    "</p>" +

    "<p><strong>Target Amount:</strong> ₹" +
    amount +
    "</p>" +

    "<p><strong>Years:</strong> " +
    years +
    "</p>" +

    "<p><strong>Required Monthly Investment:</strong> ₹" +
    monthlySIP.toFixed(0) +
    "</p>";

    document.getElementById("dashGoal").innerText =
    "1";
}

function updateFinanceScore() {

    let score = 0;

    let sip =
    Number(document.getElementById("sipAmount").value);

    let risk =
    document.getElementById("riskProfile").value;

    let goals =
    Number(document.getElementById("dashGoal").innerText);

    if(sip >= 5000){
        score += 40;
    }
    else if(sip >= 1000){
        score += 25;
    }
    else if(sip > 0){
        score += 15;
    }

    if(risk === "low"){
        score += 20;
    }
    else if(risk === "medium"){
        score += 30;
    }
    else if(risk === "high"){
        score += 25;
    }

    if(goals > 0){
        score += 30;
    }

   document.getElementById("financeScore").innerText =
score;

document.getElementById("scoreBar").style.width =
score + "%";

let status = "";

if(score >= 80){
    status = "🏆 Excellent";
}
else if(score >= 60){
    status = "✅ Good";
}
else{
    status = "⚠ Needs Improvement";
}

document.getElementById("scoreStatus").innerText =
status;
}