//soal1
class BangunDatar {
    constructor(sisi, alas, panjang, lebar, tinggi, r) {
        this.sisi = sisi;
        this.alas = alas;
        this.panjang = panjang;
        this.lebar = lebar;
        this.tinggi = tinggi;
        this.r = r;
    }

    persegi() {
        this.luas = this.sisi * this.sisi;
        this.keliling = 4 * this.sisi;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    persegiPanjang() {
        this.luas = this.panjang * this.lebar;
        this.keliling = 2 * this.panjang + 2 * this.lebar;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    segitigaSiku2() {
        this.luas = (1 / 2) * this.alas * this.tinggi;
        this.keliling =
            this.alas +
            this.tinggi +
            sqrt(this.alas * this.alas + this.tinggi * tinggi);
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    lingkaran() {
        this.luas = Math.PI * this.r * this.r;
        this.keliling = 2 * Math.PI * this.r;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }
}

let soal1 = new BangunDatar(5, 4, 3, 8, 2, 7);
console.log(soal1.persegi());
console.log(soal1.lingkaran());

//soal2
class BangunRuang extends BangunDatar {
    constructor(panjang, lebar, tinggi, sisi) {
        super(panjang, lebar, tinggi, sisi);
        (this.panjang = panjang),
            (this.lebar = lebar),
            (this.tinggi = tinggi),
            (this.sisi = sisi);
    }

    kubus() {
        super.persegi();
        this.volume = this.sisi * this.luas;
        let luasPermukaan = 6 * this.luas;
        let kelilingPermukaan = 3 * this.keliling;
        return `Luas Permukaan = ${luasPermukaan}, Keliling = ${kelilingPermukaan}, Volume = ${this.volume}`;
    }

    balok() {
        super.persegiPanjang();
        this.volume = this.tinggi * this.luas;
        let luasPermukaan =
            2 *
            (this.luas + this.panjang * this.tinggi + this.lebar * this.tinggi);
        return `Luas Permukaan = ${luasPermukaan}, Volume = ${this.volume}`;
    }
}

let soal2 = new BangunRuang(10, 6, 4, 3);

console.log(soal2.balok());
console.log(soal2.kubus());
