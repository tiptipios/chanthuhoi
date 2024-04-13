var app = new Vue({
    el: "#app",
    data() {
        return {
            ifshow: true,
            checked: false,
            radio: '1',
            activeSelect: '',
            selectOption: [{
                value: '0%', //实际内容
                label: '0%'//显示文案
            }, {
                value: '50%',
                label: '50%'
            }, {
                value: '100%',
                label: '100%'
            }],
            input: "",
            showOption: false,
            tabValue: "one",
        }
    },
    mounted() {
        this.setRect(360, 320);

        //竖屏
        var sWidth = window.screen.width; //屏幕宽
        var sHeight = window.screen.height; //屏幕高

        //全屏显示
        if (window.screen.availWidth > window.screen.availHeight) {
            //横屏，宽高置换
            sWidth = window.screen.height; //屏幕宽
            sHeight = window.screen.width; //屏幕高
        }
        setWindowRect(0, 0, sWidth, sHeight);

        setButtonAction(function () {
            var menu = document.querySelector("#app");
            if (menu.style.display == 'none') {
                menu.style.display = 'block';
                //显示菜单之后, 设置触控不可穿透悬浮窗口
                setWindowTouch(true);
            } else {
                menu.style.display = 'none';
                //隐藏菜单之后, 设置触控穿透悬浮窗口
                setWindowTouch(false);
            }
        });
    },
    methods: {
        setRect(w,
            h,
            x = -1,
            y = -1) {
            var boxW = w;
            var boxH = h;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.width = `${boxW}px`;
            ayMenu.style.height = `${boxH}px`;
            if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
            if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;
        },
        titleTouchStart(event) {
            this.touchStartX = parseInt(event.touches[0].clientX);
            this.touchStartY = parseInt(event.touches[0].clientY);

            var ayMenu = this.$refs.menuMain;
            this.menuLastX = ayMenu.offsetLeft;
            this.menuLastY = ayMenu.offsetTop;
        },
        titleTouchMove(event) {
            event.preventDefault();
            var distanceX = event.touches[0].clientX - this.touchStartX;
            var distanceY = event.touches[0].clientY - this.touchStartY;

            var ayMenu = this.$refs.menuMain;
            ayMenu.style.left = this.menuLastX + distanceX + "px";
            ayMenu.style.top = this.menuLastY + distanceY + "px";
        },
        //切换导航栏
        changeTab(v) {
            this.tabValue = v;
        },
        closeimgui() {
            var menu = document.querySelector("#app");
            menu.style.display = 'none';
        }
    }
});

