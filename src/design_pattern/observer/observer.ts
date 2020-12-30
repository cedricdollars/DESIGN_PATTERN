interface Subject {
  subscribe(o: Observer): void;
  unsubscribe(o: Observer): void;
  notifyObservers(): void;
  publish(videoName: string): void;
}
interface Observer {
  update(): void;
}

class Abonnement implements Subject {
  newVideo: string = "";
  abonnes: Abonnes[] = [];

  unsubscribe(abon: Abonnes): void {
    let index = this.abonnes.indexOf(abon);
    index > -1 ? this.abonnes.splice(index, 1) : null;
  }
  notifyObservers(): void {
    for (const abonne of this.abonnes) {
      abonne.update();
    }
  }
  publish(videoName: string) {
    this.newVideo = videoName;
    console.log(`Nouvelle vidéo publiée : ${this.newVideo} `);
    this.notifyObservers();
  }
  subscribe(abon: Abonnes) {
    this.abonnes.push(abon);
  }
}

class Abonnes implements Observer {
  private abonnement: Abonnement;

  constructor(abonnement: Abonnement) {
    this.abonnement = abonnement;
    abonnement.subscribe(this);
  }
  update(): void {
    console.log(`Hey nouvelle vidéo à propos de: ${this.abonnement.newVideo}`);
  }
}
let youtube = new Abonnement();
let abonne1 = new Abonnes(youtube);
let abonne2 = new Abonnes(youtube);
let abonne3 = new Abonnes(youtube);

youtube.publish("Apprendre le HTML");
youtube.publish("Apprendre le Javascript");
youtube.publish("Comment utiliser Git");
youtube.publish("Tout savoir sur l'event loop");

youtube.unsubscribe(abonne1);
