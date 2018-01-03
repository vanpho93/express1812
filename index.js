const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/a.html');
    res.render('a');
});

app.get('/chao/:name/:age', (req, res) => {
    // const name = req.params.name;
    // const age = req.params.age;
    const { name, age } = req.params; //
    res.send(`<h3>Xin chao ${name}, ${age} tuoi</h3>`);
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const phepTinh = new PhepTinh(tenPhepTinh, soA, soB);
    res.send(phepTinh.getResultString());
});

class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    getSign() {
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'NHAN') return '*';
        if (this.tenPhepTinh === 'CHIA') return '/';
        return '+';
    }

    getResultString() {
        const dau = this.getSign();
        const chuoiPhepTinh = `${this.soA} ${dau} ${this.soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`
    }
}

app.listen(3000, () => console.log('Server started'));
