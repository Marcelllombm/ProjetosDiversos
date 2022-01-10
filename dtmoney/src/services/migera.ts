import { createServer} from 'miragejs';


createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions',()=>{
      return[
        {
          id:1,
          title: 'Transaction 1',
          amout: 400,
          type:'deposit',
          category: 'Food',
          createdAt : new Date()
        }
      ]
    })
  }
});

export function  Migera ()  {
    return null
}


