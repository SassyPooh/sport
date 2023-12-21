import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyReplacer'
})
export class VoyReplacerPipe implements PipeTransform {

  transform(ch:string): string {
    let table=["A","E","I","O","U","Y"];
    let newCh="";
    for (let i = 0; i < ch.length; i++) {
      let vowel = false;
    for (let j = 0; j < table.length; j++) {
        if (table[j]==ch[i]) {
          vowel = true;
          break;
        }
      }
      if (vowel) {
        newCh += "*";
      }else{
       newCh+=ch[i];
      }
      
    }
    return newCh;
  }

}
