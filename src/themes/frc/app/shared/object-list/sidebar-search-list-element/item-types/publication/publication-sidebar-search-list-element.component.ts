import {
  AsyncPipe,
  NgClass,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItemSearchResult } from '@dspace/core/shared/object-collection/item-search-result.model';
import { Context } from '../../../../../../../../app/core/shared/context.model';
import { ViewMode } from '../../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { PublicationSidebarSearchListElementComponent as BaseComponent } from '../../../../../../../../app/shared/object-list/sidebar-search-list-element/item-types/publication/publication-sidebar-search-list-element.component';
import { TruncatablePartComponent } from '../../../../../../../../app/shared/truncatable/truncatable-part/truncatable-part.component';
import { MetadataDirective } from '../../../../../../../../app/shared/metadata.directive';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.SideBarSearchModal, 'frc')
@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.SideBarSearchModalCurrent, 'frc')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.SideBarSearchModal, 'frc')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.SideBarSearchModalCurrent, 'frc')
@Component({
  selector: 'ds-publication-sidebar-search-list-element',
  // templateUrl: './publication-sidebar-search-list-element.component.html',
  templateUrl: '../../../../../../../../app/shared/object-list/sidebar-search-list-element/sidebar-search-list-element.component.html',
  imports: [
    AsyncPipe,
    MetadataDirective,
    NgClass,
    TranslateModule,
    TruncatablePartComponent,
  ],
})
export class PublicationSidebarSearchListElementComponent extends BaseComponent {
}