function Buffchiso() {
var searchValue = -2079391644; // Chi so 100
var replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('144')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391629; // Chi so 130
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('1D4')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391614; // Chi so 130
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('DA8') || result.address.endsWith('D84')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391609; // Chi so 135
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('1C8') || result.address.endsWith('168')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391594; // Chi so 150
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('E8C')|| result.address.endsWith('074') || result.address.endsWith('054') || result.address.endsWith('F0F')|| result.address.endsWith('0E4') || result.address.endsWith('0D8') || result.address.endsWith('0CC')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391589; // Chi so 155
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('980') || result.address.endsWith('98C') || result.address.endsWith('998') || result.address.endsWith('9A4')|| result.address.endsWith('D90') || result.address.endsWith('FE8') || result.address.endsWith('2AC')|| result.address.endsWith('2D0') || result.address.endsWith('234') || result.address.endsWith('240')|| result.address.endsWith('24C') || result.address.endsWith('258') ||
    result.address.endsWith('D9C')|| result.address.endsWith('D18') || result.address.endsWith('D24')|| result.address.endsWith('F70')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

searchValue = -2079391179;
replaceValue = 9999;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000',
'0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if ( result.address.endsWith('0B8')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391584; // Chi so 160
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('C40') || result.address.endsWith('C28') || result.address.endsWith('FF4') || result.address.endsWith('DFC')|| result.address.endsWith('E08') || result.address.endsWith('E14') || result.address.endsWith('E20')|| result.address.endsWith('060') || result.address.endsWith('06C') || result.address.endsWith('33C')|| result.address.endsWith('348') || result.address.endsWith('330') || result.address.endsWith('EF8')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391579; // Chi so 165
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('FDC') || result.address.endsWith('000') || result.address.endsWith('E80') || result.address.endsWith('E90')|| result.address.endsWith('2B8') || result.address.endsWith('2C4')|| result.address.endsWith('E98') || result.address.endsWith('F7C')|| result.address.endsWith('F88')|| result.address.endsWith('1E0')|| result.address.endsWith('D30')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391574; // Chi so 170
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('F10') || result.address.endsWith('D0C')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391569; // Chi so 175
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('324') || result.address.endsWith('F64') || result.address.endsWith('150') || result.address.endsWith('15C')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391564; // Chi so 180
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('C34') ||
result.address.endsWith('E74')||
result.address.endsWith('F04')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

searchValue = -2079391559; // Chi so 185
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('EEC') || result.address.endsWith('1BC') ) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391549; // Chi so 195
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('C1C')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391544; // Chi so 200
replaceValue = 1000;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000', '0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;

}
results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('DA8')||
result.address.endsWith('D90')){
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
searchValue = -2079391149;
replaceValue = 9999;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000',
'0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if ( result.address.endsWith('100')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});
 searchValue = -2079391159;
replaceValue = 9999;

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x100000000',
'0x160000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if ( result.address.endsWith('0DC')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

alert("Đã Buff Vô Cộng Chỉ số Đi😎 ");
}



var StyleOld = 52479; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModStyle() {
    var searchValue = StyleOld;
    var replaceValue = Number(prompt("Vui lòng chọn một trong các màu sau:\n  Trắng: 16777215\nXanh dương: 16711680\nXanh lá: 65280\nTím: 8388736\nHồng : 15680245\n\n \nNhập màu mới", ""));

    h5gg.clearResults();
    h5gg.searchNumber(searchValue,
        'I32',
        '0x100000000',
        '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length === 0) {
        alert("Không tìm thấy giá trị cần thay thế.");
        return;
    }

    for (var i = 0; i < results.length; i++) {
        // Check if the offset ends with '3e8' or 'ab4'
        if (results[i].address.endsWith('3E8') || results[i].address.endsWith('AB4')) {
            h5gg.setValue(results[i].address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
        }
    }

    alert("Đã thực hiện thay thế ");
    StyleOld = replaceValue;

}
var StyleSiwoo = 16777215; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModSiwoo() {
var searchValue = StyleSiwoo;
var replaceValue = Number(prompt("Có thể chọn một trong các màu sau:\n Đen: 1 \n  Trắng: 16777215\nXanh dương: 16711680\nXanh lá: 65280\nTím: 8388736\nHồng : 15680245 \nĐỏ: 983543 \n \nNhập màu mới", ""));

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x110000000',
'0x116000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('54C') || result.address.endsWith('EC4') || result.address.endsWith('420')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

alert("Đã thực hiện thay thế ");
StyleSiwoo = replaceValue;
}
StyleNgam = 16777215; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModNgam() {
var searchValue = StyleNgam;
var replaceValue = Number(prompt("Có thể chọn một trong các màu sau:\n Đen: 1 \n  Trắng: 16777215\nXanh dương: 16711680\nXanh lá: 65280\nTím: 8388736\nHồng :15680245 \nĐỏ: 983543 \n \nNhập màu mới", ""));

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x110000000',
'0x116000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with '54C' or 'EC4'
if (result.address.endsWith('C20') || result.address.endsWith('B78') || result.address.endsWith('AE8') ||
result.address.endsWith('32C') ||result.address.endsWith('A58') || result.address.endsWith('9C8')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

alert("Đã thực hiện thay thế ");
StyleNgam = replaceValue;
}
var StyleControll = 16777215; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModControll() {
var searchValue = StyleControll;
var replaceValue = Number(prompt("Có Thể chọn một trong các màu sau:\n Đen: 1\n  Trắng: 16777215\nXanh dương: 16711680\nXanh lá: 65280\nTím: 8388736\nHồng : 15680245 \nĐỏ: 983543 \n \nNhập màu mới", ""));

h5gg.clearResults();
h5gg.searchNumber(searchValue,
'I32',
'0x110000000',
'0x116000000');
var results = h5gg.getResults(h5gg.getResultsCount());

if (results.length === 0) {
alert("Không tìm thấy giá trị cần thay thế.");
return;
}

results.forEach(result => {
// Check if the offset ends with specific suffixes
if (result.address.endsWith('35C') || result.address.endsWith('46C') || result.address.endsWith('634') || result.address.endsWith('358') || result.address.endsWith('630') ||
    result.address.endsWith('740') || result.address.endsWith('F50') || result.address.endsWith('CD4') || result.address.endsWith('79C') || result.address.endsWith('684')||result.address.endsWith('5D0')) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
}
});

alert("Đã thực hiện thay thế ");
StyleControll = replaceValue;
}
function RollS() {
var searchValue = 372;
    var replaceValue = 0;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("B10")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert(" Roll The Flash ");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }

     searchValue = -2079391645;
     replaceValue = 2;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length > 0) {
        // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
        for (var i = 0; i < results.length; i++) {
            var targetResult = results[i];
            h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
        }
        alert("Đã Có thể Roll S!");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}

