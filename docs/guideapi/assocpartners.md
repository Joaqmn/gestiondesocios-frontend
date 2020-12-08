---
title: Assoc Partners endpoints
---

## Show Game

  Returns json data about a single game.

* **URL**

  /api/games/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Game not found" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

  

## Show Games

  Returns json data about all games.

* **URL**

  /api/games

* **Method:**

  `GET`
  
*  **URL Params**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}, ...`
 
* **Error Response:**

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

## Insert Game

  Inserts a new game.

* **URL**

  /api/games

* **Method:**

  `POST`
  
*  **URL Params**
 
   None

* **Data Params**

  *
    **Content:** `{"id":int,"game_name":string,"rating":float,"id_owner":int,"entry_date":string,"disponibility":bool,"comments":string}`
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}, ...`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Error inserting game`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

## Delete Game

  Delete a game.

* **URL**

  /api/games/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
 
   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Game removed successfully`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `Error removing the game, might not exist`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

## Update Game

  Update an existing game.

* **URL**

  /api/games/:id

* **Method:**

  `PUT`
  
*  **URL Params**
 
   **Required:**
 
   `id=[integer]`

* **Data Params**

  *
    **Content:** `{"id":int,"game_name":string,"rating":float,"id_owner":int,"entry_date":string,"disponibility":bool,"comments":string}`
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id":2,"game_name":"Game Prueba 2","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `Game not found`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
