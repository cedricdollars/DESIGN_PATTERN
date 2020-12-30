abstract class  Menu {
    public ingredients:Array<string>

   public getIngredient(ingredient:string):number {
        return this.ingredients.push(ingredient)
    }
    public abstract makeMenu():string
}

class MenuPoulet extends Menu {
    public ingredients: Array<string> = ["Sauce blanche", "Tomates", "Poivres blancs"];

    makeMenu():string {
        return `Poulet panné avec frite de pommes de terre`;
    }

} 
class MenuSaumon extends Menu {
    public ingredients:Array<string> = ['Sel', "saumon"];

    makeMenu():string {
        return `Saumon rouge aux ecailles épicés`
    }
}

abstract class MenuPrivee extends Menu{
    decorateMenu: Menu
    public abstract makeMenu():string
    public abstract getIngredient():number
}

class MenuCourgette extends MenuPrivee {
    decorateMenu: Menu
    constructor(menu: Menu) {
        super()
        this.decorateMenu = menu 
    }
    public makeMenu(): string {
        return this.decorateMenu.makeMenu() + ` et du chorizo`
    }
    public getIngredient(): number {
       return this.decorateMenu.getIngredient('salade') 
    }
    
}
class MenuPanini extends MenuPrivee {
    decorateMenu: Menu
    constructor(menu: Menu) {
        super()
        this.decorateMenu = menu
    }
    public makeMenu(): string {
        return this.decorateMenu.makeMenu() + `et du Jambon`
    }
    public getIngredient(): number {
       return this.decorateMenu.getIngredient('oignon')
    }
    
}
let poulet = new MenuPoulet();
poulet = new MenuPanini(poulet)
console.log(poulet.getIngredient('Frites'));
console.log(poulet.makeMenu());