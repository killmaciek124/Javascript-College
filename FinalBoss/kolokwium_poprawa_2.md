W poniższych zadaniach **nie** używaj mechanizmu async/await

## Zadanie 1

Dokończ poniższy fragment kodu opisujący flow pobierania danych dla zalogowanego użytkownika (posiadającego losowo wygenerowane id po zalogowaniu):

```js
class AccountService {
  constructor() {
    this.authenticated = false;
    this.idUser = Math.floor(Math.random() * 10);
    this.user = null;
  }

  // Pobieranie liczby sekund, po jakiej użytkwwnik powinien zostać zalogowany
  getRandomLoginTime() {
    return (Math.floor(Math.random() * 10) % 5) + 5;
  }
}
```

tak, aby spełniał poniższe wymagania:

- funkcja `isAuthorizated` powinna po upływie jednej sekundy "zwracać" informację, czy użytkownik jest aktualnie zalogowany (czy nie) - flaga `authenticated`.
- funkcja `checkIsUserLogin` powinna, co sekundę sprawdzać (do momentu, aż uzyska informacje pozytywną), czy użytkownik jest zalogowany. W zależności od rezultatu powinien zostać wyświetlony odpowiedni komunikat: "Użytkownik nie jest zalogowany" / "Użytkownik jest zalogowany". (Funkcja zostaje wywołana na samym początku działania programu.)
- funkcja `loginUser` po upływie `getRandomLoginTime()` sekund powinna zmieniać status użytkownika na zalogowany (`authenticated`). Po zmianie statusu powinien zostać wyświetlony w konsoli komunikat "Użytkownik został zalogowany".
- funkcja `getUserDetails` - w momencie, kiedy dostaniemy informację, że użytkownik jest zalogowany, pobieramy informacje o zalogowanym użytkowniku `GET https://jsonplaceholder.typicode.com/users/{idUser}`. Po pobraniu danych powinna zostać wyświetlona w konsoli informacja o zalogowanym użytkowniku: "Zostałeś zalogowany jako: {{ name }}"
- Funkcja `getData` pobierze wszystkie posty `GET https://jsonplaceholder.typicode.com/posts`, a następnie tylko dla postów zalogowanego użytkownika (`GET https://jsonplaceholder.typicode.com/posts/{idPost}/comments`) pobierze "równolegle" wszystkie komentarze do pobranych postów. Kiedy wszystkie komentarze zostaną pobrane, powinien zostać wyświetlony komunikat w konsoli "Pobrano wpisy i komentarze użytkownika: {{ name }}"
- Cały program powinien się wykonać (zalogowanie, pobieranie danych użytkownika) po wywołaniu funkcji `start` (zachowując wyżej opisane flow).

Wynik w konsoli, po wywołaniu funkcji start:

```
Użytkownik nie jest zalogowany
Użytkownik nie jest zalogowany
Użytkownik nie jest zalogowany
Użytkownik nie jest zalogowany
Użytkownik został zalogowany
Użytkownik jest zalogowany
Zostałeś zalogowany jako: Leanne Graham
Pobrano wpisy i komentarze użytkownika: Leanne Graham
```

Następnie dodaj do powyższego programu funkcje `startSession()`, która zostaje wywołana w momencie, kiedy użytkownik zostanie zalogowany. Funkcja ta rozpoczyna odliczanie do końca czasu trwania sesji (losowa liczba z dowolnego zakresu, sesja może się zakończyć zanim użytkownik zdąży pobrać dane z jsonplaceholder. Wtedy kolejne operacje nie zostaną wykonane, ale aktualnie trwające mogą się zakończyć). W momencie, gdy sesja zakończy się, powinien zostać wypisany w konsoli komunikat "Sesja się zakończyła, użytkownik został wylogowany", a flaga `authenticated` powinna zostać zmieniona na `false`.

## Zadanie 2.

Korzystając z mechanizmu callbacków wykonaj funkcję `throttle`, która:

- przyjmuje dwa parametry: `funcTab`, `intervalFunc`, odpowiednio; tablicę funkcji asynchronicznych przyjmujących parametr liczbowy i jest stałej długości 10 oraz funkcję asynchroniczną
- funkcje z tablicy `funcTab` mają wykonywać się po kolei tzn. po zakończeniu działania funkcji pierwszej, rozpoczyna się funkcja druga itd.
- w momencie startu funkcji, `intervalFunc` oraz pierwsza funkcja z `funcTab` rozpoczynają działanie
- wynik pierwszej funkcji jest propagowany do następnych funkcji tak długo, aż `intervalFunc` skończy działanie
- w momencie, gdy `intervalFunc` kończy działanie, wynik funkcji `funcTab`, który jest aktualnie wykonywany zostaje propagowany do następnych funkcji w zamian za poprzedni wynik, a funkcja `intervalFunc` zostaje ponownie uruchomiona
- Po wykonaniu ostatniej funkcji powinny się wyświetlić wszystkie wyniki, które były propagowane

Schemat działania:

```
funcTab[0](5) -----> funcTab[1](wynikF0) ------> funcTab[2](wynik0) -----> funcTab[3](wynik0) -----> funcTab[4](wynikF3) -------> funcTab[5](wynikF3) --------> .......
```

Start funkcji `throttle`

```
intervalFunc() ------------------------------------------------------------> intervalFunc() ----------------------------> .....
```

Wynik:

```
  [ wynikF0, wynikF3, ...]
```
