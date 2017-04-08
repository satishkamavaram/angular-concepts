export class CounterService {

   activeCount = 0;
   inActiveCount = 0;

   incrementActiveCount(){
     this.activeCount++;
     console.log('increment count active : '+this.activeCount);
   }

   incrementInActiveCount(){
     this.inActiveCount++;
      console.log('increment count inactive : '+this.inActiveCount);
   }

   decrementActiveCount(){
     this.activeCount++;
   }

   decrementInActiveCount(){
     this.inActiveCount++;
   }


}
