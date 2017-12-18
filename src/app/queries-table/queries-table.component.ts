import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditQueryModalComponent } from '../edit-query-modal/edit-query-modal.component';

@Component({
  selector: 'app-queries-table',
  templateUrl: './queries-table.component.html',
  styleUrls: ['./queries-table.component.css']
})
export class QueriesTableComponent implements OnInit {

  bsModalRef: BsModalRef;
  questions = [];
  selectedQuestion: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.questions = [{
      'question': 'What two structures is JSON built on?',
      'options': [
        'A collection of name/value pairs, and an ordered list of values, or array.',
        'A collection of object/item pairs, and an ordered list of pairs, or array.',
        'A collection of name/value objects, and an ordered list of objects, or array.',
        'A collection of native-value pairs, and an ordered list of arrays, or values.'
      ],
      'answer': 'A collection of name/value pairs, and an ordered list of values, or array.',
      'category': 'Computer Science'
    },
      {
        'question': 'Which of the following is not a valid way to parse JSON string?',
        'options': [
          'JSON.eval()',
          'JSON.parse()',
          'jQuery.parseJSON()',
          'eval()'
        ],
        'answer': 'JSON.eval()',
        'category': 'Computer Science'
      },
      {
        'question': 'What does JSONP stand for?',
        'options': [
          'JSON Procedures',
          'JSON Parsing',
          'JSON with padding',
          'JSON Programming'
        ],
        'answer': 'JSON with padding',
        'category': 'Computer Science'
      },
      {
        'question': 'Which of the following code will not throw an error?',
        'options': [
          'JSON.parse(”);',
          'JSON.parse(null);',
          'JSON.parse();',
          'JSON.parse({});'
        ],
        'answer': 'JSON.parse(null);',
        'category': 'Computer Science'
      },
      {
        'question': 'How does JSON handle numeric values that cannot be represented by a sequence of digits (like Infiniti and Nan)?',
        'options': [
          'They are stored as strings and then converted when parsed.',
          'They are not permitted.',
          'They are stored fine but it’s the parsers job to convert them to numeric values.'
        ],
        'answer': 'They are not permitted.',
        'category': 'Computer Science'
      },
      {
        'question': 'Which of the following number formats are not used in JSON?',
        'options': [
          'Octal and gate',
          'Octal and binary',
          'Binary and hexadecimal',
          'Octal and hexadecimal'
        ],
        'answer': 'Octal and hexadecimal',
        'category': 'Computer Science'
      },
      {
        'question': 'What is used by the JSONObject and JSONArray constructors to parse JSON source strings?',
        'options': [
          'JSONTokener',
          'JSONParser',
          'JParser',
          'ParserJ'
        ],
        'answer':  'JSONTokener',
        'category': 'Computer Science'
      },
      {
        'question': 'Which statement about the space parameter in JSON.stringify() is false?',
        'options': [
          'It controls spacing in the resulting JSON string',
          'All three statements are false',
          'It removes whitespace',
          'It is an optional parameter'
        ],
        'answer': 'It is an optional parameter',
        'category': 'Computer Science'
      },
      {
        'question': 'True of False? The external form of a JSON object always begins and ends with {}',
        'options': [
          'True',
          'False'
        ],
        'answer': 'True',
        'category': 'Computer Science'
      },
      {
        'question': 'True of False. The order of JSON objects is always preserved.',
        'options': [
          'True',
          'False'
        ],
        'answer': 'True',
        'category': 'Computer Science'
      }];
  }

  openEditQuestionModel (query) {
    const options = query.options.filter(option => option !== query.answer);
    const queryToEdit = {
      category: query.category,
      question: query.question,
      answer: query.answer,
      option1: options[0],
      option2: options[1],
      option3: options[2],
    };
    this.bsModalRef = this.modalService.show(EditQueryModalComponent);
    this.bsModalRef.content.updateFormValues(queryToEdit);
  }

  openConfirmDeleteModal(template: TemplateRef<any>, item) {
    this.selectedQuestion = item;
    this.bsModalRef = this.modalService.show(template);
  }

  confirmDelete(): void {
    this.questions.splice(this.questions.indexOf(this.selectedQuestion), 1);
    this.bsModalRef.hide();
  }
}
