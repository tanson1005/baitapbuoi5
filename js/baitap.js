//-------bài 1------//
/**
 * khối 1 input
 * -điểm tổng kết của 3 môn
 * -điểm ưu tiên theo khu vực
 * -điểm ưu tiên theo đối tượng
 * -điểm chuẩn của hội đồng
 * khối 2 xử lý
 * tính điểm của 3 môn cộng lại (+ điểm ưu tiền theo khu vực hoặc đối tượng nếu có) 
 * và so sánh với điểm chuẩn của hội đồng
 * khối 3 output
 * xuất ra màn hình kết quả điểm tổng kết và trạng thái sau khi so sánh
 */
function admissionDecision() {
    var score1 = parseInt(document.getElementById("score1").value);
    var score2 = parseInt(document.getElementById("score2").value);
    var score3 = parseInt(document.getElementById("score3").value);
    var area = Number(document.getElementById("area").value);
    var object = Number(document.getElementById("object").value);
    var standardScore = parseInt(document.getElementById("standardScore").value);
    var totalScore = score1 + score2 + score3 + area + object;

    if (score1 === 0 || score2 === 0 || score3 === 0) {
        document.getElementById("result").innerHTML = "Rất tiếc, bạn không đủ điều kiện nhập học vì bạn có một hoặc nhiều môn học có điểm 0!";
    }
    else if (score1 <= 0 || score2 <= 0 || score3 <= 0){
        document.getElementById("result").innerHTML = "Điểm số của bạn không được âm vui lòng nhâp lại";
    }
    else if (totalScore >= standardScore) {
        document.getElementById("result").innerHTML = "Xin chúc mừng! Bạn đã đủ điều kiện nhập học. <br>Điểm cuối cùng của bạn là " + totalScore + ".";
    } else {
        document.getElementById("result").innerHTML = "Rất tiếc, bạn không đủ điều kiện nhập học vì điểm cuối cùng của bạn là " + totalScore +" điểm" + " nhỏ hơn điểm tiêu chuẩn của " + standardScore + " điểm";
    }
}
document.getElementById("btn").onclick = admissionDecision;


//-------bài 2------//
/**
 * khối 1 input
 * -Tên
 * -số Kwh
 * khối 2 xử lý
 * 50kwh đầu : 500d/kwh
 * 50kwh kế : 650d/kwh
 * 100kwh kế : 850d/kwh
 * 150kwh kế : 1150d/kwh
 * còn lại : 1300d/kwh
 * khối 3 output
 * xuất hoá đơn trả tiền ra màn hình
 */
function calculate() {
    var name = document.getElementById('name').value;
    var kwh = parseInt(document.getElementById('kwh').value);
    var cost;
    if (kwh <= 0 || name == ""){
        alert ("Vui lòng nhập giá trị!");
    }
    else if (kwh <= 50) {
        cost = 500 * kwh;
    }
    else if (kwh <= 100) {
        cost = 500 * 50 + 650 * (kwh - 50);
    } 
    else if (kwh <= 150) {
        cost = 500 * 50 + 650 * 50 + 850 * (kwh - 100);
    } 
    else if (kwh <= 200) {
        cost = 500 * 50 + 650 * 50 + 850 * 50 + 1100 * (kwh - 150);
    } 
    else {
        cost = 500 * 50 + 650 * 50 + 850 * 50 + 1100 * 50 + 1300 * (kwh - 200);
    }

    document.getElementById('result-1').innerHTML = 'Tên: ' + name + '<br>Tiêu Thụ: ' + kwh + ' kWh<br>Tổng Tiền: ' + cost + ' VND';
}
document.getElementById("btn-1").onclick = calculate;


//-------bài 3------//
/**khối 1 input
 * -Họ tên
 * -Tổng thu nhập năm
 * -Số người phụ thuộc
 * khối 2 xử lý
 * Thu nhập chịu thuế = Tổng thu nhập năm - 4.000.000- Số người phụ thuộc * 1.600.00
 * khối 3 output
 * xuất thuế thu nhập cá nhân phải trả.
 */
function calculateTax() {
    var fullName = document.getElementById("fullName").value;
    var totalAnnualIncome = parseInt(document.getElementById("totalAnnualIncome").value);
    var numberOfDependents = parseInt(document.getElementById("numberOfDependents").value);

    var taxableIncome = totalAnnualIncome - 4000000 - numberOfDependents * 1600000;
    document.getElementById("taxableIncome").innerHTML = taxableIncome;
    document.getElementById("name").innerHTML = fullName;
    var taxRate;
    if (taxableIncome <= 0){
        alert("Nhập Sai Vui Lòng Nhập Lại!!!");
        return;
    }
     if (taxableIncome <= 60000000) {
        taxRate = 5;
    } else if (taxableIncome <= 120000000) {
        taxRate = 10;
    } else if (taxableIncome <= 210000000) {
        taxRate = 15;
    } else if (taxableIncome <= 384000000) {
        taxRate = 20;
    } else if (taxableIncome <= 624000000) {
        taxRate = 25;
    } else if (taxableIncome <= 960000000) {
        taxRate = 30;
    } else {
        taxRate = 35;
    }

    var personalIncomeTax = taxableIncome * taxRate / 100;
    document.getElementById("personalIncomeTax").innerHTML = personalIncomeTax;
}
document.getElementById("btn-2").onclick = calculateTax

//----------
/**khối 1
 * input: 2 loại khách hàng 
 * 1 : nhà dân
• Phí xử lý hóa đơn: 4.5$
• Phí dịch vụ cơ bản: 20.5$
• Thuê kênh cao cấp: 7.5$ / kênh
 * 2 : Doanh nghiệp
• Phí xử lý hóa đơn: 15$
• Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối
• Thuê kênh cao cấp: 50$ / kênh
    
khối 2
xử lý
ở doanh nghiệp thì có thêm 1 loại là số kết nối
khối 3
output
in ra tổng hoá đơn của khách hàng ở nhà dân hoặc doanh nghiệp ở màn hình
 */
function customerTypeSelected() {
    var customerType = document.getElementById("customerType").value;
    var connectionNumber = document.getElementById("connectionNumber");

    if (customerType === "business") {
        connectionNumber.disabled = false;
    } else {
        connectionNumber.disabled = true;
    }
}

function getCustomerType(customerType) {
    var connectionDiv = document.getElementById('connectionDiv');
    if (customerType == 'House') {
        connectionDiv.style.display = 'none';
    } else {
        connectionDiv.style.display = 'block';
    }
}

function calculateBill() {
    var customerType = document.getElementById('customerType').value;
    var connection = parseInt(document.getElementById('connection').value);
    var channel = parseInt(document.getElementById('channel').value);
    var invoiceProcessingFee = 0;
    var basicServiceFee = 0;
    var premiumChannelRental = 0;

    if (customerType == 'House') {
        invoiceProcessingFee = 4.5;
        basicServiceFee = 20.5;
        premiumChannelRental = 7.5 * channel;
    } 
    else {
        invoiceProcessingFee = 15;
        basicServiceFee = (connection <= 10) ? 75 : 75 + 5 * (connection - 10);
        premiumChannelRental = 50 * channel;
    }

    var totalBill = invoiceProcessingFee + basicServiceFee + premiumChannelRental;
    document.getElementById("result-2").innerHTML= `Tổng hóa đơn của khách hàng là ${totalBill}$`;
}
document.getElementById("btn-hd").onclick = calculateBill;