```mermaid
sequenceDiagram
    participant browser
    participant server
    participant database
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>database: INSERT new note
    activate database
    database-->>server: note created
    deactivate database
    server-->>browser: Redirect to /exampleapp/notes
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document with the new note
    deactivate server
```
