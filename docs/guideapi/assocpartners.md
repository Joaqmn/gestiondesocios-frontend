---
title: Assoc Partners endpoints
---

## Show Partner

  Returns json data about a single partner.

* **URL**

  /api/assoc_partners/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id":1,"partner_name":"Pepe"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Partner not found" }`

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

  

## Show Partners

  Returns json data about all partners.

* **URL**

  /api/assoc_partners

* **Method:**

  `GET`
  
*  **URL Params**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"id":1,"partner_name":"Pepe"}, ...`
 
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

## Insert Partner

  Inserts a new partner.

* **URL**

  /api/assoc_partners

* **Method:**

  `POST`
  
*  **URL Params**
 
   None

* **Data Params**

  *
    **Content:** `{"id":uint, "partner_name":string}`
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"id":1,"partner_name":"Pepe"}, ...`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `Error inserting partner`

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

## Delete Partner

  Delete a partner.

* **URL**

  /api/assoc_partners/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
 
   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Partner removed successfully`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `Error removing partner, might not exist`

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

## Update Partner

  Update an existing partner.

* **URL**

  /api/assoc_partners/:id

* **Method:**

  `PUT`
  
*  **URL Params**
 
   **Required:**
 
   `id=[integer]`

* **Data Params**

  *
    **Content:** `{"id":uint, "partner_name":string}`
 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id":1,"partner_name":"Pepe"}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `Partner not found`

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
