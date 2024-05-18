document.addEventListener('DOMContentLoaded', function() {
    const penjualList = document.getElementById('penjual-list');

    // Data Penjual (contoh)
    const dataPenjual = [
        { nama: 'Surya Mulyadi', foto: 'yadi.jpg', deskripsi: 'Ketua Kelompok' },
        { nama: 'Surya Mulyadi', foto: 'yadi.jpg', deskripsi: 'Wakil Kelompok' },
        { nama: 'Surya Mulyadi', foto: 'yadi.jpg', deskripsi: 'Bendahara Kelompok' },
        { nama: 'Juwita Maharani Mbanga Wula', foto: 'juwita.jpg', deskripsi: 'anggota' },
        { nama: 'David Johnson', foto: 'david.jpg', deskripsi: 'Penjual daging sapi lokal' }
    ];

    // Tampilkan data penjual ke dalam halaman
    dataPenjual.forEach(function(penjual) {
        const penjualDiv = document.createElement('div');
        penjualDiv.classList.add('penjual');

        const foto = document.createElement('img');
        foto.src = penjual.foto;
        foto.alt = penjual.nama;

        const detail = document.createElement('div');
        const nama = document.createElement('h2');
        nama.textContent = penjual.nama;
        const deskripsi = document.createElement('p');
        deskripsi.textContent = penjual.deskripsi;

        detail.appendChild(nama);
        detail.appendChild(deskripsi);

        penjualDiv.appendChild(foto);
        penjualDiv.appendChild(detail);

        penjualList.appendChild(penjualDiv);
    });
});