var YongsubValue = -2079391372;
var Buoc1 = 1769171276;
var Buoc2 = 97;
var Buoc3 = 5;
function ModNishi() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079391594;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1752394062;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác
searchValue = Buoc2;
replaceValue = 2002873193;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
if (result.address.endsWith("874")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
         Buoc2 = replaceValue;

}
});

searchValue = Buoc3;
replaceValue = 97;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
      if (result.address.endsWith("878")){
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
     Buoc3 = replaceValue;
}
});

alert("Roll Nishikawa S+ Đi Bro.");

}
// Bước 4: Tìm và thay thế giá trị khác

function ModYamedera() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079388562;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1634558297;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác
searchValue = Buoc2;
replaceValue = 1634887012;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
if (result.address.endsWith("874")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
         Buoc2 = replaceValue;

}
});



alert("Roll Yamedera S Đi Bro.");

}


function ModSohee() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079389760;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1699245907;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác
searchValue = Buoc2;
replaceValue = 101;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
if (result.address.endsWith("874")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
         Buoc2 = replaceValue;

}
});



alert("Roll Sohee S Đi Bro.");

}


function ModOasitv2() {
    var searchValue = YongsubValue;
    var replaceValue = -2079391644;
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());
    var targetResult = results.find(result => result.address.endsWith("974"));
    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
        alert("Đã Có thể Oasit V2 S !");
        // Update YongsubValue with the replaceValue
        YongsubValue = replaceValue;
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}
function ModIsabel() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079391621;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1650553673;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác
searchValue = Buoc2;
replaceValue = 27749;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
if (result.address.endsWith("874")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
         Buoc2 = replaceValue;

}
});



alert("Roll Isabel S Đi Bro.");

}

function ModNN() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079390745;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1543523918;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác




alert("Roll NN S Đi Bro.");

}

