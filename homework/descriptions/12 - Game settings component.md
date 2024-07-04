შექმენით ახალი React-ის პროექტი npm create vite@latest ბრძანებით. ან გააკეთეთ React-ის starter კოდის fork: https://codesandbox.io/p/devbox/mz-react-starter-2-nmh2ml

ამ დავალებაში უნდა შექმნათ ასეთი ფორმა/input-ები:

![Game settings component interface](/homework/descriptions/img-attachments/12-1.png)

თითქმის ყველა input იწვევს real-time ვიზუალურ განახლებას, start ღილაკს სანამ დავაჭერთ, მაშინაც კი. ამიტომ დაგჭირდებათ კონტროლირებადი (ან უბრალოდ state-ში შენახული) input-ები.

1. საწყისი მნიშვნელობები უნდა იყოს: სირთულე - Medium, ხმის დონე - 3 (ვიზუალური)
2. სირთულის ცვლილებისას, უნდა შეიცვალოს სიცოცხლეების რაოდენობა (💗) მარჯვენა ზედა კუთხეში: easy - 5, medium - 3, hard - 1
3. უნდა შეიძლებოდეს ხმის ოთხი დონის მონიშვნა (ზუსტად ოთხის, დანარჩენი შუალედური მნიშვნელობების არა - ამას შეძლებთ `<input type="range" />`-ის ერთ-ერთი ატრიბუტით, ნახეთ MDN საიტზე). ყველაზე დაბალ დონეზე უნდა ჩანდეს emoji 🔈. მეორე და მესამე დონეზე emoji 🔉. ყველაზე მაღალ დონეზე emoji 🔊. (თუ არ ჩანს თქვენს კომპიუტერებში ეს emoji, უბრალოდ რიცხვი გამოაჩინეთ)
4. Auto save checkbox-ის მონიშვნისას უნდა გამოჩნდეს ტექსტი "Saving every 2 minutes"

![Game settings component - auto save](/homework/descriptions/img-attachments/12-2.png)

5. Start ღილაკზე დაჭერისას console-ში უნდა გამოვიდეს მომხმარებლის მონიშნული პარამეტრები: username, სირთულე, ხმის დონე და auto save. ვებ-გვერდზე უნდა დაიმალოს ფორმა და გამოჩნდეს "Joining as \<username>...", სადაც username მომხმარებლის აკრეფილი სახელია:

![Game settings component - submission interface and output](/homework/descriptions/img-attachments/12-3.png)

თუ მომხმარებლის სახელი არ იქნება ჩაწერილი, გამოიტანეთ "Joining as Guest..."

Style-ში არ ხართ შეზღუდულები, რაც გინდათ დაამატეთ/შეცვალეთ. ხმის დონის input-ისთვის გამოიყენეთ `<input type="range" />`:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
