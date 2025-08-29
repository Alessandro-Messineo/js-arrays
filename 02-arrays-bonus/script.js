const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let saveReverseTeachers = [];
for(i = teachers.length-1; i > -1; i--){
  saveReverseTeachers.push(teachers[i]);
}
const reversedTeachers = saveReverseTeachers;
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let saveLongNames = [];
for(i = 0; i < teachers.length; i++){
  if(teachers[i].length >= 5){
    saveLongNames.push(teachers[i]);
  }
}
const longNames = saveLongNames;
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const deletEd = teachers.indexOf("Ed");
teachers.splice(deletEd, 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;