class Goods2 extends Goods {
    constructor(name, amount, image = "", count = 0){
        super(name, amount, image, count);
        this.sale = (Math.random() > 0.5) ? true : false;
    }

    draw(out) {
        let saleinfo = this.sale ? "<br><h3>SALE</h3>" : "";
        out.innerHTML += `<div class="goods_${this.name}"><img src="${this.image}"><br>${this.name}${saleinfo}<br>Количество:${this.amount}<br>На складе:${this.count}</div>`;
    }

}