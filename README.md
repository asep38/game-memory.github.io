Link Game 
https://asep38.github.io/game-memory.github.io/

<img src="https://user-images.githubusercontent.com/112145050/255480055-9a1692ba-3493-4206-b82d-df44b1218091.png" />

# Deskripsi
Game memori adalah permainan teka-teki yang menantang pemain untuk mengingat posisi dan gambar dari kartu-kartu yang tersebar di atas meja. Tujuan utama dari permainan ini adalah mencocokkan dua kartu yang sama dengan membaliknya secara berurutan dalam jumlah giliran yang terbatas. Pemain harus mengasah daya ingat dan konsentrasi mereka untuk menemukan dan mengingat lokasi kartu-kartu tersebut, karena setiap kartu hanya bisa terlihat sementara sebelum dibalik kembali. Dengan level kesulitan yang semakin meningkat, game memori menjadi cara yang menyenangkan untuk melatih kemampuan kognitif dan menguji kemampuan pemain dalam mengingat informasi dengan cepat dan akurat.

# Cerita
Cerita game Memory bermula pada awal tahun 1950-an ketika seorang psikolog bernama Hermann Ebbinghaus meneliti tentang proses memori manusia. Ebbinghaus menemukan bahwa manusia cenderung lebih baik mengingat informasi yang muncul secara berulang-ulang atau repetitif. Inspirasi inilah yang mengarahkannya untuk menciptakan eksperimen yang melibatkan kartu-kartu dengan simbol-simbol yang berbeda. Eksperimen ini membuktikan bahwa kemampuan memori manusia dapat ditingkatkan dengan latihan dan pembiasaan tertentu. Namun, baru pada tahun 1959, Ralph Haber, seorang psikolog lainnya, berkolaborasi dengan seorang desainer bernama Harry Hollingworth, menghasilkan versi awal dari apa yang kemudian dikenal sebagai "The Game of Concentration" atau yang lebih dikenal sebagai "Game Memory" saat ini.

Pada tahun 1970-an, teknologi komputer semakin berkembang dan memungkinkan game Memory untuk diproduksi dalam bentuk digital. Game ini menjadi populer di antara anak-anak dan keluarga, dan segera menyebar di komputer pribadi dan konsol permainan. Dengan perkembangan teknologi, game Memory pun menjadi lebih beragam dengan gambar-gambar menarik dan variasi tema yang berbeda. Keasikan bermain dan manfaat positif bagi perkembangan memori membuat game Memory terus bertahan sebagai salah satu permainan teka-teki klasik yang dicintai oleh banyak orang dari berbagai usia.

Hingga saat ini, game Memory telah mengalami berbagai adaptasi dan variasi dalam berbagai platform, termasuk perangkat seluler, tablet, dan komputer. Berbagai perusahaan dan pengembang terus menciptakan versi baru dari game ini dengan tambahan fitur-fitur menarik, tantangan lebih beragam, serta visual dan grafis yang menarik. Seiring perkembangan zaman, game Memory tetap relevan dan menjadi permainan yang populer untuk mengasah daya ingat, konsentrasi, dan keterampilan kognitif lainnya, sambil memberikan hiburan yang menyenangkan bagi para pemainnya.

# Fungsi Yang Digunakan
- createBoard(): Fungsi ini bertugas untuk membuat papan permainan dengan mengatur kartu-kartu dengan gambar latar belakang "colorfull.jpg". Setiap kartu diberi atribut data-id yang menyimpan indeks dari kartu tersebut dalam array kartu (cardArray). Ketika kartu diklik, fungsi flipCard() akan dipanggil.

- checkForMatch(): Fungsi ini memeriksa apakah dua kartu yang dipilih oleh pemain adalah kartu yang sama atau tidak. Jika kartu-kartu tersebut sama, maka suara "benar.mp3" akan diputar, dan kedua kartu tersebut akan berubah menjadi gambar latar belakang "blank-white.jpg". Jika kartu-kartu tersebut tidak sama, suara "salah.mp3" akan diputar, dan kedua kartu tersebut akan kembali menjadi gambar latar belakang "colorfull.jpg".

- flipCard(): Fungsi ini berfungsi untuk membalik kartu ketika kartu tersebut diklik oleh pemain. Fungsi ini akan menambahkan nama kartu dan indeks kartu ke dalam array cardsChosen dan cardsChosenId. Jika sudah ada dua kartu dipilih, fungsi checkForMatch() akan dipanggil setelah penundaan sebesar 500 milidetik menggunakan setTimeout().

