import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  form: UntypedFormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.form = new UntypedFormGroup({
      setting: new UntypedFormGroup({
        gameName: new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
        gameTime: new UntypedFormControl('0'),
        bgcolor: new UntypedFormControl(null),
        leaderBoard: new UntypedFormControl('0'),
        leaderBoardShow: new UntypedFormControl(true),
        gameTimeShow: new UntypedFormControl(true),
        showPoint: new UntypedFormControl(true),
        EliminatedForWrongAnswer: new UntypedFormControl(false),
        ModAnswerShow: new UntypedFormControl(false),
        UserCorrectShowAnswer: new UntypedFormControl(false),
        UserQuestionAndAnswerShow: new UntypedFormControl(true),
        ModTagoPinShow: new UntypedFormControl(true),
        RateTheGame: new UntypedFormControl(false),
        gameType: new UntypedFormGroup({
          userRegisterLogin: new UntypedFormControl(true),
          userNickNameLogin: new UntypedFormControl(false),
        }),
      }),
      question_answer: new UntypedFormGroup({})
    });
  }

  ngOnInit() {
  }

  getValue() {
    console.log(this.form.value)
  }

  get setting() {
    return this.form.controls['setting']
  }

  get question() {
    return this.form.controls['question_answer']
  }
}
