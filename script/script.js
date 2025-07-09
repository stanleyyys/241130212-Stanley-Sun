const divInfo = document.querySelector('.info');
document.querySelectorAll('.barang').forEach(function (barang) {
    barang.querySelector('.tambah').addEventListener('click', function () {
        const jumlahItem = barang.querySelector(".tombol input")
        jumlahItem.value = parseInt(jumlahItem.value) + 1

    });

    barang.querySelector('.kurang').addEventListener('click', function () {
        const jumlahItem = barang.querySelector(".tombol input")
        if (jumlahItem.value > 0) {
            jumlahItem.value = parseInt(jumlahItem.value) - 1
        }
    });
});


const inputNama = document.querySelectorAll('form input')[0];
const inputEmail = document.querySelectorAll('form input')[1];
const inputKode = document.querySelectorAll('form input')[2];
const info = document.querySelector('.info');

