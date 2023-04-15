import {Component, Input, OnInit} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {
  @Input() question: any;

  constructor() {
  }

  ngOnInit() {
  }

  get answers() {
    return this.question.controls.answers.controls
  }

  get answerArr() {
    return this.question.get('answers') as UntypedFormArray;
  }

  change(id: number) {
    this.answers.forEach((x: any, index: any) => {
      this.answers[index].controls.answerTruFalse.setValue(false)
    });
    this.answers[id].controls.answerTruFalse.setValue(true)
  }

  removeAnswer(removeItemId: any, valid: any) {
    if (valid === true) this.answers[0].controls.answerTruFalse.setValue(true)
    this.answerArr.removeAt(removeItemId);
  }

  answerAdd() {
    if (this.question.controls.answers.length <= 4) {
      this.question.controls.answers.push(new UntypedFormGroup({
        answerText: new UntypedFormControl('', [Validators.required]),
        answerTruFalse: new UntypedFormControl(false, [Validators.required]),
      }));
    } else {
      alert('You cannot add more answers')
    }
  }
}
