სტარტერ კოდი: https://codesandbox.io/p/sandbox/mz-react-starter-forked-rqxgl4

### 1. Bugs, bugs, buuugs 😬😤
პროექტის გაშვებისას დაგხვდებათ ბევრი ერორი. თქვენი მიზანია წაიკითხოთ, გაიაზროთ და აღმოფხვრათ თითოეული პრობლემა რიგრიგობით. ამაში დაგეხმარებათ Vite-ის error მესიჯები და ბრაუზერის კონსოლის ჩანაწერები. დაახლოებით 5-9 სხვადასხვა ტიპის შეცდომაა (ზუსტი რიცხვი არ დამითვლია)

**მნიშვნელოვანია**: ყოველი შეცდომის აღმოფხვრის შემდეგ, შესაბამის ადგილას დაამატეთ მოკლე კომენტარი, ქართულად. დაწერეთ რა იყო პრობლემა.

### 2. კომპონენტის ფუნქციები
Book ღილაკზე დაჭერისას alert-ით უნდა გამოვიდეს ასეთი ტექსტი:

```
"Booking flight from <source> to <destination> (<hours> hours)"
```
აქ `source`, `destination` და `hours` იმ ფრენის ინფორმაციაა, რომელზეც მომხმარებელი დააჭერს.

* სტატუსის სვეტში პირობითად უნდა გამოვიდეს ტექსტი "Full" ან "Available", იმის მიხედვით დარჩენილია თუ არა ფრენაზე ადგილები (`flightCapacity` არის ადგილების რაოდენობა `flights.json`-ში).
* Book ღილაკი უნდა იყოს პირობითად disabled. იმ ფრენებზე, რომლებზეც ადგილი აღარ არის დარჩენილი (მგზავრების რაოდენობა შევსებულია), ღილაკზე არ უნდა ეჭირებოდეს მაუსით.
* ფრენის ხანგრძლივობის სვეტი (duration) უნდა გადაიყვანოთ საათებში და ზედმეტი რიცხვები მოაშოროთ.

გამოგზავნილ დავალებაში არ უნდა იყოს ერორები ან გაფრთხილებები. ასე უნდა გამოიყურებოდეს ვებ-გვერდი: 

![Flights table](/homework/descriptions/img-attachments/6-1.png)

(სტილი უკვე დაწერილია. არ არის რამის დამატება საჭირო)