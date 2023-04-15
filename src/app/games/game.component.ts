import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  form: UntypedFormGroup
  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel> | any;

  constructor() {
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
      question_answer: new UntypedFormArray([
        new UntypedFormGroup({
          question: new UntypedFormControl('', [Validators.required]),
          answers: new UntypedFormArray([
            new UntypedFormGroup({
              answerText: new UntypedFormControl('', [Validators.required]),
              answerTruFalse: new UntypedFormControl(true, [Validators.required]),
            }),
            new UntypedFormGroup({
              answerText: new UntypedFormControl('', [Validators.required]),
              answerTruFalse: new UntypedFormControl(false, [Validators.required]),
            })
          ]),
        })
      ])
    });
  }

  ngOnInit() {
  }


  expandAll() {
    this.panels.forEach((panel: any) => panel.open());
  }

  collapseAll() {
    this.panels.forEach((panel: any) => panel.close());
  }

  newQuestionAndAnswer() {
    this.question.push(new UntypedFormGroup({
      question: new UntypedFormControl(null, [Validators.required, Validators.minLength(10)]),
      answers: new UntypedFormArray([
        new UntypedFormGroup({
          answerText: new UntypedFormControl(null, [Validators.required]),
          answerTruFalse: new UntypedFormControl(true, [Validators.required]),
        }),
        new UntypedFormGroup({
          answerText: new UntypedFormControl(null, [Validators.required]),
          answerTruFalse: new UntypedFormControl(false, [Validators.required]),
        })
      ])
    }));
  }

  getValue() {
    console.log(this.form.value)
  }

  get setting() {
    return this.form.controls['setting']
  }

  get question() {
    return this.form.controls['question_answer'] as UntypedFormArray
  }
}
