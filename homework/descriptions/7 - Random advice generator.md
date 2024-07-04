Random advice generator Frontendmentor-ზე (აქედან გადმოწერთ სტარტერ ფაილებს თუ დაგჭირდათ): https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db

![Advice generator component](/homework/descriptions/img-attachments/7-1.png)

თქვენი მიზანია დიზაინის მიხედვით შექმნათ მოცემული პატარა კომპონენტი. კამათლის ღილაკზე დაჭერისას სერვერიდან უნდა წამოიღოთ ახალი რჩევა და ვებ-გვერდზე განაახლოთ რჩევის ტექსტი და id.

სერვერი (API), რომელიც რჩევებს გვიბრუნებს არის AdviceSlip: https://api.adviceslip.com/

ღილაკზე დაჭერისას random რჩევა უნდა გამოიტანოთ. ამისთვის არის მისამართი - https://api.adviceslip.com/advice (ბრაუზერში რომ ჩაწეროთ და Enter-ს დააჭიროთ, მიიღებთ json-ს)

გამოიყენეთ Javascript-ის built-in ფუნქცია fetch. გაიხსენეთ როგორ წაიკითხოთ სერვერიდან დაბრუნებული json ინფორმაცია. პატარა მაგალითი:

```js
fetch('https://some-url.com')
  .then(response => response.json())
  .then(json => console.log(json))
```

ან `async/await` სინტაქსით:

```js
const response = await fetch('https://some-url.com')
const jsonData = await response.json()

console.log(jsonData)
```

რჩევების ტექსტის და id-ის განახლებისთვის (ყოველი ღილაკის დაჭერისას) დაგჭირდებათ state-ის გამოყენება.
