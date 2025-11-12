import { Component } from '@angular/core';

@Component({
  selector: 'app-cars2',
  standalone: true,
  imports: [],
  templateUrl: './cars2.html',
  styleUrl: './cars2.css'
})
export class Cars2 {
  cars: any = [
    {
      id: 1,
      name: "BMW M3",
      image: "https://imgs.search.brave.com/rrbdjMpieDyJREDj67MqYF3VYrOdGETgNSchrUVAwNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/NS8yOC8xNS80My9j/YXItNzIyNzU1Ml82/NDAuanBn"
    },
    {
      id: 2,
      name: "Porsche 911",
      image: "https://imgs.search.brave.com/dMHQoqMg5nTpvMEcPd1ikAFRR1Idh2yYSYOVNlKQt_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZHJpdmVzcGFy/ay5jb20vNjAweDQw/MC9waC1iaWcvMjAx/OC8xMS8yMDE5LXBv/cnNjaGUtOTExLWNh/cnJlcmEtNHMtZXh0/ZXJpb3ItMi5qcGc"
    },
    {
      id: 3,
      name: "Ferrari F40",
      image: "https://imgs.search.brave.com/Ov1-nL8jeaVRzVnH-bnPGMtAqjknAIpAsPkFXTguVNc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzI0Lzg4LzQx/LzM2MF9GXzIyNDg4/NDE4NV9ycmtReUhE/ZWxRa0RLclR2TkVG/ZHd5dU1iT0c4eFNq/Zi5qcGc"
    }
  ]
}
