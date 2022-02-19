# Interview test application

Basic table application. 

It can be started with **npm start**

The documentation states that it should be made as follows:

*Use‌‌ GET-request‌ https://jsonplaceholder.typicode.com/photos?_limit=100‌‌‌ to‌‌ get‌‌ a‌‌ list‌‌ of‌‌ objects.‌*

*1)‌‌ Using‌‌ the‌‌ requested‌‌ data‌‌ create‌‌ a‌ ‌table‌‌ with‌‌ pagination, where‌‌ 20‌‌ items‌‌ will‌‌ be‌‌ displayed‌‌ on‌‌ each‌‌ page.‌* <br/> *‌The‌‌ table‌‌ width‌‌ should‌‌ not‌‌ exceed‌‌ 2/3‌‌ of‌‌ the‌‌ page‌‌ width.‌* 

*2)‌‌ Each‌‌ row‌‌ of‌‌ this‌‌ table‌‌ must‌‌ have‌‌ 2‌‌ buttons:‌* <br/>
*- first‌‌ "remove"‌‌ by‌‌ clicking‌‌ on‌‌ which‌‌ the‌‌ row‌‌ should‌‌ be‌‌ removed‌‌ from‌‌ the‌‌ table,‌*</br> ‌
*- second‌‌ "edit"‌‌ by‌‌ clicking‌‌ on‌‌ which‌‌ the‌‌ "title"‌‌ field‌‌ becomes‌‌ editable,‌‌ and‌‌ the‌‌ button‌‌ itself‌‌ changes‌‌ the‌‌ color‌‌ and‌‌ text‌‌ to‌‌ "done",‌‌ after‌‌ clicking‌‌ on‌‌ "done"‌‌ the‌‌ "title"‌‌ field‌‌ again‌‌ becomes‌‌ unavailable‌‌ for‌‌editing.‌*</br>

*3)‌‌ Initially,‌‌ when‌‌ the‌‌ table‌‌ is‌‌ displayed the‌‌ "albumId"‌‌ and‌‌ "id"‌‌ fields‌‌ should‌‌ randomly‌‌ change‌‌ every‌‌ 2‌‌ seconds‌‌ in‌‌ the‌‌ range‌‌ from‌‌ 1‌‌ to‌‌ 1,000,000,‌ when‌‌ you‌‌ click‌‌ on‌‌ a‌‌ space‌‌ outside‌‌ the‌‌ table, the‌‌ changes‌‌ should‌‌ stop,‌‌ when‌‌ you‌‌ click‌‌ again‌‌ outside‌‌ the‌‌ table,‌‌these‌‌ fields‌‌ should‌‌ start‌‌ changing‌‌ again. If‌‌ you‌‌ click‌‌ on‌‌ a‌‌ row‌‌ of‌‌ the‌‌ table,‌ then‌‌ changes‌‌ to‌‌ the‌‌ fields‌‌ "albumId"‌‌ and‌‌ "id"‌‌ should‌‌ continue‌‌ only‌‌ in‌‌ this‌‌ row‌‌ and‌‌ stop‌‌ in‌‌ the‌‌ rest, when‌‌ you‌‌ click‌‌ again,‌‌ the‌‌ changes‌‌ should‌‌ start‌‌ in‌‌ all‌‌ rows.‌*

*Restrictions:‌*</br>
*‌-‌‌ Use‌‌ React‌‌ JS(or‌‌TS);‌*</br>
*‌-‌‌ use‌‌ only‌‌ native‌‌ JS, you‌‌ cannot‌‌ use‌‌ auxiliary‌‌ libraries‌‌ like‌‌ Lodash‌‌ and‌‌ any;‌*</br>
*‌-‌‌ you‌‌ can‌‌ use‌‌ the‌‌ Material‌‌ UI‌‌ library‌‌ for‌‌ creating‌‌ UI‌‌ components‌‌ (table,‌‌ button‌‌ and‌‌ etc)‌*</br>