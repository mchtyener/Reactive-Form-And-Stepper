import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {
  @Input() gameSettings: any;
  leaderBoardShow: boolean = true;
  gameTimeShow: boolean = true;
  form: any;
  audSrc?: string
  color: string = '#587879';

  constructor() {
  }

  ngOnInit() {
    this.form = this.gameSettings.controls.setting;
  }

  get gf() {
    return this.form.controls;
  }

  toggle(e: any, type: string) {
    if (type === 'Register') {
      if (e.checked === false) {
        this.gf.gameType.controls.userNickNameLogin.setValue(true)
        this.gf.gameType.controls.userRegisterLogin.setValue(false)
        return
      } else {
        this.gf.gameType.controls.userNickNameLogin.setValue(false)
        this.gf.gameType.controls.userRegisterLogin.setValue(true)
      }
    } else {
      if (e.checked === false) {
        this.gf.gameType.controls.userRegisterLogin.setValue(true)
        this.gf.gameType.controls.userNickNameLogin.setValue(false)
        return
      } else {
        this.gf.gameType.controls.userNickNameLogin.setValue(true)
        this.gf.gameType.controls.userRegisterLogin.setValue(false)
      }
    }
  }

  showHide(e: any, type: string) {
    if (type === 'leaderBoardShow') {
      if (e.checked === false) {
        this.leaderBoardShow = false
        this.gf.leaderBoard.setValue(0)
      } else {
        this.leaderBoardShow = true
      }
    } else {
      if (e.checked === false) {
        this.gameTimeShow = false
        this.gf.gameTime.setValue(0)
      } else {
        this.gameTimeShow = true
      }
    }
  }

  onEventLog(colorPickerOpen: string, $event: any,) {
    this.gf.bgcolor.setValue($event)
  }
}
