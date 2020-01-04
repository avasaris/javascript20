/**
 * name     -   имя товара
 * amount   -   количество
 * image    -   изображение товара
 * count    -   количество на складе
 */
class Goods {
    constructor(name, amount, image = "", count = 0) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(out) {
        out.innerHTML += `<div class="goods_${this.name}"><img src="${this.image}"><br>${this.name}<br>Количество:${this.amount}<br>На складе:${this.count}</div>`;
    }
}