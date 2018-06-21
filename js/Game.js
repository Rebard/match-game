 class Game{
    constructor(level){
        this.level = level;
        this.img = [];
    }
    chooseLevel(radioboxGroupName) {
        let level = document.getElementsByName(radioboxGroupName);
        if (level[0].checked){
            this.level = 10;
        }
        if (level[1].checked){ 
            this.level = 18;
        }
        if (level[2].checked){ 
            this.level = 24;
        }
    }
    start_game(){
        let flip = document.getElementsByClassName('flip');
        for(let i = 0; i < game.level; i++){
           flip[i].style.transform = 'rotateY(180deg)';
         } 
    }
    new_game () {
        document.getElementById("rules").style.display = 'none';
        document.getElementById("menu").style.display = 'none';
        document.getElementById("menu_game").style.display = 'flex';
        document.getElementById("cards").style.display = 'flex';
        card.installSize(this.level);
        let str='';
        let result = Game.random(1, game.level/2);
        let shirt;
        let div;
        let count = 0;
        let number = '';
        let level = game.level;
        this.img = [game.level];
        for(let i = 0;i < result.length; i++){
            this.img[i] = document.createElement('img');
            shirt = document.createElement('img');
            div = document.createElement('div');
            div.className = 'flip';
            div.style.width = card.width;
            div.style.height = card.height;
            div.setAttribute('data-number', result[i]);
            str = 'images/card' + result[i] + '.jpg';
            this.img[i].setAttribute('src', str);
            this.img[i].setAttribute('width', card.width);
            this.img[i].setAttribute('height', card.height);
            this.img[i].setAttribute('data-number', result[i]);
            this.img[i].className = 'front';
            shirt.setAttribute('src', card.shirt);
            shirt.setAttribute('width', card.shirt);
            shirt.setAttribute('height', card.shirt);
            shirt.setAttribute('data-number', result[i]);
            shirt.className = 'back';
            shirt.addEventListener('click', function(){
               let temp = this.parentNode;
               this.parentNode.style.transform = 'rotateY(0deg)';
                if(count === 0){
                    number = this.dataset.number;
                    count++;
                    this.parentNode.setAttribute('name', 'active');
                }
                else{
                    count = 0;
                    let el = document.getElementsByClassName('flip');
                    if(number == this.dataset.number){
                        if(!this.parentNode.hasAttribute('name')){
                            level -= 2;
                            for(let i = 0;i < el.length;i++){
                                if(el[i].dataset.number == number)
                                    el[i].style.visibility = 'hidden';
                            } 
                        }
                        if(level == 0)
                            game.winner();
                    }
                    else{
                    setTimeout(function(){
                       temp.style.transform = 'rotateY(180deg)';
                        for(let i = 0;i < el.length;i++){
                            if(el[i].dataset.number == number && el[i].hasAttribute('name')){
                                el[i].style.transform = 'rotateY(180deg)';
                                el[i].removeAttribute('name');
                                break;
                            }
                        } 
                    },1000);
                    }
                } 
            });
            div.appendChild(shirt);
            div.appendChild(this.img[i]);
            document.getElementById("cards").appendChild(div);
        }
    }
    static random(min, max){
        let arr = [];
        let result = [];
        let total = max - min + 1;
        let temp;
        while(total--){
            arr.push(total + min);
            arr.push(total + min);
        }
        while(arr.length){
            temp = Math.floor(Math.random() * (arr.length));
            result.push(arr[temp]);
            arr.splice(temp, 1);
        }
        return result;
    }
    winner(){
        document.getElementById("cards").style.display = 'none';
        document.getElementById("congratulations").style.display = 'flex';
        switch(this.level){
            case 10: document.getElementById("congratulations").innerHTML = '<h2>CONGRATULATIONS<br> It was easy</h2>';
                break;
            case 18: document.getElementById("congratulations").innerHTML = '<h2>CONGRATULATIONS<br>WoW!)';
                break;
            case 24: document.getElementById("congratulations").innerHTML = '<h2>CONGRATULATIONS<br>You are SVERHRAZUM!)';
                break;
        }
    }
}
class Card{
    constructor(shirt){
        this.shirt = shirt;
        this.width = 0;
        this.height = 0;
     }
    chooseShirt(groupName){
        let shirt = document.getElementsByName(groupName);
        if(shirt[0].checked)
           this.shirt = "images/shirt3.jpg";
       if(shirt[1].shirt)
           this.shirt = "images/shirt5.jpg";
       if(shirt[2].checked)
           this.shirt = "images/shirt2.jpg";
    }
    installSize(level){
        switch(level){
            case 10: this.width = '18%';
            this.height = '45%';
                break;
            case 18: this.width = '15%';
            this.height = '30%';
                break;
            case 24: this.width = '12%';
            this.height = '30%';
                break;
        }
    }
}
var game = new Game(18);
var card = new Card('images/shirt2.jpg');

