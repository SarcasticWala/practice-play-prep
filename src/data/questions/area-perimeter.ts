import { Question } from '@/types/quiz';

export const areaPerimeterQuestions: Question[] = [
   
   { id: 'ap-1', question: 'Find the area of a rectangle with length 12 cm and breadth 8 cm.', options: ['96', '80', '104', '88'], correctAnswer: 0, explanation: 'Area = length × breadth = 12 × 8 = 96.' },

  { id: 'ap-2', question: 'What is the perimeter of a square of side 9 cm?', options: ['18', '27', '36', '45'], correctAnswer: 2, explanation: 'Perimeter = 4 × side = 36.' },

  { id: 'ap-3', question: 'Find the area of a square whose diagonal is 10√2 cm.', options: ['100', '200', '50', '150'], correctAnswer: 0, explanation: 'Side = 10, area = 10² = 100.' },

  { id: 'ap-4', question: 'Find the circumference of a circle of radius 7 cm. (π = 22/7)', options: ['44', '88', '77', '154'], correctAnswer: 1, explanation: 'Circumference = 2πr = 88.' },

  { id: 'ap-5', question: 'Find the area of a triangle with base 16 cm and height 12 cm.', options: ['96', '192', '88', '104'], correctAnswer: 0, explanation: 'Area = ½ × base × height = 96.' },

  { id: 'ap-6', question: 'The perimeter of a rectangle is 50 cm. If its length is 15 cm, find its breadth.', options: ['10', '5', '8', '12'], correctAnswer: 0, explanation: '2(l+b)=50 → l+b=25 → b=10.' },

  { id: 'ap-7', question: 'Find the area of a circle whose diameter is 14 cm. (π = 22/7)', options: ['154', '308', '176', '98'], correctAnswer: 0, explanation: 'Radius = 7, area = 154.' },

  { id: 'ap-8', question: 'If the side of a square is increased by 50%, its area increases by:', options: ['50%', '100%', '125%', '150%'], correctAnswer: 2, explanation: 'New area factor = (1.5)² = 2.25 → increase = 125%.' },

  { id: 'ap-9', question: 'Find the perimeter of an equilateral triangle of side 14 cm.', options: ['28', '42', '56', '36'], correctAnswer: 1, explanation: 'Perimeter = 3 × side = 42.' },

  { id: 'ap-10', question: 'Find the area of a rhombus whose diagonals are 10 cm and 24 cm.', options: ['120', '240', '300', '360'], correctAnswer: 0, explanation: 'Area = ½ × d1 × d2 = 120.' },

  { id: 'ap-11', question: 'A circular field has radius 21 m. Find the cost of fencing it at ₹2 per meter. (π = 22/7)', options: ['264', '132', '176', '308'], correctAnswer: 0, explanation: 'Circumference = 132 → cost = 264.' },

  { id: 'ap-12', question: 'The area of a square is 400 cm². Find its perimeter.', options: ['80', '40', '20', '100'], correctAnswer: 0, explanation: 'Side = 20 → perimeter = 80.' },

  { id: 'ap-13', question: 'Find the area of a trapezium whose parallel sides are 12 cm and 20 cm and height is 8 cm.', options: ['128', '160', '256', '96'], correctAnswer: 0, explanation: 'Area = ½ × (12+20) × 8 = 128.' },

  { id: 'ap-14', question: 'The perimeter of a square is equal to that of a rectangle 18 cm × 12 cm. Find the side of the square.', options: ['15', '12', '18', '9'], correctAnswer: 0, explanation: 'Rectangle perimeter = 60 → square side = 15.' },

  { id: 'ap-15', question: 'Find the area of a sector of angle 90° and radius 14 cm.', options: ['154', '77', '308', '49'], correctAnswer: 1, explanation: '¼ of circle area = 77.' },

  { id: 'ap-16', question: 'A square and a rectangle have equal areas. The rectangle measures 20 cm × 5 cm. Find the side of the square.', options: ['10', '15', '20', '5'], correctAnswer: 0, explanation: 'Area = 100 → side = 10.' },

  { id: 'ap-17', question: 'Find the area of a semicircle of radius 14 cm. (π = 22/7)', options: ['308', '154', '616', '176'], correctAnswer: 1, explanation: 'Area = ½ × πr² = 154.' },

  { id: 'ap-18', question: 'The ratio of areas of two squares is 9:16. Find the ratio of their sides.', options: ['3:4', '4:3', '9:16', '16:9'], correctAnswer: 0, explanation: 'Side ratio = √(area ratio) = 3:4.' },

  { id: 'ap-19', question: 'Find the area of an equilateral triangle of side 14 cm.', options: ['49√3', '98√3', '196', '147'], correctAnswer: 0, explanation: 'Area = (√3/4)a² = 49√3.' },

  { id: 'ap-20', question: 'Which shape encloses the maximum area for a given perimeter?', options: ['Square', 'Rectangle', 'Circle', 'Triangle'], correctAnswer: 2, explanation: 'Circle encloses maximum area for given perimeter.' },

    { id: 'ap-21', question: 'Find the perimeter of a rectangle of length 16 cm and breadth 9 cm.', options: ['42', '50', '48', '40'], correctAnswer: 1, explanation: 'Perimeter = 2(l + b) = 2(16 + 9) = 50.' },

  { id: 'ap-22', question: 'Find the area of a square whose side is 18 cm.', options: ['324', '288', '360', '216'], correctAnswer: 0, explanation: 'Area = side² = 18² = 324.' },

  { id: 'ap-23', question: 'The radius of a circle is doubled. The area becomes:', options: ['2 times', '3 times', '4 times', '8 times'], correctAnswer: 2, explanation: 'Area ∝ r² → (2r)² = 4r².' },

  { id: 'ap-24', question: 'Find the area of a rectangle whose diagonal is 13 cm and breadth is 5 cm.', options: ['60', '65', '72', '78'], correctAnswer: 0, explanation: 'Length = √(13²−5²)=12 → area = 12×5 = 60.' },

  { id: 'ap-25', question: 'Find the circumference of a circle whose diameter is 28 cm. (π = 22/7)', options: ['44', '88', '176', '154'], correctAnswer: 1, explanation: 'Circumference = πd = 88.' },

  { id: 'ap-26', question: 'The perimeter of a square is 64 cm. Find its area.', options: ['256', '196', '144', '324'], correctAnswer: 0, explanation: 'Side = 16 → area = 256.' },

  { id: 'ap-27', question: 'Find the area of a triangle whose sides are 13 cm, 14 cm and 15 cm.', options: ['84', '90', '78', '70'], correctAnswer: 0, explanation: 'Using Heron’s formula → area = 84.' },

  { id: 'ap-28', question: 'The ratio of perimeters of two squares is 2:3. Find the ratio of their areas.', options: ['4:9', '2:3', '3:2', '1:3'], correctAnswer: 0, explanation: 'Area ratio = square of side ratio = 4:9.' },

  { id: 'ap-29', question: 'Find the area of a circular park whose circumference is 88 m. (π = 22/7)', options: ['616', '308', '154', '176'], correctAnswer: 1, explanation: 'Radius = 14 → area = 308.' },

  { id: 'ap-30', question: 'A wire of length 88 cm is bent into a circle. Find the area of the circle.', options: ['616', '308', '154', '176'], correctAnswer: 1, explanation: 'Circumference = 88 → r = 14 → area = 308.' },

  { id: 'ap-31', question: 'Find the area of a parallelogram with base 15 cm and height 8 cm.', options: ['120', '60', '240', '180'], correctAnswer: 0, explanation: 'Area = base × height = 120.' },

  { id: 'ap-32', question: 'A square lawn has side 25 m. Find the cost of fencing it at ₹4 per meter.', options: ['400', '300', '200', '500'], correctAnswer: 0, explanation: 'Perimeter = 100 → cost = 400.' },

  { id: 'ap-33', question: 'Find the area of a semicircle whose diameter is 14 cm.', options: ['77', '154', '308', '49'], correctAnswer: 0, explanation: 'Radius = 7 → area = 77.' },

  { id: 'ap-34', question: 'The area of a square is equal to that of a rectangle 20 cm × 5 cm. Find the side of the square.', options: ['10', '20', '15', '25'], correctAnswer: 0, explanation: 'Area = 100 → side = 10.' },

  { id: 'ap-35', question: 'Find the perimeter of a rhombus whose side is 13 cm.', options: ['39', '52', '26', '65'], correctAnswer: 1, explanation: 'Perimeter = 4 × side = 52.' },

  { id: 'ap-36', question: 'If the area of a circle is 154 cm², find its radius. (π = 22/7)', options: ['7', '14', '21', '28'], correctAnswer: 0, explanation: 'r² = 49 → r = 7.' },

  { id: 'ap-37', question: 'The length of a rectangle is thrice its breadth. If its perimeter is 64 cm, find its area.', options: ['192', '256', '128', '144'], correctAnswer: 0, explanation: 'Breadth = 8, length = 24 → area = 192.' },

  { id: 'ap-38', question: 'Find the area of an equilateral triangle whose side is 10 cm.', options: ['25√3', '50√3', '100', '75'], correctAnswer: 0, explanation: 'Area = (√3/4) × a² = 25√3.' },

  { id: 'ap-39', question: 'A circular track has an inner radius 14 m and outer radius 21 m. Find the area of the track.', options: ['770', '1100', '1540', '616'], correctAnswer: 0, explanation: 'Area = π(R²−r²) = 770.' },

  { id: 'ap-40', question: 'The side of a square is increased by 20%. Find the percentage increase in area.', options: ['20%', '40%', '44%', '48%'], correctAnswer: 2, explanation: 'Area factor = (1.2)² = 1.44 → 44% increase.' },

  { id: 'ap-41', question: 'Find the perimeter of a rectangle whose area is 96 cm² and length is 12 cm.', options: ['32', '28', '40', '36'], correctAnswer: 0, explanation: 'Breadth = 8 → perimeter = 32.' },

  { id: 'ap-42', question: 'A square is inscribed in a circle of radius 7 cm. Find the area of the square.', options: ['98', '49', '196', '147'], correctAnswer: 0, explanation: 'Diagonal = 14 → side = 7√2 → area = 98.' },

  { id: 'ap-43', question: 'Find the area of a kite whose diagonals are 10 cm and 16 cm.', options: ['80', '160', '120', '60'], correctAnswer: 0, explanation: 'Area = ½ × d1 × d2 = 80.' },

  { id: 'ap-44', question: 'If the perimeter of a square is 36 cm, find its diagonal.', options: ['9√2', '12√2', '18√2', '6√2'], correctAnswer: 0, explanation: 'Side = 9 → diagonal = 9√2.' },

  { id: 'ap-45', question: 'Find the area of a sector of angle 60° and radius 21 cm.', options: ['231', '154', '77', '462'], correctAnswer: 0, explanation: 'Area = (60/360) × πr² = 231.' },

  { id: 'ap-46', question: 'The perimeter of a rectangle is 72 cm and its length is twice its breadth. Find its area.', options: ['288', '256', '324', '360'], correctAnswer: 0, explanation: 'Breadth = 12, length = 24 → area = 288.' },

  { id: 'ap-47', question: 'Find the area of a circle whose radius is 3.5 cm. (π = 22/7)', options: ['38.5', '77', '154', '49'], correctAnswer: 0, explanation: 'Area = πr² = 38.5.' },

  { id: 'ap-48', question: 'A wire 44 cm long is bent to form a square. Find its area.', options: ['121', '144', '100', '169'], correctAnswer: 0, explanation: 'Side = 11 → area = 121.' },

  { id: 'ap-49', question: 'The ratio of areas of two squares is 16:25. Find the ratio of their perimeters.', options: ['4:5', '5:4', '16:25', '8:10'], correctAnswer: 0, explanation: 'Side ratio = 4:5 → same for perimeter.' },

  { id: 'ap-50', question: 'Find the area of a rectangular field whose length is 30 m and breadth is 20 m.', options: ['600', '500', '400', '700'], correctAnswer: 0, explanation: 'Area = length × breadth = 600.' },

];