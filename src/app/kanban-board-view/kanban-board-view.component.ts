import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { dataList } from './dataList';

@Component({
  selector: 'app-kanban-board-view',
  templateUrl: './kanban-board-view.component.html',
  styleUrls: ['./kanban-board-view.component.scss']
})
export class KanbanBoardViewComponent implements OnInit {
  statusList: any[] = [
    { statusId: 1, name: 'Open', nextStatus: [1, 3, 5, 4], disabled: false, },
    { statusId: 2, name: 'Reopened', nextStatus: [3, 5, 2, 4], disabled: false, },
    { statusId: 3, name: 'In Progress', nextStatus: [3, 5, 4], disabled: false, },
    { statusId: 4, name: 'On Hold', nextStatus: [3, 5, 4], disabled: false, },
    { statusId: 5, name: 'Closed', nextStatus: [5, 2], disabled: false, },
  ];
  dataList = JSON.parse(JSON.stringify(dataList));

  constructor() { }

  ngOnInit() {
    this.dataList.forEach(element => {
      element.tooltip =
        'Title: ' + (element?.title || '-') +
        '\nTopic: ' + (element?.topicName || '-') +
        '\nSub Topic: ' + (element?.subTopicName || '-');
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    const item: any = event.previousContainer.data[event.previousIndex];
    const dragListElement = event.container.id.split('-');
    const lastElement = dragListElement[dragListElement.length - 1];
    const newStatusId = this.statusList[Number(lastElement)].statusId;

    if (item.statusId != newStatusId) {
      const newDataList = JSON.parse(JSON.stringify(this.dataList));
      const index = newDataList.findIndex(ele => ele.id == item.id);
      newDataList[index].statusId = newStatusId;

      this.dataList = newDataList;
    }
  }

  cdkDragStarted(event) {
    if (event?.source?.dropContainer?.id) {
      const dragListElement = event.source.dropContainer.id.split('-');
      const lastElement = dragListElement[dragListElement.length - 1];
      const nextStatusList = this.statusList[Number(lastElement)].nextStatus;
      this.statusList.forEach(element => {
        element.disabled = false;
        if (!nextStatusList.includes(element.statusId)) {
          element.disabled = true;
        }
      });
    }
  }

  cdkDragEnded(event) {
    this.statusList.forEach(element => {
      element.disabled = false;
    });
  }
}
