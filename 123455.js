 searchValue = Number(prompt("Nhập chỉ số ATK đang có.", ""));
     var replaceValue = 1;

    h5gg.clearResults();
    h5gg.searchNumber(searchValue,
        'I32',
        '0x100000000',
        '0x160000000');
    var results = h5gg.getResults(h5gg.getResultsCount());

    if (results.length === 0) {
        alert("Không tìm thấy giá trị cần thay thế.");
    }

    results.forEach(result => {
        // Check if the offset ends with '54C' or 'EC4'
        if ( result.address.endsWith('D70')) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); // Specifying 'I32' as the data type
        }
    });