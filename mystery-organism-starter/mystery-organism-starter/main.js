// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Factory function 
function pAequorFactory(specimenNum,dna){
  return {
    specimenNum,
    dna,
    mutate(){
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while(this.dna[randIndex] == newBase){
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(another){ 
      let count = 0;
      for(let i=0; i<another.dna.length;i++){
              if(another.dna[i] == this.dna[i]){
                  count += 1;
          }
      }
      let percentage = (count/this.dna.length * 100).toFixed(2);
      return `${another.specimenNum} and ${this.specimenNum} have ${percentage}% DNA in common`;
    },
    willLikelySurvive(){
      let count = 0;
      for (let i=0;i<this.dna.length;i++){
        if(this.dna[i] === "C" || this.dna[i] === "G"){
          count +=1;
          console.log(this.dna[i]);
          console.log(count);
        }
      }
      console.log(count);
      if (count/this.dna.length >= 0.6){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

let specimens = [];
let counter = -1;

while (specimens.length < 30){
  let newOrganism = pAequorFactory(counter,mockUpStrand())
  if(newOrganism.willLikelySurvive()){
    specimens.push(newOrganism);
  }
  counter++
}

console.log(specimens)