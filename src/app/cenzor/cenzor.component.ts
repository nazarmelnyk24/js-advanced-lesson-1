import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})

export class CenzorComponent implements OnInit {

  public word = '';
  public text = '';
  public wordList: string[] = [];
  public wordListFormatted = '';
  public wordPlaceholder = 'word here';
  public textPlaceholder = 'text here';

  constructor() { }

  ngOnInit(): void {
  }

  addWord() {
    if(this.word.trim().length > 0) {
      this.wordList = [...this.wordList, this.word];
      this.wordListFormatted = this.wordList.join(' ');
      this.word = '';
      this.wordPlaceholder = 'word here';
    } else {
      this.word = '';
      this.wordPlaceholder = 'Please write a word!';
    }
  }

  cenzorText() {
    if(this.text.trim().length > 0) {
      this.wordList.forEach(word => {
        let regex: RegExp = new RegExp(`\\b${word}\\b`, 'gi');
        let stars = '*'.repeat(word.length);
        let cenzored = this.text.replace(regex, stars);
        this.text = cenzored;
    })} else {
      this.text = '';
      this.textPlaceholder = 'Please write a text!';
    }
  }

  resetForm() {
    this.wordList = [];
    this.wordListFormatted = '';
    this.word = '';
    this.text = '';
    this.wordPlaceholder = 'word here';
    this.textPlaceholder = 'text here';
  }
}