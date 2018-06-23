# Warsawjs Workshop #21

To repozytorium zawiera kod przygotowany na warsztaty #21 WarsawJS - Zaawansowany React.js

# Plan

**Skonfigurowanie projektu**:

- Stworzenie projektu o nazwie: warsawjs-workshop-21
- Podłączenie bibliotek: create react app, redux, redux-logger

**Komponent wyświetlający i pobranie listy projektów**:

- Zapytanie do serwera przy użyciu: redux-api-middleware
- Zapisanie danych w redux store
- Wyświetlenie listy pobranych projektów za pomocą semantic-ui lub innego gotowego zestawu komponentów

**Filtrowanie projektów**:

- Dodanie dropdown
- Wyciągnięcie wszystkich dostępnych tagów z listy pobranych projektów za pomocą selektora
- Dodawanie i usuwanie tagów wybranych w dropdown do redux store
- Wyświetlenie tylko projektów zawierających wybrane tagi za pomocą selektora
- Implementacja memoizacja selectora za pomocą biblioteki reselect

**Normalizacja i middleware**:

- Wyłapanie akcji zwracającej listę projektów w przygotowanym middleware
- Normalizacja danych zwróconych z api za pomocą normalizr
- Dostosowanie selektorów pobierających projekty do nowego kształtu redux store
- Podłączenie do redux store każdego projektu z osobna w celu ograniczenia niepotrzebnych przeładowań komponentów [link]

**Wyświetlanie pojedynczego projektu**:

- Konfiguracja bibliotek react-router-dom
- Dodanie routingu w którym na stronie głównej wyświetlona będzie lista projektów oraz nowej strony pojedynczy projekt.

**Pobieranie listy podobnych projektów**:

- Konfiguracja redux-saga
- Pobieranie liczby podobnych projektu dla każdego sklepu w osobnym zapytaniu
- Wyświetlanie sumarycznej liczby podobnych projektów
- Implementacja przerywania trwających zapytania po powrocie do listy projektów

**Inicjalizacja aplikacji z redux-saga**:

- Pobieranie listy projektów na starcie aplikacji niezależnie od odwiedzanej podstrony
- Dodanie komponentu wyświetlającego informacje o ładowaniu zanim pobiorą się projekty z serwera
- Wydzielenie higher order component z opisaną logiką

**Limitowanie wyświetlanej listy projektów**:

- Dodanie komponentu function as child dostarczającego logikę przechowywania limt i jego zwiększania i zmniejszania

**Wyświetlanie komentarzy do projektu**:

- Wyświetlenie komentarzy naniesionych na makietę projektu z możliwością filtrowania dla danego znacznika
