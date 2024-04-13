function copyLink() {
    const url = "https://web1s.org/QOav03jzmX";
    navigator.clipboard.writeText(url).then(() => {
        alert('Đã copy link vui lòng dán qua safari để lấy Password');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}