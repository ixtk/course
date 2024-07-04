![Fetch component interface](/homework/descriptions/img-attachments/13-1.png)

გამოიყენეთ Star Wars API ინფორმაციის მისაღებად: https://swapi.dev/documentation#people

დაგჭირდებათ ორი fetch მოთხოვნის **თანმიმდევრულად** გაგზავნა:

1. **პერსონაჟის** შესახებ ინფორმაციის მოძიება. Request URL არის https://swapi.dev/api/people/?search=<სახელი>; (სცადეთ ბრაუზერში რომელიმე სახელით); უნდა წაიკითხოთ პერსონაჟის სახელი და დაბადების წელი.
2. **პერსონაჟის მშობლიური პლანეტის** შესახებ ინფორმაციის მოძიება. Request URL-ს ნახავთ პერსონაჟის ინფორმაციის JSON-ში, "homeworld" გასაღებზე:

![SWAPI output example](/homework/descriptions/img-attachments/13-2.png)

ეს იმას ნიშნავს, რომ ჯერ პერსონაჟის ინფორმაცია უნდა ჩაიტვირთოს. რომ ჩაიტვირთება, წაიკითხავთ "homeworld" გასაღების მნიშვნელობას, და მაგ URL-ზე გააგზავნით ახალ მოთხოვნას (fetch). შედეგიდან უნდა წაიკითხოთ პლანეტის სახელი, პოპულაცია, და terrain. ყველაფერს იპოვით JSON-ში.

გამოიყენეთ `.then()` და `.catch()`, ან `async/await`, რომელიც უფრო გემარტივებათ.

### დამატებითი მოთხოვნები

1. დაამატეთ loading state: მოთხოვნის ჩატვირთვისას, უნდა ჩანდეს ტექსტი "Loading..."
2. დაამატეთ error state: თუ მოთხოვნის დროს მოხდა შეცდომა, გამოჩნდეს შეცდომის ტექსტი
    - თუ მომხმარებელმა პერსონაჟის არასწორი სახელი შეიყვანა, ამაზეც ერორი გამოჩნდეს: "Character not found". (ნახეთ JSON პასუხი როცა არარსებულ სახელს წერთ, რის მიხედვით შეგიძლიათ გაიგოთ შედეგი ბრუნდება თუ არა)
3. search ღილაკზე დაჭერისას წინა ინფორმაცია, ერორები, state უნდა "განულდეს", input ველი უნდა გასუფთავდეს
Styling/HTML სტრუქტურაში არ ხართ შეზღუდული. მთავარია პერსონაჟის და პლანეტის ინფორმაცია დაბრუნდეს და გამოჩნდეს.