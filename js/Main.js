/*function radiocheck(radioboxGroupName) {
    let level = document.getElementsByName(radioboxGroupName);
    if (level[0].checked)
        game.level = 10;
    if (level[1].checked) 
        game.level = 18;
    if (level[2].checked) 
        game.level = 24;
 }*/

/*function  new_game () {
    document.getElementById("rules").style.display = 'none';
    document.getElementById("menu").style.display = 'none';
    document.getElementById("menu_game").style.display = 'flex';
    document.getElementById("show").style.display = 'flex';

   /* switch(game.level){
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
    let str='';
    let result = Game.random(1, game.level/2);
    let image;
    let div;
    this.img = [game.level];
    for(let i = 0; i < game.level; i++){
        this.img[i] = document.createElement('img');
    }
    for(let i = 0;i < result.length; i++){
        image = document.createElement('img');
        div = document.createElement('div');
        div.className = 'flip';
        div.style.width = this.width;
        div.style.height = this.height;
        str = 'images/card' + result[i] + '.jpg';
        this.img[i].setAttribute('src', str);
        this.img[i].setAttribute('width', this.width);
        this.img[i].setAttribute('height', this.height);
        this.img[i].setAttribute('data-number', result[i]);
        this.img[i].className = 'front';
        image.setAttribute('src', this.image);
        image.setAttribute('width', this.width);
        image.setAttribute('height', this.height);
        image.setAttribute('data-number', result[i]);
        image.setAttribute('src', game.image);
        image.className = 'back';
        div.setAttribute('data-number', result[i]);
        image.addEventListener('click', function(){
            this.parentNode.style.transform = 'rotateY(0deg)';
            if(game.count === 0){
                game.number = this.dataset.number;
                game.count++;
                this.parentNode.setAttribute('name', 'active');
            }
            else{
                game.count = 0;
                let el = document.getElementsByClassName('flip');
                if(game.number == this.dataset.number){
                    if(!this.parentNode.hasAttribute('name')){
                        for(let i =0;i < el.length;i++){
                            if(el[i].dataset.number == game.number)
                                el[i].style.visibility = 'hidden';
                        } 
                    }
                }
                else{
                 this.parentNode.style.transform = 'rotateY(-180deg)'
                 for(let i =0;i < el.length;i++){
                     if(el[i].dataset.number == game.number){
                         el[i].style.transform = 'rotateY(180deg)';
                         el[i].removeAttribute('name');
                     }
                 } 
                    //this.parentNode.style.transform = 'rotateY(0deg)';
                   
                }
            }
           
        });
        div.appendChild(image);
        div.appendChild(this.img[i]);
        document.getElementById("show").appendChild(div);
    }
}*/


