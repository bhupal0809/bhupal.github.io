// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

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
        // compareDNA(another){ 
        //     let count = 0;
        //     for(let i=0; i<another.dna.length;i++){
        //             if(another.dna[i] == this.dna[i]){
        //                 count += 1;
        //         }
        //     }
        //     let percentage = count/this.dna.length * 100;
        //     return `specimen ${another.specimenNum} and specimen ${this.specimenNum} have ${percentage} DNA in common`;
        // }
        compareDNA(otherOrg) {
            const similarities = this.dna.reduce((acc, curr, idx, arr) => {
              if (arr[idx] === otherOrg.dna[idx]) {
                return acc + 1;
              } else {
                return acc;
              }
            }, 0);
            const percentOfDNAshared = (similarities / this.dna.length) * 100;
            const percentageTo2Deci = percentOfDNAshared.toFixed(2);
            console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
          }
    }
}

let dna1 = ['C', 'C', 'T', 'G','C', 'A', 'G', 'A','A', 'T', 'T', 'C','C', 'C', 'A']
let dna2 = ['A', 'A', 'C', 'C','T', 'A', 'G', 'A','A', 'G', 'G', 'C','G', 'A', 'T']
  

const newThing = pAequorFactory(2,dna1)

const newThing2 = pAequorFactory(3,dna2)

console.log(newThing.compareDNA(newThing2))


