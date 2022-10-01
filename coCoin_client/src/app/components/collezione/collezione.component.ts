import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collezione',
  templateUrl: './collezione.component.html',
  styleUrls: ['./collezione.component.css']
})
export class CollezioneComponent implements OnInit {

  coinList = [
    {id: 1, imageUrl: "http://www.romacoins.com/WebRoot/ce_it/Shops/990481405/5716/668B/90CB/519A/31B3/C0A8/1911/8530/2_Euros_Commemorative_Finlande_2004.jpg",
     title: "2 euro Finlandia", description:"Una descrizione della moneta della finlandia, 2 euro commemorativi unici al mondo, pezzo raro"},
    {id: 2, imageUrl: "https://mediacore.kyuubi.it/euroanticaporta/media/img/2015/10/27/87686-large-2-euro-italia-2012-ume-decennale-unione-monetaria.jpg", 
    title: "2 euro Italia", description:"Una descrizione della moneta della finlandia, 2 euro commemorativi unici al mondo, pezzo raro"},
    {id: 3, imageUrl: "https://mediacore.kyuubi.it/euroanticaporta/media/img/2016/4/7/87558-large-2-euro-germania-2016-sachsen-zwinger-zecca-g.jpg", title: "2 euro Germania", 
    description:"Una descrizione della moneta della finlandia, 2 euro commemorativi unici al mondo, pezzo raro"},
    {id: 4, imageUrl: "https://eurocollezione.altervista.org/_JPG_/_SPAGNA_/2euro.jpg", title: "2 euro Spagna",
     description:"Una descrizione della moneta della finlandia, 2 euro commemorativi unici al mondo, pezzo raro"},
    {id: 5, imageUrl: "https://i.ebayimg.com/images/g/7PEAAOSwzqFfEFEm/s-l500.jpg", title: "2 euro Grecia",
     description:"Una descrizione della moneta della finlandia, 2 euro commemorativi unici al mondo, pezzo raro"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isLast(id: number): boolean {
    return id === this.coinList.length;
  }

}