function ModRobert() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = YongsubValue;
replaceValue = -2079391244;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("974"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
alert(" Chờ xíu đổi tển phát bro");
// Cập nhật YongsubValue với replaceValue
YongsubValue = replaceValue;
} else {
alert("Bước 1: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}


// Bước 3: Tìm và thay thế giá trị khác
replaceValue = 1700949842;

searchValue = Buoc1;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
targetResult = results.find(result => result.address.endsWith("870"));
if (targetResult) {
h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32');
Buoc1 = replaceValue;
} else {
alert("Bước 3: Không tìm thấy kết quả phù hợp để thay đổi.");
return; // Trả về nếu không tìm thấy kết quả
}

// Bước 4: Tìm và thay thế giá trị khác
searchValue = Buoc2;
replaceValue = 29810;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());

// Lặp lại từng kết quả tìm thấy và thực hiện thay thế
results.forEach(result => {
if (result.address.endsWith("874")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
         Buoc2 = replaceValue;

}
});

alert("Roll Robert S Đi Bro.");

}

var camCaoValue = -2079391644; // Biến toàn cục để lưu trữ giá trị cho ModCamCao

function ModCamCao() {
    var searchValue = -2079391644;
    var replaceValue = Number(prompt("Nhập số mới dưới  ", ""));

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("990")); // Tìm kết quả có offset kết thúc bằng 990

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi giá trị tìm được
        camCaoValue = replaceValue; // Lưu giá trị đã thay đổi vào biến toàn cục
        alert("Mod Cam Cao thành công");
    } else {
        alert(" Lỗi rồi thoát game đi ");
    }
}

function rollFree() {
    var searchValue = -2079391704;
    var replaceValue = 0;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("368")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert("Đã Có thể Roll Free!");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}
function rollFree2() {
    var searchValue = -2079391712;
    var replaceValue = -173178;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("6A8")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert("Đã Có thể Roll Free!");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}


function readI32(addr) {
    return Number(h5gg.getValue(addr, "I32"));
}

function searchAndReplace(searchValue, replaceValue, valueType, offset) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, valueType, '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length === 0) {
        alert("Không tìm thấy giá trị cần thay thế.");
        return false;
    }

    for (var i = 0; i < results.length; i++) {
        if (results[i].address.endsWith(offset)) {
            h5gg.setValue(results[i].address, replaceValue.toString(), valueType);
            return true;
        }
    }
    return false;
}
// Define a global variable to store the original value

function modHuyHieuXanh() {
    var searchValue = -2079391712;
    var replaceValue = -20000;
    var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', '6A8');

    if (successStep1) {
        alert(" Chờ tý, sắp được bú 🍌 rồi");
    }

    searchValue = -2079391621;
    replaceValue = Number(prompt("Nhập Ball muốn nhận Vô: ", ""));
    originalValue = replaceValue; // Store the original value before modification
    var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', 'FF0');

    if (successStep2) {
        alert(" Húp Đi Men 🤫");
    }

    // Khôi phục giá trị originalValue về 0
}


function SanghyeonULT() {
    var searchValue = -2079391444;
    var replaceValue = 9999;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("BE8")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert("Đã Sanghyeon ULT !");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}

function Makei32() {
    var searchValue = Number(prompt("Nhập giá trị cần tìm kiếm i4 ", ""));
    var replaceValue = Number(prompt("Nhập giá trị mới ", ""));

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length > 0) {
        // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), 'I32');
        }
        alert(" OK Rồi Bú Đi  ");
    } else {
        alert("Lỗi rồi thoát game đi");
    }
}

function Makef64() {
    var searchValue = Number(prompt("Nhập giá trị cần tìm kiếm d ", ""));
    var replaceValue = Number(prompt("Nhập giá trị mới ", ""));

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F64', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length > 0) {
        // Nếu tìm thấy kết quả, lặp qua từng kết quả và thực hiện thay đổi
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), 'F64');
        }
        alert(" OK Rồi Bú Đi  ");
    } else {
        alert("Lỗi rồi thoát game đi");
    }
}

function Unban() {
    var searchValue = 357958400;
    var replaceValue = -2079391744;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("370")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert(" Unban Rồi Bú Đi 🍌");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}
