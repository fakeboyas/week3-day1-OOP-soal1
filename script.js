class BangunDatar {
    constructor(luas, keliling) {
        this.luas = luas;
        this.keliling = keliling;
    }

    persegi(sisi) {
        this.luas = sisi * sisi;
        this.keliling = 4 * sisi;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    persegiPanjang(panjang, lebar) {
        this.luas = panjang * l;
        this.keliling = 2 * panjang + 2 * lebar;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    segitigaSiku2(alas, tinggi) {
        this.luas = (1 / 2) * alas * tinggi;
        this.keliling = alas + tinggi + sqrt(alas * alas + tinggi * tinggi);
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    lingkarang(r) {
        this.luas = Math.PI * r * r;
        this.keliling = 2 * Math.PI * r;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }
}
