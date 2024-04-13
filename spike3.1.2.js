function copyLink() {
    const url = "https://www.youtube.com/watch?v=3qrxSseq958";
    navigator.clipboard.writeText(url).then(() => {
        alert('Đã copy link vui lòng dán qua safari để lấy Password');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}