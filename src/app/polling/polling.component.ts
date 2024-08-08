import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';


interface Candidate {
  name: string;
  photo: string;
  votes: number;
}
@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrl: './polling.component.css'
})
export class PollingComponent implements OnInit {

  candidates: Candidate[] = [
    { name: 'Candidate 1', photo: 'assets/c1.png', votes: 0 },
    { name: 'Candidate 2', photo: 'assets/c2.png', votes: 0 },
    { name: 'Candidate 3', photo: 'assets/c3.png', votes: 0 }
  ];

  ngOnInit(): void {
    this.updateVoteResults();

  }

  voteResults: any[] = [];

  view: [number, number] = [700, 400];
  colorScheme: Color = {
    name: 'default',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  

  vote(candidate: Candidate) {
    candidate.votes++;
    this.updateVoteResults();
  }

  updateVoteResults() {
    this.voteResults = this.candidates.map(candidate => ({
      name: candidate.name,
      value: candidate.votes
    }));
  }

}
