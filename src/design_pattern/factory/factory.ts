interface IGamePlayer {
  play(): string;
}

class XBox implements IGamePlayer {
  play() {
    return "playing XBox";
  }
}

class PS5 implements IGamePlayer {
  play() {
    return "Playing PS5";
  }
}

class Nintendo implements IGamePlayer {
  play() {
    return "Playing Nintendo";
  }
}

class GamePlayerFactory {
  public getGamePlayer(type: Object): Object {
    return type === "XBOX"
      ? new XBox()
      : type === "PS5"
      ? new PS5()
      : type === "NINTENDO"
      ? new Nintendo()
      : null;
  }
}

/**
 * Client implementation
 */
function MainClient() {
  let xbox = new XBox();
  let ps5 = new PS5();
  let factoryGame = new GamePlayerFactory();

  console.log(factoryGame.getGamePlayer("XBOX"));
}
MainClient();
