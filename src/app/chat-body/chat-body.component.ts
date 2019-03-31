import { Component, OnInit, Directive } from '@angular/core';
import { Inbox, Sender, SocialNetworks, Mydata, SocialBackground } from './inbox';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {

  constructor() { }
  inboxes: Inbox[] = [];
  senders: Sender[] = [];
  myDatas: Mydata[] = [];
  socials: SocialNetworks[] = [];

  socialBackgrounds: SocialBackground[] = [];

  selectedSender: Sender;
  myChatMessage: Mydata;
  ngOnInit() {
    this.inboxes = [
      { id: 1, name: "All Messages", count: 21 },
      { id: 2, name: "Unread", count: 89 },
      { id: 3, name: "Important", count: 6 },
      { id: 4, name: "Drafts", count: 27 },
      { id: 5, name: "Teams", count: 4 },
      { id: 6, name: "Groups", count: 3 },
      { id: 7, name: "Channels", count: 18 },
      { id: 8, name: "Locations", count: 0 },
      { id: 9, name: "Media", count: 128 },
      { id: 10, name: "Help", count: 0 },
      { id: 11, name: "Settings", count: 0 }

    ],
      this.senders = [
        { id: 1, name: "Matt Thompson ", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", profilImage: "assets/img/profiles/1.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "July 12,1988", gender: "Male", language: "English", nickname: "Killa Matt" },
        { id: 2, name: "Claire Sharwood", message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium", profilImage: "assets/img/profiles/2.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "May 12,1988", gender: "Female", language: "English", nickname: "Killa Claire" },
        { id: 3, name: "Kristen Mckellar", message: "ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo", profilImage: "assets/img/profiles/3.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "Aug 12,1988", gender: "Female", language: "English", nickname: "Killa Kella" },
        { id: 4, name: "Shaun Gardner", message: "uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", profilImage: "assets/img/profiles/4.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "Jan 12,1988", gender: "Male", language: "English", nickname: "Killa Sha" },
        { id: 4, name: "Mace Windu", message: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ", profilImage: "assets/img/profiles/5.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "March 12,1988", gender: "Male", language: "English", nickname: "Killa Mace" },
        { id: 4, name: "Kayne West", message: " nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in", profilImage: "assets/img/profiles/6.jpg", adress: "Cape Town,RSA", telephone: "0215 5151 515", birthDate: "Feb 12,1988", gender: "Male", language: "English", nickname: "Killa Kayne" },
      ],
      this.myDatas = [
        { id: 1, message: "You are like a cycle ...You make my journey of life smooth ride-moving forward together taking the rough with the smooth, you help me keep my balance and gave me new confidence . Happy valentine's day" }
        // {id:2,message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
      ],
      this.socials = [
        { id: 1, path: "assets/img/snIcons/1.png" },
        { id: 2, path: "assets/img/snIcons/2.png" },
        { id: 3, path: "assets/img/snIcons/3.png" },
        { id: 4, path: "assets/img/snIcons/4.png" },
        { id: 5, path: "assets/img/snIcons/5.png" },

      ],
      this.socialBackgrounds = [
        { color: "#1D232A" },
        { color: "#232A31" }
      ]
  }
  selectSender(sender: Sender) {
    this.selectedSender = sender;

  }
  showMyMessage(myMessage: Mydata) {
    this.myChatMessage = myMessage;
  }

  changeBg() {
    let color = "#516172";
    document.getElementById("socialNets").style.background = color;
  }
}
