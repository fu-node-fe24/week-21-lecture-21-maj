# week-21-lecture-21-maj

## Instruktioner MongoDB workshop

I mappen *blog-api* hittar ni filen *Insomnia_2025-05-20.yaml*. Denna kan ni importera till insomnia så slipper ni skapa nya request collections för att testa APIet tillsammans.

**Steg 1:** 
Välj ut en person som skapar upp en databas med namnet *BlogAPI*. Databasen skall innehålla en collection med namnet *keys*.

**Steg 2:**
Den utvalda personen skapar nu en roll som ger tillåtelse att interagera med Databasen *BlogAPI*. Därefter skapas en roll vardera till gruppmedlemmarna, som alla tilldelas den skapade rollen.

**Steg 3:**
Klicka på *Network Access* i menyn till vänster, följt utav knappen *ADD IP ADRESS* längst ut till höger i bild. Här fyller databasansvarig i alla gruppkompisars IP-adresser. Era IP-adresser [hittar ni här](https://whatismyipaddress.com/). Om ansvarig känner sig bekväm med det så kan hen istället klicka på knappen *ALLOW ACCESS FROM ANYWHERE*.

**Steg 4:**
Var och en i gruppen tilldelas clustrets Connection String för Compass, där man fyller på med sina egna användaruppgifter och försöker connecta. Kontrollera så att ni alla kan se databasen *BlogAPI* och collection *keys*. Varje person i gruppen lägger därefter till en API-nyckel i collection *keys* enligt formatet "blog-XXXXX".

**Steg 5:**
Var och en i gruppen clonar hem detta repo, öppnar mappen blog-api i VSCode där man skapar en *.env*-fil. I denna fil lägger man in nycklarna *PORT* och *CONNECTION_STRING*. Fyll i valfri port, och klistra in den collection string som databasansvarige nu hämtar på MongoDB. Tänk på att fylla i era tilldelade användaruppgifter, samt lägga till databasens namn som endpoint i url:en.

**Steg 6:**
Starta igång er utvecklingsserver och använd insomnia för att registrera en varsin användare, logga in, och försök därefter posta ett par blogginlägg vardera. Kontrollera att era collections fylls på med data i Compass.
