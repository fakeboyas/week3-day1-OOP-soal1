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

    lingkarang() {
        this.luas = Math.PI * this.r * this.r;
        this.keliling = 2 * Math.PI * this.r;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }
}

const persegi1 = new BangunDatar(4);
console.log(persegi1.persegi());
