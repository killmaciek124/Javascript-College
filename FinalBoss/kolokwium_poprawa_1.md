## Zadanie 1

Celem zadania będzie ukończenie prostej gry żeglarskiej. Gra składa się z:

- planszy (klasa Grid)
- kafelka (klasa Tile)
- statku (klasa Ship)

Plansza jest zbudowana w oparciu o kwadraty, nazywane kafelkami. Przykładowo, jeżeli plansza ma rozmiar 4x4 oznacza to, że składa się z 16 kafelków (16 instancji klasy `Tile`).

```js
class Tile {
  type = null;
  x = null;
  y = null;
}

class Grid {
  height = null; // liczba całkowita
  width = null; // liczba całkowita
  grid = null; // tablica dwuwymiarowa
  ships = null; // tablica jednowymiarowa
}

class Ship {
  direction = null; // string
  x = null; // liczba całkowita
  y = null; // liczba całkowita
  grid = null; // obiekt klasy Grid
}

// Funkcja losująca typ kafelka:
const types = [ "LAND", "WATER", "ICE"];
const itemType = types[Math.floor(Math.random()*types.length)];
```

Uzupełnij klasę `Tile` o:

- konstruktor, który przyjmuje parametry `x`, `y` oraz `type`. X i Y to koordynaty kafelka na planszy `Type`, a `type` może przyjmować tylko wartości "LAND", "WATER" i "ICE". Wartości parametrów powinny zostać przypisane do zmiennych istniejących w klasie.
- funkcję `getTileInfo`, która zwraca koordynaty i typ kafelka jako string

Uzupełnij klasę `Grid` o:

- funkcję `generate`, która przyjmuje jako parametry: `height` i `width` (będące liczbami całkowitymi). Parametry nadać wartość zmiennym istniejącym w klasie. Oprócz tego, funkcja powinna tworzyć planszę o podanych rozmiarach, poprzez inicjalizację tablicy dwuwymiarowej `grid`. Każdy element planszy musi być obiektem klasy `Tile` o określonym typie ("LAND", "WATER" albo "ICE"). Typ powinien być losowy dla każdego elementu.
- funkcję `generatePredefined`, która przyjmuje jako parametry `height`, `width` oraz `predefinedTiles`. Funkcja ta działa analogicznie jak poprzednia, z tą różnicą, że w wybranych przez nas miejscach wstawimy przygotowane przez siebie kafelki. `PredefinedTiles` to tablica obiektów klasy `Tile`, które to wstawia w wybranych miejscach planszy (np. jeżeli obiekt klasy `Tile` ma wartości: x = 10 i y = 20), to na planszy w koordynatach 10 i 20 ma zostać wstawiony dany kafelek.
- funkcję `getTile` z parametrami x i y - funkcja zwraca kafelek w danych koordynatach. Jeżeli w danych koordynatach nie istnieje żaden kafelek, to zostaje zwrócone `null`.

Uzupełnij klasę `Ship` o:

- konstruktor, który przyjmuje parametry: `direction` - czyli w jakim kierunku jest zwrócony aktualnie statek ("N", "S", "E" lub "W"), `x` i `y` - aktualne koordynaty statku, grid - plansza, na które jest umieszczony statek. Statek nie może pojawić się na kafelku oznaczonym "LAND" i "ICE". Statek zostaje również wtedy dodany do tablicy "ships" w obiekcie `grid`.
- funkcję `turn`, która będzie zmieniać kierunek statku (ale nadal będzie pozostawał na tym samym kafelku). Obracać może się zgodnie lub przeciwnie do ruchu wskazówek zegara.
- funkcję `sail`, która będzie przesuwała statek o jeden kafelek w aktualnym kierunku statku. Zadbaj o to, żeby statek nie mógł się poruszyć na kafelek typu "LAND" lub "ICE" - program powinien wtedy wyświetlać odpowiedni komunikat. Statek nie powinien móc również wypłynąć poza planszę, ani też uderzyć o inny statek (na planszy może być kilka statków).
- funkcję `getShipInfo`, która zwraca kierunek oraz koordynaty statku jako string.

Stwórz klasę `IcebreakerShip`, która dziedziczy po klasie `Ship`. I uzupełnij ją o:

- konstruktor, który przyjmuje `x`, `y` - aktualne pozycje lodołamacza oraz `grid` - planszę statku. Statek ten zawsze pojawia się skierowany na północ.
- funkcja `turn` powinna obracać kierunek statku o 180 stopni.
- funkcja `sail` powinna umożliwiać poruszanie się zarówno po kafelkach o typie "WATER" jak i "ICE". Jeśli jednak Statek trafi na pole o typie "LAND" automatycznie się obraca o 90 stopni zgodnie z ruchem wskazówek zegara (wywołuje funkcję `turn` z klasy Ship).

**Nie dodawaj żadnych dodatkowych zmiennych w przedstawionych klasach**.

Przykład użycia:

```js
const grid = new Grid();
grid.generate(10, 10); - generuje planszę o wymiarach 10 x 10
console.log(grid.getTileAt(2,2).getTileInfo()) // 2,2 LAND
grid.generate(10, 5); - na nowo generuje planszę o wymiarach 10 x 5

const predefTiles = [
    new Tile(1, 2, "LAND"),
    new Tile(2, 2, "WATER"),
    new Tile(5, 5, "ICE")
];

grid.generate(10, 10, predefTiles); // generate => generatePredefined 
console.log(grid.getTileAt(2,2).getTileInfo()) // 2,2 WATER

const ship = new Ship(2, 4, "N", grid);
const ship2 = new Ship(1,2, "N", grid); // błąd
const icebreaker = new Icebreaker(3,5, grid);

ship.turn("P"); // Statek obrócony o 90 st. w prawo
ship.sail(); // Statek poruszyl się o 1 kafele na wschód
ship.sail(); // Statek napotkał ląd, pozostał w miejscu
ship.turn("L")  // Statek obrócony o 90 st. w lewo
ship.sail(); // Statek napotkał inny statek, pozostał w miejscu

icebreaker.sail(); // Statek napotkał lądolód, przedarł się przez niego
console.log(icebreaker.getShipInfo()); - // "N", 3,6
```

W odpowiednim miejscu dopisz funkcje `printGrid`, która zwraca planszę (jako string) ze wszystkimi znajdującymi się elementami, gdzie:

- ~ - będzie oznaczać pole "WATER"
- x - będzie oznaczać pole "ICE"
- o - będzie oznaczać pole "LAND"
- N, S, E lub W będzie oznaczać statek odwrócony w odpowienim kierunku

```
Przykładowy output:

~ ~ ~ ~ ~ o
~ ~ x E ~ o
S ~ ~ ~ ~ ~
o o ~ ~ ~ ~
```
