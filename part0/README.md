# Exercises 0.1.-0.6.

### 0.1: HTML

Done.

### 0.2: CSS

Done.

### 0.3: HTML forms

Done.

### 0.4: new note

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=bm90ZSBvdmVyIGJyb3dzZXI6CgACByBzZW5kcyBmb3JtIGRhdGEgdG8gc2VydmVyIAplbmQgbm90ZQAkCC0-ABQGOiBIVFRQIFBPU1QgaHR0cHM6Ly9mdWxsc3RhY2stZXhhbXBsZWFwcC5oZXJva3VhcHAuY29tL25ld18ASgUAgQQKAEkHCgBrBwCBBgZzdGF0dXMgY29kZSB0byByZWRpcmVjdCB0byAvbm90ZXMAgQ8KAIEkBi0tPgCBTwgAgRQGADYMMzAyIACBKhdHRQCBEi4AdwUAYRJodG1sIGRvY3VtZW50ACVGbWFpbi5jcwBaFAASCQAfSmoATxlqcwCDIgsAhCkSdGFydHMgZXhlY3V0aW5nIGpzLWNvZGUKdGhhdCByZXF1ZXN0cyBKU09OAIRWBmZyb20AhDYoAIJuL2RhdGEuanNvbgCEARNbeyBjb250ZW50OiAiSFRNTCBpcyBlYXN5IiwgZGF0ZTogIjIwMTktMDUtMjMiIH0sIC4uLl0AgV4cAIFtBmVzIHRoZSBldmVudCBoYW5kbGVyAIF0CG5kZXJzAIY5BXMgdG8gZGlzcGxheQCGSgk&s=default" alt="Sequence diagram for a classic form submission"/>

<details>
  
  <summary>Expand sequence diagram source code if an image fails to load</summary>

  note over browser:

  browser sends form data to server 
  
  end note

  browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
  
  note over server:

  server sends status code to redirect to /notes

  end note

  server-->browser: HTTP status code 302 

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes

  server-->browser: html document

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css

  server-->browser: main.css

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js

  server-->browser: main.js

  note over browser:

  browser starts executing js-code
  that requests JSON data from server 

  end note

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

  server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

  note over browser:

  browser executes the event handler
  that renders notes to display
  
  end note

</details>

### 0.5: Single page app

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=YnJvd3Nlci0-c2VydmVyOiBIVFRQIEdFVCBodHRwczovL2Z1bGxzdGFjay1leGFtcGxlYXBwLmhlcm9rdWFwcC5jb20vc3BhCgA6Bi0tPgBLBzogaHRtbCBkb2N1bWVudAoAJEVtYWluLmNzcwBbEwASCQCBCkguagBTFAASB25vdGUgb3ZlciAAgWcIAIFZCCBzdGFydHMgZXhlY3V0aW5nIGpzLWNvZGUKdGhhdCByZXF1ZXN0cyBKU09OIGRhdGEgZnJvbSAAgnkGIAplbmQgbm90ZQCBakZkYXRhLmpzb24AgwwTW3sgY29udGVudDogIkhUTUwgaXMgZWFzeSIsIGRhdGU6ICIyMDE5LTA1LTIzIiB9LCAuLi5dAIFeHACBbQZlcyB0aGUgZXZlbnQgaGFuZGxlcgCBdAhuZGVycwCBWwVzIHRvIGRpc3BsYXkAgWwJ&s=default" alt="Sequence diagram for a single page app">

<details>
  
  <summary>Expand sequence diagram source code if an image fails to load</summary>

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa

  server-->browser: html document

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css

  server-->browser: main.css

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
  server-->browser: spa.js

  note over browser:

  browser starts executing js-code
  that requests JSON data from server 

  end note

  browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json

  server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

  note over browser:

  browser executes the event handler
  that renders notes to display
  
  end note

</details>

### 0.6: New note SPA

<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=bm90ZSBvdmVyIGJyb3dzZXI6CmpzIGNvZGUgYXBwZW5kcyBhIG5ldyAAJAV0byB0aGUgcGFnZSB1c2luZyByZWRyYXdOb3RlcygpCmVuZAAkBQoARBMAWQcgcwBQBVBPU1QgcmVxdWVzdCB3aXRoAFIHeWxvYWQKKGNvbnRlbnQgYW5kIHRpbWVzdGFtcCkgaW4ganNvbiBmb3JtYXQAZQoAgTUHLT5zZXJ2ZXI6IEhUVFAAXgZodHRwczovL2Z1bGxzdGFjay1leGFtcGxlYXBwLmhlcm9rdWFwcC5jb20vbmV3X25vdGVfc3BhAIE3CwBNBwoAVgYAgTkHc3RhdHUAgiIHMjAxIENyZWF0ZWQAgXgKAIEEBi0-AIJPCAAaDDsgeyJtZXNzYWdlIjoiAIJ-BWMAOgYifQo&s=default" alt="Sequence diagram for a form submission in a single page app">

<details>
  
  <summary>Expand sequence diagram source code if an image fails to load</summary>

  note over browser:

  js code appends a new note to the page using redrawNotes()

  end note

  note over browser:

  browser sends POST request with the payload
  (content and timestamp) in json format

  end note

  browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa

  note over server:

  server sends status code 201 Created

  end note

  server->browser: 201 Created; {"message":"note created"}

</details>