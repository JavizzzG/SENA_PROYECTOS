import { Component, computed, signal } from '@angular/core';
import { Bmw } from '../bmw/bmw';
import { Porsche } from '../porsche/porsche';
import { Pagani } from '../pagani/pagani';

export interface CarsInterface {
  name: string,
  image: string
}

@Component({
  selector: 'app-app-cars',
  imports: [Bmw, Porsche, Pagani],
  templateUrl: './app-cars.html',
  styleUrl: './app-cars.css'
})
export class AppCars {
  carsBmwSelected = signal<string[]>([]);

  newChangeOnCarsBmwSelected(names: string[]){
    this.carsBmwSelected.set((names));
  }
  carsPorscheSelected = signal<string[]>([]);

  newChangeOnCarsPorscheSelected(names: string[]){
    this.carsPorscheSelected.set((names));
  }
  carsPaganiSelected = signal<string[]>([]);

  newChangeOnCarsPaganiSelected(names: string[]){
    this.carsPaganiSelected.set((names));
  }

  allCarsSelected = computed(() => {
    return this.carsBmwSelected().concat(this.carsPorscheSelected()).concat(this.carsPaganiSelected())
  });

  bmw = signal<CarsInterface[]> ([
    {
      name: "BMW M4",
      image: "https://imgs.search.brave.com/mxYtWUZRDB8Qp_AYCkmxZjeo43dy-uoCKEJh171010o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/OTc2NTcwNy9waG90/by9ibXctbTQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTZk/OFVOZVhiX0MwZXFi/LU9IYVlwOHU1ODFt/WjN2NkNwS0JaQVps/elFkSGs9"
    },
    {
      name: "BMW M3",
      image: "https://imgs.search.brave.com/KAH-eU6REdAUq88rzeCeFVgKT5eEG8FFQ8JVYdn7fnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzUzLzQ5Lzk3/LzM2MF9GXzE2NTM0/OTk3NDdfWVFxVFRj/NzJEcDhGV2lrT3A0/MDF3TkdIdDk4Nmg3/QW4uanBn"
    },
    {
      name: "BMW M5",
      image: "https://imgs.search.brave.com/fMbOB2L76-Xn25R1Y9Z46D43FpUdIQ6Edq-oXslQoVI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmltbWVyYXJjaGl2/ZS5vcmcvaW1hZ2Vz/L3NtLzE0ODc1LTY1/NC1ibXctbTVAMngu/anBn"
    }
  ])

  porsche = signal<CarsInterface[]> ([
    {
      name: "Porsche 911",
      image: "https://imgs.search.brave.com/YBbgNhjC4qzSSyze8daa0_r4eDv8nJtp9J0CMhWkauQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uemlnd2hlZWxz/LnVzL21lZGl1bS9n/YWxsZXJ5L2V4dGVy/aW9yLzI1LzE2OC9w/b3JzY2hlLTkxMS0z/Mzc1My5qcGc"
    },
    {
      name: "Porsche 901",
      image: "https://imgs.search.brave.com/e5TM8jGEdv9CnHtO0-YtZWFRvJYGNQ_XhUZjjmrIeGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb3Jz/Y2hlcGljdHVyZXMu/Zmxvd2NlbnRlci5k/ZS9wbWRiL3RodW1i/bmFpbC5jZ2k_aWQ9/MjUyOTAwJnc9MTQ0/MCZoPTgxMiZjcm9w/PTEmcHVibGljPTEm/Y3M9MTgzMDhjYjI3/M2Q2M2RlZA"
    },
    {
      name: "Porsche 911 GT3 RS",
      image: "https://imgs.search.brave.com/3FR1NmDJ029Uf0BNZN8zmyXSr2okerGXxyF3hELLst0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hLnN0/b3J5Ymxvay5jb20v/Zi8zMjIzMjcvMTcw/MHgxMzAwL2RiY2Ew/YTRmZDAvY3oyM3Yy/MG94MDA0MC05MTEt/Z3QzLXJzLWZyb250/LmpwZy9tLzk5MHg2/NzMvc21hcnQvZmls/dGVyczpmb3JtYXQo/d2VicCk"
    }
  ])

  pagani = signal<CarsInterface[]> ([
    {
      name: "Pagani Huayra",
      image: "https://imgs.search.brave.com/F9orM9jZW0i3zcHX0us9c1cw7Rj9ugNAX3ra6Sf3C30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9wYWdhbmkt/aHVheXJhLXJvYWRz/dGVyLWJjLXNob3Qt/MjYwbnctMTgxNTk4/NjU3OS5qcGc"
    },
    {
      name: "Pagani Zonda",
      image: "https://imgs.search.brave.com/ksO963QXsEd-62LsmxArnOv7d5YpUjnBss7b_FKupSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFkNHdoZWVscy5j/b20vaW1nL2ZyZWUt/Y2FyLWltYWdlcy9k/ZXNrdG9wLzI5MjAv/cGFnYW5pLXpvbmRh/LXItMjAwOS0yNDc2/MjQuanBn"
    },
    {
      name: "Pagani Utopía",
      image: "https://imgs.search.brave.com/YGgjNN1mb2DwDdfnXjNIN8cboytOqnz_Wlal0_rfo0A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZmFzdGx5LmF1dG9n/dWlkZS5jb20vbWVk/aWEvMjAyMy8wNy8w/Mi8xMzQ1ODIyOS9w/YWdhbmktdXRvcGlh/LXJldmlldy1zcGVj/cy1wcmljaW5nLWZl/YXR1cmVzLXZpZGVv/cy1hbmQtbW9yZS5q/cGc_c2l6ZT03MjB4/ODQ1Jm5vY3JvcD0x"
    }
  ])
}
