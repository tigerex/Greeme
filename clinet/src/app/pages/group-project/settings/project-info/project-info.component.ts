import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/mem-project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  checked: boolean = false;
  selected: any[] = [];
  memProject: any[] = [];
  visible: boolean = false;

  constructor(
    private memProjectService: MemberService,
    public router: Router
  ) {}

  ngOnInit() {
    this.memProject= this.memProjectService.menbersProject;
  }

  projectCustomFields: any[] = [
    {
      title: 'Product',
      key: 'Product',
      check: false,
    },
    {
      title: 'Country',
      key: 'Country',
      check: false,
    },
    {
      title: 'Department',
      key: 'Department',
      check: false,
    },
  ];

  modulesChecked: any[] = [
    {
      title: 'CRM',
      key: 'CRM',
    },
    {
      title: 'Wiki',
      key: 'Wiki',
    },
    {
      title: 'Product',
      key: 'Product',
    },
    {
      title: 'Spent Time',
      key: 'Spent Time',
    },
    {
      title: 'Documents',
      key: 'Documents',
    },
    {
      title: 'Scrum Board',
      key: 'Scrum Board',
    },
    {
      title: 'Gantt',
      key: 'Gantt',
    },
    {
      title: 'News',
      key: 'News',
    },
    {
      title: 'Budgets',
      key: 'Budgets',
    },
    {
      title: 'Kanban Board',
      key: 'Kanban Board',
    },
    {
      title: 'Task Tracking',
      key: 'Task Tracking',
    },
    {
      title: 'Risks',
      key: 'Risks',
    },
    {
      title: 'Mind Maps',
      key: 'Mind Maps',
    },
    {
      title: 'Quick Planning',
      key: 'Quick Planning',
    },
    {
      title: 'Earned Values',
      key: 'Earned Values',
    },
    {
      title: 'Accounts',
      key: 'Accounts',
    },
    {
      title: 'Checklists',
      key: 'Checklists',
    },
    {
      title: 'Test Cases',
      key: 'Test Cases',
    },
    {
      title: 'Resources',
      key: 'Resources',
    },
    {
      title: 'Stakeholders',
      key: 'Stakeholders',
    },
    {
      title: 'DMS',
      key: 'DMS',
    },
    {
      title: 'Files',
      key: 'Files',
    },
    {
      title: 'Calendar',
      key: 'Calendar',
    },
    {
      title: 'Baselines',
      key: 'Baselines',
    },
    {
      title: 'Easy Web Hooks',
      key: 'Easy Web Hooks',
    },
  ];

  trackerChecked: any[] = [
    {
      title: 'Bug',
      key: 'b',
    },
    {
      title: 'Issue',
      key: 'i',
    },
    {
      title: 'Deliverable',
      key: 'd',
    },
    {
      title: 'Task',
      key: 't',
    },
    {
      title: 'Ticket',
      key: 'ti',
    },
    {
      title: 'User Story',
      key: 'us',
    },
  ];

  cancel() {
    this.router.navigate(['/projectlist']);
  }

  showDialog() {
    this.visible = true;
  }

  handleCheckboxChange(event: any) {
    const product = event.value;
    console.log('Checkbox clicked:', product);
  }
}
