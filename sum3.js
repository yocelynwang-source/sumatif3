<script>
    const tombolBeli = document.querySelectorAll('.card button');

    tombolBeli.forEach(button => {
        button.addEventListener('click', function() {
            const namaMakanan = this.parentElement.querySelector('h3').innerText;
            const hargaMakanan = this.parentElement.querySelector('p').innerText;
            
          
            Swal.fire({
                title: 'Pembelian Berhasil!',
                text: `Kamu telah berhasil membeli ${namaMakanan} seharga ${hargaMakanan}.`,
                icon: 'success',
                confirmButtonText: 'Mantap!',
                confirmButtonColor: '#28a745' 
            });
        });
    });
</script>


