
var app = new Vue({
    el: "#app",
    data() {
        return {
            password: localStorage.getItem("savedPassword") || "", // Lấy mật khẩu từ localStorage nếu có
            correctPassword: "9999", // Đặt mật khẩu của bạn ở đây
            isPasswordCorrect: false, // Thêm thuộc tính để kiểm tra xem mật khẩu có đúng không
            maxAttempts: 99999993, // Số lần tối đa được phép nhập mật khẩu
            currentAttempt: 0, // Số lần nhập mật khẩu hiện tại
            ifshow: true,
            checked: false,
            radio: '1',
            activeSelect: '',
            selectOption: [
                { value: '0%', label: '0%' },
                { value: '50%', label: '50%' },
                { value: '100%', label: '100%' }
            ],
            input: "",
            showOption: false,
            tabValue: "one",
            touchStartX: 0,
            touchStartY: 0,
            menuLastX: 0,
            menuLastY: 0,
            currentAttempt: 0,
            maxAttempts: 5,
            currentUsers: 0,
            maxUsers: 10
        };
    },
    mounted() {
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        if (rememberedPassword) {
            this.password = rememberedPassword;
            this.rememberMe = true;
        }
        this.setRect(360, 320);

        let sWidth = window.screen.availWidth;
        let sHeight = window.screen.availHeight;

        if (sWidth > sHeight) {
            [sWidth, sHeight] = [sHeight, sWidth];
        }
        this.setWindowRect(0, 0, sWidth, sHeight);
        this.setButtonAction();
    },
    methods: {
        setRect(w, h, x = -1, y = -1) {
            const ayMenu = this.$refs.menuMain;
            ayMenu.style.width = `${w}px`;
            ayMenu.style.height = `${h}px`;
            if (x === -1) ayMenu.style.left = `calc(50% - ${w / 2}px)`;
            if (y === -1) ayMenu.style.top = `calc(50% - ${h / 2}px)`;
        },
        titleTouchStart(event) {
            this.touchStartX = event.touches[0].clientX;
            this.touchStartY = event.touches[0].clientY;
            const ayMenu = this.$refs.menuMain;
            this.menuLastX = ayMenu.offsetLeft;
            this.menuLastY = ayMenu.offsetTop;
        },
        titleTouchMove(event) {
            event.preventDefault();
            const distanceX = event.touches[0].clientX - this.touchStartX;
            const distanceY = event.touches[0].clientY - this.touchStartY;
            const ayMenu = this.$refs.menuMain;
            ayMenu.style.left = `${this.menuLastX + distanceX}px`;
            ayMenu.style.top = `${this.menuLastY + distanceY}px`;
        },
        checkPassword() {
            if (this.password === this.correctPassword) {
                this.isPasswordCorrect = true;
                // Lưu mật khẩu vào localStorage
                localStorage.setItem("savedPassword", this.password);
                // Sau khi mật khẩu đúng, ẩn phần nhập mật khẩu
                this.password = ""; // Xóa giá trị mật khẩu để ngăn việc hiển thị nó lại khi quay lại màn hình
            } else {
                alert("Mật khẩu không đúng!");
                this.currentAttempt++;
            }
        },
        setWindowRect(x, y, w, h) {
            // Function to adjust window size and position (implementation depends on specific platform APIs)
        },
        setButtonAction() {
            // Attach event handlers or actions to buttons (implementation details need clarification)
        },
        closeimgui() {
            var menu = document.querySelector("#app");
            menu.style.display = 'none';
        }
    }
});
function copyLink() {
    const url = "https://www.youtube.com/watch?v=3qrxSseq958";
    navigator.clipboard.writeText(url).then(() => {
        alert('Đã copy link vui lòng dán qua safari để lấy Password');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}