function SkillIsabel() {
    var searchValue = -2079391644;
    var replaceValue = -2079391744;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    var targetResult = results.find(result => result.address.endsWith("DFC")); // Tìm kết quả có offset kết thúc bằng 8F4

    if (targetResult) {
        h5gg.setValue(targetResult.address, replaceValue.toString(), 'I32'); // Thay đổi kết quả tìm được
        alert(" Isabel ULT ");
    } else {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}


var originalValue; // Define a global variable to store the original value

function modHuyHieuXanh1() {
    var searchValue = 357958400;
    var replaceValue = 0;
    var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', '67C');

    if (successStep1) {
        alert("Hoàn Thành B1");
    }

    searchValue = -2079391744;
    replaceValue = Number(prompt("Nhập giá trị mới", ""));
    originalValue = replaceValue; // Store the original value before modification
    var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', '684');

    if (successStep2) {
        alert("Bước 2: Đã thực hiện mod Huy Hiệu Xanh!");
    }

    // Khôi phục giá trị originalValue về 0
}

function restoreOriginalValue1() {
    var searchValue = originalValue; // Restore to the original value
    var replaceValue = 0; // Restore to 1
    var success = searchAndReplace(searchValue, replaceValue, 'I32', '684');

    if (success) {
        alert("Đã khôi phục giá trị ban đầu thành công!");
    } else {
        alert("Không thể khôi phục giá trị ban đầu.");
    }
}

var originalValue2; // Define a global variable to store the original value

function modHuyHieuXanh2() {
    var searchValue = 357958400;
    var replaceValue = 0;
    var successStep1 = searchAndReplace(searchValue, replaceValue, 'I32', 'F67C');

    if (successStep1) {
        alert("Hoàn Thành B1");
    }
    searchValue = -2079391744;
    replaceValue = Number(prompt("Nhập giá trị mới", ""));
    originalValue = replaceValue; // Store the original value before modification
    var successStep2 = searchAndReplace(searchValue, replaceValue, 'I32', 'F684');
    if (successStep2) {
        alert("Bước 2: Đã thực hiện mod Huy Hiệu Xanh!");
    }
    // Khôi phục giá trị originalValue về 0
}
function restoreOriginalValue2() {
    var searchValue = originalValue; // Restore to the original value
    var replaceValue = 0; // Restore to 1
    var success = searchAndReplace(searchValue, replaceValue, 'I32', 'F684');

    if (success) {
        alert("Đã khôi phục giá trị ban đầu thành công!");
    } else {
        alert("Không thể khôi phục giá trị ban đầu.");
    }
}
function ModNam() {
    var searchValue = -2079391714;
    var replaceValue = -2079391644;
    h5gg.clearResults();
    h5gg.searchNumber(searchValue,
        'I32',
        '0x100000000',
        '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());
    if (results.length === 0) {
        alert("Không tìm thấy giá trị cần thay thế.");
        return;
    }
    for (var i = 0; i < results.length; i++) {
        // Check if the offset ends with '3e8' or 'ab4'
        if (results[i].address.endsWith('368') || results[i].address.endsWith('454')) {
            h5gg.setValue(results[i].address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
        }
    }
    alert(" Nam ULT ");
}
function Siwoobeak() {
var searchValue, replaceValue, results, targetResult;

// Bước 1: Tìm và thay thế YongsubValue
searchValue = 357696256;
replaceValue = 357696255;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
results.forEach(result => {
if (result.address.endsWith("E74") || result.address.endsWith("BD8")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
    // Cập nhật YongsubValue với replaceValue
}
});
// Bước 3: Tìm và thay thế giá trị khác
replaceValue = -2079390644;
searchValue = -2079391662;
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000');
results = h5gg.getResults(h5gg.getResultsCount());
results.forEach(result => {
if (result.address.endsWith("E70") || result.address.endsWith("BD4")) {
    h5gg.setValue(result.address, replaceValue.toString(), 'I32');
    Buoc1 = replaceValue;
}
});
alert("Đã Mod Siwoo beak.");
}
