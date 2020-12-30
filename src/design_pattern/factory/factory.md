- Le design pattern Factory ou Fabrique est un design pattern permettant de séparer la création d'objets implémentant une interface, de leur utilisation.
  Son but est de créer une classe qui fera office de création de plusieurs objets et réduit ainsi les problèmes de répétitions.

```mermaid
classDiagram
    IGamePlayer <|-- GameOne
    IGamePlayer <|-- GameTwo
    IGamePlayer: +play()
    GamePlayerFactory <.. classGameOne
    GamePlayerFactory <.. classGameTwo
    class IGamePlayer{
        +play()
    }
    class GameOne{
        +play()
    }
    class GameTwo{
        +play()
    }
    GamePlayerFactory{
        +getGamePlayer()
    }
```
