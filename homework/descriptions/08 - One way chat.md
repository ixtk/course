მოცემული wireframe-ების მიხედვით შექმენით პატარა chat აპლიკაცია:

![Chat interface - 1](/homework/descriptions/img-attachments/8-1.png)

![Chat interface - 2](/homework/descriptions/img-attachments/8-2.png)

დავალების პირობები:

1. აპლიკაციის ჩართვისას ჯერ უნდა გამოვიდეს ღილაკი "Start Chatting". ამ ღილაკზე დაჭერით უნდა გაქრეს ღილაკი და გაიხსნას ჩათის ფანჯარა.
2. შესაძლებელი უნდა იყოს მიმღების შეცვლა, მაგალითად Ron-დან Harry-ზე გადაყვანა.
3. აქტიური მიმღების სახელი უნდა იყოს განსხვავებული სტილით Sidebar-ში (background-color).
4. იმ ჩათებში, რომლებშიც ჯერ მესიჯი არ არის, უნდა გამოვიდეს ტექსტი "No messages yet".
5. Input-ის placeholder-ში უნდა ეწეროს "Send a message to <recipient>...", სადაც recipient არის აქტიური მიმღების სახელი.
6. Send ღილაკზე დაჭერისას შესაბამისი აქტიური მიმღების ჩათში/ფანჯარაში უნდა ემატებოდეს მესიჯები.
7. მნიშვნელოვანია: მიმღების შეცვლისას წინა მესიჯები არ უნდა წაიშალოს. მაგ.: Ron-ს თუ რაღაცეები მივწერეთ, შემდეგ გადავედით Hermione-ზე, Ron-ზე დაბრუნებისას უნდა დაგვხვდეს ძველი მესიჯები.
8. მნიშვნელოვანია: უნდა შექმნათ ორი კომპონენტი - Sidebar და ChatWindow. Sidebar-ში იქნება მიმღების შესაცვლელი ღილაკები (მარცხნივ რომ არის), ChatWindow-ში დანარჩენი ინტერფეისი (chat + input box).
9. მნიშვნელოვანია: აპლიკაციის layout (განლაგება) უნდა ემთხვეოდეს ზემოთ მოცემულ wireframe-ებს.

Style-ის მხრივ არ ხართ შეზღუდული, რაც გინდათ დაამატეთ, ფოტოები, ფერები შეცვალეთ, სახელები და ა.შ. მთავარია basic layout იყოს რაც ფოტოზეა. ნებისმიერი styling მიდგომა შეგიძლიათ გამოიყენოთ (css, css modules, sass...).