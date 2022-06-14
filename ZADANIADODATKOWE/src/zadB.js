**Zadanie 2** 

Napisz funkcję:

```js
const razem = (fun1, fun2, fun3, cb) => n => { 
  // Uzupełnij tutaj
};
```                
                        
taką, że:
1. pierwszymi trzema parametrami są funkcje asynchroniczne, gdzie jednym z parametrów jest n, będące liczbą. 
2. funkcja `razem` powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica `[wynik1, wynik2, wynik3]` do funkcji `cb`. 
3. czwartym argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje.
4. Deklaracja funkcji razem ma pozostać w podanym kształcie

**UWAGA (!)** Aby końcowe rozwiązanie było kompletne, powinno zawierać wszystkie parametry potrzebne do wywołania funkcji (deklaracje funkcji asynchrocznych i callback'u) oraz jej przykładowe wywołanie. 