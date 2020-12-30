class MyDatabase {
    private static instance : MyDatabase | null ;
    private id: number = 0;

    constructor() {
        this.id = Math.random()
    }
    public getID():number {
        return this.id;
    }
    public static getInstance():MyDatabase {
        if(!MyDatabase.instance) {
            MyDatabase.instance = new MyDatabase();
        }
        return MyDatabase.instance;
    }
}

const connectedStore =  [
    MyDatabase.getInstance(),
    MyDatabase.getInstance(),
    MyDatabase.getInstance(),
    MyDatabase.getInstance(),
    MyDatabase.getInstance()
]

console.log(connectedStore) // Store only one id of connection
