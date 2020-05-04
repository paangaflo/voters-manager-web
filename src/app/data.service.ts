import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  constructor() { }
  createDb(){

    let  votes =  [
      {  
        id:  1,  
        person:  'Kanye West',  
        category: 'Entertainment', 
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: './assets/images/kanye-west.png',
        time: '1 mouth ago',
        positive: 8,
        negative: 3
      },
      {  
        id:  2,  
        person:  'Mark Zuckerberg',  
        category: 'Business', 
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: './assets/images/markc-zukerberg.png',
        time: '1 mouth ago',
        positive: 5,
        negative: 14
      },
      {  
        id:  3,  
        person:  'Cristna Fernandez de Kirchner',  
        category: 'Politics', 
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: './assets/images/cristina-fernandez.png',
        time: '1 mouth ago',
        positive: 6,
        negative: 6
      },
      {  
        id:  4,  
        person:  'Malala Yousafzai',  
        category: 'Entertainment', 
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: './assets/images/malala-yousafzai.png',
        time: '1 mouth ago',
        positive: 9,
        negative: 10
      },  
    ];

    return { votes };
   }
}
