var app = new Vue({
    el: "#app",
    data() {
        return {
            password: localStorage.getItem("savedPassword") || "",
            correctPassword: "9999",
            isPasswordCorrect: false,
            linkToCopy: 'https://example.com',
            maxAttempts: 5,
            currentAttempt: 0,
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
            menuLastY: 0
        }
    },
    mounted() {
        this.setRect(360, 320);
        let sWidth = window.screen.availWidth;
        let sHeight = window.screen.availHeight;

        if (sWidth > sHeight) {
            // Landscape orientation
            sWidth = window.screen.height;
            sHeight = window.screen.width;
        }

        this.setWindowRect(0, 0, sWidth, sHeight);

        document.getElementById('toggleButton').addEventListener('click', () => {
            const menu = document.querySelector("#app");
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
            this.setWindowTouch(menu.style.display !== 'none');
        });
    },
    methods: {
        setRect(w, h, x = -1, y = -1) {
            const menu = this.$refs.menuMain;
            menu.style.width = `${w}px`;
            menu.style.height = `${h}px`;
            menu.style.left = x === -1 ? `calc(50% - ${w / 2}px)` : `${x}px`;
            menu.style.top = y === -1 ? `calc(50% - ${h / 2}px)` : `${y}px`;
        },
        setWindowRect(x, y, w, h) {
            // Placeholder for setting window size and position
        },
        setWindowTouch(enabled) {
            // Placeholder to enable or disable touch pass-through
        },
        checkPassword() {
            if (this.password === this.correctPassword) {
                this.isPasswordCorrect = true;
                localStorage.setItem("savedPassword", this.password);
                this.password = "";
            } else {
                alert("Mật khẩu không đúng!");
                if (++this.currentAttempt >= this.maxAttempts) {
                    alert("Bạn đã nhập sai mật khẩu quá nhiều lần!");
                    // Additional logic to handle max attempts reached
                }
            }
        },
        copyLink() {
            const el = document.createElement('textarea');
            el.value = this.linkToCopy;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert('Link đã được sao chép: ' + this.linkToCopy);
        },
        changeTab(v) {
            this.tabValue = v;
        },
        closeImgUI() {
            this.$el.style.display = 'none';
        },
        titleTouchStart(event) {
            this.touchStartX = event.touches[0].clientX;
            this.touchStartY = event.touches[0].clientY;
            const menu = this.$refs.menuMain;
            this.menuLastX = menu.offsetLeft;
            this.menuLastY = menu.offsetTop;
        },
        titleTouchMove(event) {
            event.preventDefault();
            const distanceX = event.touches[0].clientX - this.touchStartX;
            const distanceY = event.touches[0].clientY - this.touchStartY;
            const menu = this.$refs.menuMain;
            menu.style.left = `${this.menuLastX + distanceX}px`;
            menu.style.top = `${this.menuLastY + distanceY}px`;
        }
    }
});
