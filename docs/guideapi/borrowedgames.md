---
title: Borrowed Games endpoints
---

## Show Borrowed Games

  Returns json data about all borrowed games.

* **URL**

  /api/borrowedgames

* **Method:**

  `GET`
  
*  **URL Params**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{id_game:1, id_borrower:1, borrow_date:"10-10-2020}, ...`
 
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

## Insert Borrowed Game

  Inserts a new borrowed game.

* **URL**

  /api/borrowedgames

* **Method:**

  `POST`
  
*  **URL Params**
 
   None

* **Data Params**

  *
    **Content:** `{id_game:uint, id_borrower:uint, borrow_date:string}`
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{id_game:1, id_borrower:1, borrow_date:"10-10-2020}, ...`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Error inserting borrowed game`

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

## Delete Borrowed Game

  Delete a borrowed game.

* **URL**

  /api/borrowedgames/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
 
   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Borrowed Game removed successfully`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `Error removing the borrowed game, might not exist`

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