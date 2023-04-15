import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from "./game.component";
import {GameSettingsComponent} from "./game-settings/game-settings.component";
import {QuestionAndAnswerComponent} from "./question-and-answer/question-and-answer.component";
import {FinishComponent} from "./finish/finish.component";
import {SharedModule} from "../shared/shared.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    GameComponent,
    GameSettingsComponent,
    QuestionAndAnswerComponent,
    FinishComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        SharedModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatCardModule,
        MatListModule,
        MatTooltipModule,
        TranslateModule,
    ]
})
export class GameModule {
}
