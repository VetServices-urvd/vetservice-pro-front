import { Component, OnInit } from '@angular/core';
import { SideMenuItem, LINKS } from '../../../models/common.model';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-home-page-view',
  templateUrl: './home-page-view.component.html',
  styleUrls: ['./home-page-view.component.scss']
})
export class HomePageViewComponent implements OnInit {
  showFiller = false;
  current_menu_index = 0;
  menuitems:SideMenuItem[] = [
    {num: 0, disable: false, title: "Gestion des collaborateurs",  iconName: "group", selected: true,
      route: LINKS.collaborateur},
    {num: 1, disable: false, title: "Gestions des cliniques", iconName: "health_and_safety", selected: false,
    route: LINKS.clinique},
    {num: 2, disable: false, title: "Compte et abonnement", iconName: "manage_accounts", selected: false, endofCategorie:true,
    route: LINKS.compte_abonnement},
    {num: 3, disable: false, title: "Gestion des rendez-vous", iconName: "edit_calendar", selected: false },
    {num: 4, disable: false, title: "Vos catalogues produits", iconName: "medication", selected: false }
  ];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    let verifUrl: boolean | null = null;
    const url_current:string = window.location.href;
    this.menuitems.map(m => {
      if(m.route && url_current.includes(m.route) && !m.selected && !m.disable) {
        this.menuitems[this.current_menu_index].selected = false;

        //update new
        m.selected = true;
        this.current_menu_index = m.num;
      }
    });

    console.log("Menu state init: "+JSON.stringify(this.menuitems));
  }

  menu_item_selection(menu: SideMenuItem) {
    if(menu.num === this.current_menu_index) return;
    // update last menu
    this.menuitems[this.current_menu_index].selected = false;

     // update new menu
    this.current_menu_index = menu.num;
    this.menuitems[this.current_menu_index].selected = true;
    console.log("Menu state: "+JSON.stringify(this.menuitems));
    switch(menu.num){
      case 0:
        this.navigationService.navigateTo('veterinaire/home');
        break;
      case 1:
        this.navigationService.navigateTo('veterinaire/home/clinique');
        break;
      case 2:
        this.navigationService.navigateTo('veterinaire/home/compte&abonnement');
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }

}