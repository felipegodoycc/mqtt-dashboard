import { Component, OnInit, ViewChild } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/shared/models/topic.model';
import { TopicsSheetComponent } from './topic-sheet/topics-sheet.component';
import { TopicDeleteDialogComponent } from './topic-delete-dialog/topic-delete-dialog.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  loading = true;
  displayedColumns: string[] = ['_id', 'name', 'topic', 'unit', 'type', 'active', 'options'];
  totalTopics = 0;
  dataSource;
  subscription: Subscription = new Subscription();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private topicService: TopicService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadTopics(this.paginator.pageIndex + 1, this.paginator.length);
  }

  addTopico(){
    this.subscription.add(
      this.dialog.open(TopicsSheetComponent, { width: '1000px'})
        .afterClosed().subscribe( res => {
          this.loadTopics(this.paginator.pageIndex + 1, this.paginator.length);
      })
    );
  }

  editTopic(topic){
    this.subscription.add(
      this.dialog.open(TopicsSheetComponent, { width: '1000px', data: topic})
        .afterClosed().subscribe( res => {
          this.loadTopics(this.paginator.pageIndex + 1,this.paginator.length);
        })
    );
  }

  deleteTopic(topic){
    this.subscription.add(
      this.dialog.open(TopicDeleteDialogComponent, { width: '500px'})
        .afterClosed().subscribe( (result: boolean) => {
          if ( result === true ) {
            this.topicService.deleteTopic(topic._id).subscribe( res => {
              this.loadTopics(this.paginator.pageIndex + 1,this.paginator.length);
            });
          }
        })
    )
  }

  activateTopic(Topic: Topic){
    this.topicService.activateTopic(Topic._id).subscribe( res => {
      this.loadTopics(this.paginator.pageIndex + 1, this.paginator.length);
    });
  }

  loadTopics(page= 1, length = 10){
    this.topicService.getTopics(page, length).subscribe( (res: any) => {
      this.dataSource = new MatTableDataSource<Topic>(res.items);
      this.dataSource.paginator = this.paginator;
      this.totalTopics = res.total;
      this.loading = false;
    });
  }
}
