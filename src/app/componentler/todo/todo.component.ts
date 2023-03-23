import { Component, DebugEventListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  yapilacaklar=[
    {
      yapilacak:"test",
      eklenmeTarihi: new Date()
    }
  ];



  ngOnInit(): void {

    this.btnSil(1);
  }

  ekle(gelenYazi:HTMLInputElement){

    if (gelenYazi.value!="") {
      let deger ={
        yapilacak:gelenYazi.value,
        eklenmeTarihi:new Date()
      };
      this.yapilacaklar.push(deger);

      gelenYazi.value="";
     }
  }

  btnSil(i:any)
  {
    const index = this.yapilacaklar.indexOf(i);
    this.yapilacaklar.splice(index, 1);

  }

}
